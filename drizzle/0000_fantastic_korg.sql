CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"service_interest" text,
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
