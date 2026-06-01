import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'fr');
  CREATE TABLE "home_page_arguments_locales" (
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_faq_locales" (
  	"question" varchar NOT NULL,
  	"reponse" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_locales" (
  	"hero_avant_titre" varchar NOT NULL,
  	"hero_titre" varchar NOT NULL,
  	"hero_sous_titre" varchar NOT NULL,
  	"hero_cta" varchar NOT NULL,
  	"hero_lien" varchar NOT NULL,
  	"hero_sous_cta" varchar NOT NULL,
  	"spots_titre" varchar NOT NULL,
  	"spots_sous_titre" varchar NOT NULL,
  	"spots_paragraphe" jsonb NOT NULL,
  	"spots_cta" varchar NOT NULL,
  	"spots_lien" varchar NOT NULL,
  	"about_titre" varchar NOT NULL,
  	"about_sous_titre" varchar NOT NULL,
  	"about_paragraphe" jsonb NOT NULL,
  	"about_cta" varchar NOT NULL,
  	"about_lien" varchar NOT NULL,
  	"vehicules_titre" varchar NOT NULL,
  	"vehicules_paragraphe" jsonb NOT NULL,
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
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "professionnal_equipements_locales" (
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "professionnal_arguments_locales" (
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "professionnal_locales" (
  	"hero_title" varchar NOT NULL,
  	"hero_sous_titre" varchar NOT NULL,
  	"hero_cta" varchar NOT NULL,
  	"hero_sous_cta" varchar NOT NULL,
  	"hero_lien" varchar NOT NULL,
  	"solution_title" varchar NOT NULL,
  	"solution_paragraph" jsonb NOT NULL,
  	"solution_cta" varchar NOT NULL,
  	"solution_lien" varchar NOT NULL,
  	"secteurs_premier_titre" varchar NOT NULL,
  	"secteurs_premier_paragraphe" jsonb NOT NULL,
  	"secteurs_deuxieme_titre" varchar NOT NULL,
  	"secteurs_deuxieme_paragraphe" jsonb NOT NULL,
  	"services_premier_titre" varchar NOT NULL,
  	"services_premier_paragraphe" jsonb NOT NULL,
  	"services_deuxieme_titre" varchar NOT NULL,
  	"services_deuxieme_paragraphe" jsonb NOT NULL,
  	"services_cta" varchar NOT NULL,
  	"services_lien" varchar NOT NULL,
  	"selection_titre" varchar NOT NULL,
  	"selection_paragraphe" jsonb NOT NULL,
  	"selection_cta" varchar NOT NULL,
  	"selection_lien" varchar NOT NULL,
  	"offre_titre" varchar NOT NULL,
  	"offre_paragraphe" jsonb NOT NULL,
  	"offre_cta" varchar NOT NULL,
  	"offre_lien" varchar NOT NULL,
  	"histoire_titre" varchar NOT NULL,
  	"histoire_paragraphe" jsonb NOT NULL,
  	"histoire_cta" varchar NOT NULL,
  	"histoire_lien" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "mentions_legales_locales" (
  	"content" jsonb NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "home_page_arguments_locales" ADD CONSTRAINT "home_page_arguments_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_arguments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_faq_locales" ADD CONSTRAINT "home_page_faq_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page_faq"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_locales" ADD CONSTRAINT "home_page_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "professionnal_equipements_locales" ADD CONSTRAINT "professionnal_equipements_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."professionnal_equipements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "professionnal_arguments_locales" ADD CONSTRAINT "professionnal_arguments_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."professionnal_arguments"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "professionnal_locales" ADD CONSTRAINT "professionnal_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."professionnal"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "mentions_legales_locales" ADD CONSTRAINT "mentions_legales_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."mentions_legales"("id") ON DELETE cascade ON UPDATE no action;
  CREATE UNIQUE INDEX "home_page_arguments_locales_locale_parent_id_unique" ON "home_page_arguments_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "home_page_faq_locales_locale_parent_id_unique" ON "home_page_faq_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "home_page_locales_locale_parent_id_unique" ON "home_page_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "professionnal_equipements_locales_locale_parent_id_unique" ON "professionnal_equipements_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "professionnal_arguments_locales_locale_parent_id_unique" ON "professionnal_arguments_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "professionnal_locales_locale_parent_id_unique" ON "professionnal_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "mentions_legales_locales_locale_parent_id_unique" ON "mentions_legales_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "home_page_arguments" DROP COLUMN "description";
  ALTER TABLE "home_page_faq" DROP COLUMN "question";
  ALTER TABLE "home_page_faq" DROP COLUMN "reponse";
  ALTER TABLE "home_page" DROP COLUMN "hero_avant_titre";
  ALTER TABLE "home_page" DROP COLUMN "hero_titre";
  ALTER TABLE "home_page" DROP COLUMN "hero_sous_titre";
  ALTER TABLE "home_page" DROP COLUMN "hero_cta";
  ALTER TABLE "home_page" DROP COLUMN "hero_lien";
  ALTER TABLE "home_page" DROP COLUMN "hero_sous_cta";
  ALTER TABLE "home_page" DROP COLUMN "spots_titre";
  ALTER TABLE "home_page" DROP COLUMN "spots_sous_titre";
  ALTER TABLE "home_page" DROP COLUMN "spots_paragraphe";
  ALTER TABLE "home_page" DROP COLUMN "spots_cta";
  ALTER TABLE "home_page" DROP COLUMN "spots_lien";
  ALTER TABLE "home_page" DROP COLUMN "about_titre";
  ALTER TABLE "home_page" DROP COLUMN "about_sous_titre";
  ALTER TABLE "home_page" DROP COLUMN "about_paragraphe";
  ALTER TABLE "home_page" DROP COLUMN "about_cta";
  ALTER TABLE "home_page" DROP COLUMN "about_lien";
  ALTER TABLE "home_page" DROP COLUMN "vehicules_titre";
  ALTER TABLE "home_page" DROP COLUMN "vehicules_paragraphe";
  ALTER TABLE "home_page" DROP COLUMN "experiences_premier_titre";
  ALTER TABLE "home_page" DROP COLUMN "experiences_premier_paragraphe";
  ALTER TABLE "home_page" DROP COLUMN "experiences_deuxieme_titre";
  ALTER TABLE "home_page" DROP COLUMN "experiences_deuxieme_paragraphe";
  ALTER TABLE "home_page" DROP COLUMN "experiences_cta";
  ALTER TABLE "home_page" DROP COLUMN "experiences_lien";
  ALTER TABLE "home_page" DROP COLUMN "etapes_premier_titre";
  ALTER TABLE "home_page" DROP COLUMN "etapes_premier_paragraphe";
  ALTER TABLE "home_page" DROP COLUMN "etapes_deuxieme_titre";
  ALTER TABLE "home_page" DROP COLUMN "etapes_deuxieme_paragraphe";
  ALTER TABLE "home_page" DROP COLUMN "etapes_cta";
  ALTER TABLE "home_page" DROP COLUMN "etapes_lien";
  ALTER TABLE "professionnal_equipements" DROP COLUMN "description";
  ALTER TABLE "professionnal_arguments" DROP COLUMN "description";
  ALTER TABLE "professionnal" DROP COLUMN "hero_title";
  ALTER TABLE "professionnal" DROP COLUMN "hero_sous_titre";
  ALTER TABLE "professionnal" DROP COLUMN "hero_cta";
  ALTER TABLE "professionnal" DROP COLUMN "hero_sous_cta";
  ALTER TABLE "professionnal" DROP COLUMN "hero_lien";
  ALTER TABLE "professionnal" DROP COLUMN "solution_title";
  ALTER TABLE "professionnal" DROP COLUMN "solution_paragraph";
  ALTER TABLE "professionnal" DROP COLUMN "solution_cta";
  ALTER TABLE "professionnal" DROP COLUMN "solution_lien";
  ALTER TABLE "professionnal" DROP COLUMN "secteurs_premier_titre";
  ALTER TABLE "professionnal" DROP COLUMN "secteurs_premier_paragraphe";
  ALTER TABLE "professionnal" DROP COLUMN "secteurs_deuxieme_titre";
  ALTER TABLE "professionnal" DROP COLUMN "secteurs_deuxieme_paragraphe";
  ALTER TABLE "professionnal" DROP COLUMN "services_premier_titre";
  ALTER TABLE "professionnal" DROP COLUMN "services_premier_paragraphe";
  ALTER TABLE "professionnal" DROP COLUMN "services_deuxieme_titre";
  ALTER TABLE "professionnal" DROP COLUMN "services_deuxieme_paragraphe";
  ALTER TABLE "professionnal" DROP COLUMN "services_cta";
  ALTER TABLE "professionnal" DROP COLUMN "services_lien";
  ALTER TABLE "professionnal" DROP COLUMN "selection_titre";
  ALTER TABLE "professionnal" DROP COLUMN "selection_paragraphe";
  ALTER TABLE "professionnal" DROP COLUMN "selection_cta";
  ALTER TABLE "professionnal" DROP COLUMN "selection_lien";
  ALTER TABLE "professionnal" DROP COLUMN "offre_titre";
  ALTER TABLE "professionnal" DROP COLUMN "offre_paragraphe";
  ALTER TABLE "professionnal" DROP COLUMN "offre_cta";
  ALTER TABLE "professionnal" DROP COLUMN "offre_lien";
  ALTER TABLE "professionnal" DROP COLUMN "histoire_titre";
  ALTER TABLE "professionnal" DROP COLUMN "histoire_paragraphe";
  ALTER TABLE "professionnal" DROP COLUMN "histoire_cta";
  ALTER TABLE "professionnal" DROP COLUMN "histoire_lien";
  ALTER TABLE "mentions_legales" DROP COLUMN "content";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "home_page_arguments_locales" CASCADE;
  DROP TABLE "home_page_faq_locales" CASCADE;
  DROP TABLE "home_page_locales" CASCADE;
  DROP TABLE "professionnal_equipements_locales" CASCADE;
  DROP TABLE "professionnal_arguments_locales" CASCADE;
  DROP TABLE "professionnal_locales" CASCADE;
  DROP TABLE "mentions_legales_locales" CASCADE;
  ALTER TABLE "home_page_arguments" ADD COLUMN "description" varchar NOT NULL;
  ALTER TABLE "home_page_faq" ADD COLUMN "question" varchar NOT NULL;
  ALTER TABLE "home_page_faq" ADD COLUMN "reponse" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "hero_avant_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "hero_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "hero_sous_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "hero_cta" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "hero_lien" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "hero_sous_cta" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "spots_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "spots_sous_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "spots_paragraphe" jsonb NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "spots_cta" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "spots_lien" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "about_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "about_sous_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "about_paragraphe" jsonb NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "about_cta" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "about_lien" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "vehicules_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "vehicules_paragraphe" jsonb NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "experiences_premier_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "experiences_premier_paragraphe" jsonb NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "experiences_deuxieme_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "experiences_deuxieme_paragraphe" jsonb NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "experiences_cta" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "experiences_lien" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "etapes_premier_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "etapes_premier_paragraphe" jsonb NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "etapes_deuxieme_titre" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "etapes_deuxieme_paragraphe" jsonb NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "etapes_cta" varchar NOT NULL;
  ALTER TABLE "home_page" ADD COLUMN "etapes_lien" varchar NOT NULL;
  ALTER TABLE "professionnal_equipements" ADD COLUMN "description" varchar NOT NULL;
  ALTER TABLE "professionnal_arguments" ADD COLUMN "description" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "hero_title" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "hero_sous_titre" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "hero_cta" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "hero_sous_cta" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "hero_lien" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "solution_title" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "solution_paragraph" jsonb NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "solution_cta" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "solution_lien" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "secteurs_premier_titre" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "secteurs_premier_paragraphe" jsonb NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "secteurs_deuxieme_titre" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "secteurs_deuxieme_paragraphe" jsonb NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "services_premier_titre" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "services_premier_paragraphe" jsonb NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "services_deuxieme_titre" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "services_deuxieme_paragraphe" jsonb NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "services_cta" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "services_lien" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "selection_titre" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "selection_paragraphe" jsonb NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "selection_cta" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "selection_lien" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "offre_titre" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "offre_paragraphe" jsonb NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "offre_cta" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "offre_lien" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "histoire_titre" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "histoire_paragraphe" jsonb NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "histoire_cta" varchar NOT NULL;
  ALTER TABLE "professionnal" ADD COLUMN "histoire_lien" varchar NOT NULL;
  ALTER TABLE "mentions_legales" ADD COLUMN "content" jsonb NOT NULL;
  DROP TYPE "public"."_locales";`)
}
