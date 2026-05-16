import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_page_arguments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer NOT NULL,
  	"description" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"height" numeric NOT NULL
  );
  
  CREATE TABLE "home_page_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"reponse" varchar NOT NULL
  );
  
  CREATE TABLE "home_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_background_id" integer NOT NULL,
  	"hero_avant_titre" varchar NOT NULL,
  	"hero_titre" varchar NOT NULL,
  	"hero_sous_titre" varchar NOT NULL,
  	"hero_cta" varchar NOT NULL,
  	"hero_lien" varchar NOT NULL,
  	"hero_sous_cta" varchar NOT NULL,
  	"spots_titre" varchar NOT NULL,
  	"spots_sous_titre" varchar NOT NULL,
  	"spots_premiere_image_id" integer NOT NULL,
  	"spots_deuxieme_image_id" integer NOT NULL,
  	"spots_troisieme_image_id" integer NOT NULL,
  	"spots_quatrieme_image_id" integer NOT NULL,
  	"spots_paragraphe" jsonb NOT NULL,
  	"spots_cta" varchar NOT NULL,
  	"spots_lien" varchar NOT NULL,
  	"about_titre" varchar NOT NULL,
  	"about_sous_titre" varchar NOT NULL,
  	"about_background_id" integer NOT NULL,
  	"about_paragraphe" jsonb NOT NULL,
  	"about_cta" varchar NOT NULL,
  	"about_lien" varchar NOT NULL,
  	"vehicules_titre" varchar NOT NULL,
  	"vehicules_paragraphe" jsonb NOT NULL,
  	"vehicules_premiere_image_id" integer NOT NULL,
  	"vehicules_deuxieme_image_id" integer NOT NULL,
  	"experiences_image_id" integer NOT NULL,
  	"experiences_premier_titre" varchar NOT NULL,
  	"experiences_premier_paragraphe" jsonb NOT NULL,
  	"experiences_deuxieme_titre" varchar NOT NULL,
  	"experiences_deuxieme_paragraphe" jsonb NOT NULL,
  	"experiences_cta" varchar NOT NULL,
  	"experiences_lien" varchar NOT NULL,
  	"etapes_premier_titre" varchar NOT NULL,
  	"etapes_premier_paragraphe" jsonb NOT NULL,
  	"etapes_deuxieme_titre" varchar NOT NULL,
  	"etapes_deuxieme_paragraphe" jsonb NOT NULL,
  	"etapes_cta" varchar NOT NULL,
  	"etapes_lien" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "professionnal_equipements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer NOT NULL,
  	"description" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"height" numeric NOT NULL
  );
  
  CREATE TABLE "professionnal_arguments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer NOT NULL,
  	"description" varchar NOT NULL,
  	"width" numeric NOT NULL,
  	"height" numeric NOT NULL
  );
  
  CREATE TABLE "professionnal" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_background_id" integer NOT NULL,
  	"hero_title" varchar NOT NULL,
  	"hero_sous_titre" varchar NOT NULL,
  	"hero_cta" varchar NOT NULL,
  	"hero_sous_cta" varchar NOT NULL,
  	"hero_lien" varchar NOT NULL,
  	"solution_title" varchar NOT NULL,
  	"solution_background_id" integer NOT NULL,
  	"solution_paragraph" jsonb NOT NULL,
  	"solution_cta" varchar NOT NULL,
  	"solution_lien" varchar NOT NULL,
  	"secteurs_image_id" integer NOT NULL,
  	"secteurs_premier_titre" varchar NOT NULL,
  	"secteurs_premier_paragraphe" jsonb NOT NULL,
  	"secteurs_deuxieme_titre" varchar NOT NULL,
  	"secteurs_deuxieme_paragraphe" jsonb NOT NULL,
  	"services_premiere_image_id" integer NOT NULL,
  	"services_deuxieme_image_id" integer NOT NULL,
  	"services_troisieme_image_id" integer NOT NULL,
  	"services_quatrieme_image_id" integer NOT NULL,
  	"services_premier_titre" varchar NOT NULL,
  	"services_premier_paragraphe" jsonb NOT NULL,
  	"services_deuxieme_titre" varchar NOT NULL,
  	"services_deuxieme_paragraphe" jsonb NOT NULL,
  	"services_cta" varchar NOT NULL,
  	"services_lien" varchar NOT NULL,
  	"selection_titre" varchar NOT NULL,
  	"selection_paragraphe" jsonb NOT NULL,
  	"selection_image_id" integer NOT NULL,
  	"selection_cta" varchar NOT NULL,
  	"selection_lien" varchar NOT NULL,
  	"offre_titre" varchar NOT NULL,
  	"offre_paragraphe" jsonb NOT NULL,
  	"offre_background_id" integer NOT NULL,
  	"offre_cta" varchar NOT NULL,
  	"offre_lien" varchar NOT NULL,
  	"histoire_titre" varchar NOT NULL,
  	"histoire_paragraphe" jsonb NOT NULL,
  	"histoire_image_id" integer NOT NULL,
  	"histoire_cta" varchar NOT NULL,
  	"histoire_lien" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "mentions_legales" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_arguments" ADD CONSTRAINT "home_page_arguments_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_arguments" ADD CONSTRAINT "home_page_arguments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_faq" ADD CONSTRAINT "home_page_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_hero_background_id_media_id_fk" FOREIGN KEY ("hero_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_spots_premiere_image_id_media_id_fk" FOREIGN KEY ("spots_premiere_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_spots_deuxieme_image_id_media_id_fk" FOREIGN KEY ("spots_deuxieme_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_spots_troisieme_image_id_media_id_fk" FOREIGN KEY ("spots_troisieme_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_spots_quatrieme_image_id_media_id_fk" FOREIGN KEY ("spots_quatrieme_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_about_background_id_media_id_fk" FOREIGN KEY ("about_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_vehicules_premiere_image_id_media_id_fk" FOREIGN KEY ("vehicules_premiere_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_vehicules_deuxieme_image_id_media_id_fk" FOREIGN KEY ("vehicules_deuxieme_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_experiences_image_id_media_id_fk" FOREIGN KEY ("experiences_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal_equipements" ADD CONSTRAINT "professionnal_equipements_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal_equipements" ADD CONSTRAINT "professionnal_equipements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."professionnal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "professionnal_arguments" ADD CONSTRAINT "professionnal_arguments_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal_arguments" ADD CONSTRAINT "professionnal_arguments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."professionnal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "professionnal" ADD CONSTRAINT "professionnal_hero_background_id_media_id_fk" FOREIGN KEY ("hero_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal" ADD CONSTRAINT "professionnal_solution_background_id_media_id_fk" FOREIGN KEY ("solution_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal" ADD CONSTRAINT "professionnal_secteurs_image_id_media_id_fk" FOREIGN KEY ("secteurs_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal" ADD CONSTRAINT "professionnal_services_premiere_image_id_media_id_fk" FOREIGN KEY ("services_premiere_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal" ADD CONSTRAINT "professionnal_services_deuxieme_image_id_media_id_fk" FOREIGN KEY ("services_deuxieme_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal" ADD CONSTRAINT "professionnal_services_troisieme_image_id_media_id_fk" FOREIGN KEY ("services_troisieme_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal" ADD CONSTRAINT "professionnal_services_quatrieme_image_id_media_id_fk" FOREIGN KEY ("services_quatrieme_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal" ADD CONSTRAINT "professionnal_selection_image_id_media_id_fk" FOREIGN KEY ("selection_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal" ADD CONSTRAINT "professionnal_offre_background_id_media_id_fk" FOREIGN KEY ("offre_background_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "professionnal" ADD CONSTRAINT "professionnal_histoire_image_id_media_id_fk" FOREIGN KEY ("histoire_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "home_page_arguments_order_idx" ON "home_page_arguments" USING btree ("_order");
  CREATE INDEX "home_page_arguments_parent_id_idx" ON "home_page_arguments" USING btree ("_parent_id");
  CREATE INDEX "home_page_arguments_icon_idx" ON "home_page_arguments" USING btree ("icon_id");
  CREATE INDEX "home_page_faq_order_idx" ON "home_page_faq" USING btree ("_order");
  CREATE INDEX "home_page_faq_parent_id_idx" ON "home_page_faq" USING btree ("_parent_id");
  CREATE INDEX "home_page_hero_hero_background_idx" ON "home_page" USING btree ("hero_background_id");
  CREATE INDEX "home_page_spots_spots_premiere_image_idx" ON "home_page" USING btree ("spots_premiere_image_id");
  CREATE INDEX "home_page_spots_spots_deuxieme_image_idx" ON "home_page" USING btree ("spots_deuxieme_image_id");
  CREATE INDEX "home_page_spots_spots_troisieme_image_idx" ON "home_page" USING btree ("spots_troisieme_image_id");
  CREATE INDEX "home_page_spots_spots_quatrieme_image_idx" ON "home_page" USING btree ("spots_quatrieme_image_id");
  CREATE INDEX "home_page_about_about_background_idx" ON "home_page" USING btree ("about_background_id");
  CREATE INDEX "home_page_vehicules_vehicules_premiere_image_idx" ON "home_page" USING btree ("vehicules_premiere_image_id");
  CREATE INDEX "home_page_vehicules_vehicules_deuxieme_image_idx" ON "home_page" USING btree ("vehicules_deuxieme_image_id");
  CREATE INDEX "home_page_experiences_experiences_image_idx" ON "home_page" USING btree ("experiences_image_id");
  CREATE INDEX "professionnal_equipements_order_idx" ON "professionnal_equipements" USING btree ("_order");
  CREATE INDEX "professionnal_equipements_parent_id_idx" ON "professionnal_equipements" USING btree ("_parent_id");
  CREATE INDEX "professionnal_equipements_icon_idx" ON "professionnal_equipements" USING btree ("icon_id");
  CREATE INDEX "professionnal_arguments_order_idx" ON "professionnal_arguments" USING btree ("_order");
  CREATE INDEX "professionnal_arguments_parent_id_idx" ON "professionnal_arguments" USING btree ("_parent_id");
  CREATE INDEX "professionnal_arguments_icon_idx" ON "professionnal_arguments" USING btree ("icon_id");
  CREATE INDEX "professionnal_hero_hero_background_idx" ON "professionnal" USING btree ("hero_background_id");
  CREATE INDEX "professionnal_solution_solution_background_idx" ON "professionnal" USING btree ("solution_background_id");
  CREATE INDEX "professionnal_secteurs_secteurs_image_idx" ON "professionnal" USING btree ("secteurs_image_id");
  CREATE INDEX "professionnal_services_services_premiere_image_idx" ON "professionnal" USING btree ("services_premiere_image_id");
  CREATE INDEX "professionnal_services_services_deuxieme_image_idx" ON "professionnal" USING btree ("services_deuxieme_image_id");
  CREATE INDEX "professionnal_services_services_troisieme_image_idx" ON "professionnal" USING btree ("services_troisieme_image_id");
  CREATE INDEX "professionnal_services_services_quatrieme_image_idx" ON "professionnal" USING btree ("services_quatrieme_image_id");
  CREATE INDEX "professionnal_selection_selection_image_idx" ON "professionnal" USING btree ("selection_image_id");
  CREATE INDEX "professionnal_offre_offre_background_idx" ON "professionnal" USING btree ("offre_background_id");
  CREATE INDEX "professionnal_histoire_histoire_image_idx" ON "professionnal" USING btree ("histoire_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_page_arguments" CASCADE;
  DROP TABLE "home_page_faq" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "professionnal_equipements" CASCADE;
  DROP TABLE "professionnal_arguments" CASCADE;
  DROP TABLE "professionnal" CASCADE;
  DROP TABLE "mentions_legales" CASCADE;`)
}
