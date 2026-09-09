"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";
import {
  INITIAL_CONTACT_STATE,
  type ContactFormState,
} from "@/lib/validations/contact";
import { SERVICE_OPTIONS } from "@/lib/constants";

const fieldClass =
  "w-full border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-red";
const labelClass =
  "block text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted";

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs text-brand-red">
      {errors[0]}
    </p>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending && <Loader2 className="size-4 animate-spin" aria-hidden />}
      {pending ? "Sending…" : "Send Enquiry"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    INITIAL_CONTACT_STATE,
  );

  if (state.status === "success") {
    return (
      <div className="flex gap-4 border border-brand-line bg-brand-surface p-8">
        <CheckCircle2 className="size-6 shrink-0 text-brand-red" aria-hidden />
        <div>
          <h2 className="font-display text-lg font-semibold tracking-tight text-brand-black uppercase">
            Message Sent
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-muted">
            {state.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.status === "error" && state.message && (
        <div
          role="alert"
          className="flex gap-3 border border-brand-red/30 bg-brand-red/5 p-4"
        >
          <TriangleAlert
            className="size-5 shrink-0 text-brand-red"
            aria-hidden
          />
          <p className="text-sm text-brand-ink">{state.message}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={`mt-2 ${fieldClass}`}
          />
          <FieldError errors={state.fieldErrors?.name} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`mt-2 ${fieldClass}`}
          />
          <FieldError errors={state.fieldErrors?.email} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+256 7xx xxx xxx"
            className={`mt-2 ${fieldClass}`}
          />
          <FieldError errors={state.fieldErrors?.phone} />
        </div>

        <div>
          <label htmlFor="serviceInterest" className={labelClass}>
            Service
          </label>
          <select
            id="serviceInterest"
            name="serviceInterest"
            defaultValue=""
            className={`mt-2 ${fieldClass}`}
          >
            <option value="">Select a service…</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError errors={state.fieldErrors?.serviceInterest} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Dimensions, quantities, location, timeline, whatever you have."
          className={`mt-2 resize-y ${fieldClass}`}
        />
        <FieldError errors={state.fieldErrors?.message} />
      </div>

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor="_hp">Leave this field empty</label>
        <input id="_hp" name="_hp" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-4">
        <SubmitButton />
        <p className="text-xs leading-relaxed text-brand-muted">
          We use these details only to respond to your enquiry and prepare a
          quotation. Submissions are stored on servers outside Uganda. See our{" "}
          <Link href="/privacy" className="text-brand-red underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
