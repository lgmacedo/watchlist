--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Homebrew)
-- Dumped by pg_dump version 14.7 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: movies; Type: TABLE; Schema: public; Owner: lucasmacedo
--

CREATE TABLE public.movies (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    platform character varying(255) NOT NULL,
    genre character varying(255) NOT NULL,
    watched boolean DEFAULT false,
    overview text
);


ALTER TABLE public.movies OWNER TO lucasmacedo;

--
-- Name: movies_id_seq; Type: SEQUENCE; Schema: public; Owner: lucasmacedo
--

CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.movies_id_seq OWNER TO lucasmacedo;

--
-- Name: movies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lucasmacedo
--

ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;


--
-- Name: movies id; Type: DEFAULT; Schema: public; Owner: lucasmacedo
--

ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);


--
-- Data for Name: movies; Type: TABLE DATA; Schema: public; Owner: lucasmacedo
--

COPY public.movies (id, title, platform, genre, watched, overview) FROM stdin;
1	Terminator	Prime Video	Action	t	I love his movie it is one of my favorites. A classic 2!
5	The Godfather	Star +	Drama	f	\N
6	Space Jam	HBO Max	Adventure	t	\N
7	Annie Hall	HBO Max	Drama	t	This movie is very fun!
\.


--
-- Name: movies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lucasmacedo
--

SELECT pg_catalog.setval('public.movies_id_seq', 7, true);


--
-- Name: movies movies_pkey; Type: CONSTRAINT; Schema: public; Owner: lucasmacedo
--

ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

