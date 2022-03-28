
CREATE DATABASE postgres;

CREATE TABLE public.beers (
	id serial4 NOT NULL,
	price numeric NOT NULL,
	"name" varchar(200) NOT NULL
);
CREATE UNIQUE INDEX beers_pk ON public.beers (id);