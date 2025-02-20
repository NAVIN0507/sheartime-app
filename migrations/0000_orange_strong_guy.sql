CREATE TYPE "public"."amount_status" AS ENUM('PAID', 'NOT_PAID');--> statement-breakpoint
CREATE TYPE "public"."booking_status" AS ENUM('PENDING', 'BOOKED', 'CANCLED');--> statement-breakpoint
CREATE TABLE "bookings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" varchar NOT NULL,
	"shop_id" varchar NOT NULL,
	"booking_date" varchar NOT NULL,
	"booking_status" "booking_status" DEFAULT 'PENDING',
	"amount_status" "amount_status" DEFAULT 'NOT_PAID',
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "bookings_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "admin_shops" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"admin_id" varchar NOT NULL,
	"shop_name" varchar DEFAULT '' NOT NULL,
	"shop_address" varchar DEFAULT '' NOT NULL,
	"shop_description" text DEFAULT '',
	"shop_phone" varchar DEFAULT '',
	"shop_email" text DEFAULT '',
	"shop_image_url" varchar DEFAULT '',
	"opened" boolean DEFAULT true NOT NULL,
	CONSTRAINT "admin_shops_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"phone_number" varchar NOT NULL,
	"passowrd" text NOT NULL,
	"isAdmins" boolean DEFAULT false NOT NULL,
	"onBoarded" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
