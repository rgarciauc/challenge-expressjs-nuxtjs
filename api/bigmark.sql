--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.1

-- Started on 2022-03-22 13:56:02 CET

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
-- TOC entry 210 (class 1259 OID 18130)
-- Name: participants; Type: TABLE; Schema: public; Owner: garcia
--

CREATE TABLE public.participants (
    id integer PRIMARY KEY NOT NULL,
    first_name character varying(30),
    last_name character varying(30),
    email character varying(30),
    created_at character varying(30),
    academic_title character varying(30),
    gender character varying(30),
    status character varying(30)
);


ALTER TABLE public.participants OWNER TO garcia;

--
-- TOC entry 209 (class 1259 OID 18129)
-- Name: participants_id_seq; Type: SEQUENCE; Schema: public; Owner: garcia
--

CREATE SEQUENCE public.participants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.participants_id_seq OWNER TO garcia;

--
-- TOC entry 3582 (class 0 OID 0)
-- Dependencies: 209
-- Name: participants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: garcia
--

ALTER SEQUENCE public.participants_id_seq OWNED BY public.participants.id;


--
-- TOC entry 3433 (class 2604 OID 18133)
-- Name: participants id; Type: DEFAULT; Schema: public; Owner: garcia
--

ALTER TABLE ONLY public.participants ALTER COLUMN id SET DEFAULT nextval('public.participants_id_seq'::regclass);


--
-- TOC entry 3576 (class 0 OID 18130)
-- Dependencies: 210
-- Data for Name: participants; Type: TABLE DATA; Schema: public; Owner: garcia
--

COPY public.participants (id, first_name, last_name, email, created_at, academic_title, gender, status) FROM stdin;
1	first_name	\N	\N	\N	\N	\N	\N
2	Ruben	Garcia Ucharima	s8rugarc@uni-saarland.de				
3	Miguel	Royal	test@uni-saarland.de				
4	Luis	Losa	test@test				
5	Lucy	Schmidth	test@test.de				
6	Liz	Rodriguez	ab@ab.com				
7	Ricardo	Gareca	rest@pe.pe				
8	Peter	Verstand	tmp@lo.de				
9	Peter	Müller	mu@mu.de				
10	Lorena	Ucharima	s8@uni-saarland.de				
11	Lorem	Ipsum	s8@uni-saarland.de				
12	Ruben2	Garcia Ucharima2	s8rugarc@uni-saarland.de				
\.


--
-- TOC entry 3583 (class 0 OID 0)
-- Dependencies: 209
-- Name: participants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: garcia
--

SELECT pg_catalog.setval('public.participants_id_seq', 12, true);


--
-- TOC entry 3435 (class 2606 OID 18135)
-- Name: participants participants_pkey; Type: CONSTRAINT; Schema: public; Owner: garcia
--

ALTER TABLE ONLY public.participants
    ADD CONSTRAINT participants_pkey PRIMARY KEY (id);


-- Completed on 2022-03-22 13:56:02 CET

--
-- PostgreSQL database dump complete
--

