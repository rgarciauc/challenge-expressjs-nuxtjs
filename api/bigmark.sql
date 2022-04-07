--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.1

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
-- Name: participants; Type: TABLE; Schema: public; Owner: garcia
--

CREATE TABLE public.participants (
    id uuid NOT NULL,
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
-- Name: participants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: garcia
--

ALTER SEQUENCE public.participants_id_seq OWNED BY public.participants.id;


--
-- Data for Name: participants; Type: TABLE DATA; Schema: public; Owner: garcia
--

COPY public.participants (id, first_name, last_name, email, created_at, academic_title, gender, status) FROM stdin;
ad22131f-79a9-4aee-8256-cd261276363e	Ruben	Garcia Ucharima	s8rugarc@uni-saarland.de	2022-04-07T18:56:18.215+02:00			
d84ba9f7-381e-4ca1-9411-329317f54a3a	Miguel	Garcia Ucharima	s8rugarc@uni-saarland.de	2022-04-08T01:15:50.804+02:00			
41b78690-4e13-473d-83fc-ba2d07b451ae	Robert	Garcia Ucharima	s8rugarc@uni-saarland.de	2022-04-08T01:15:57.808+02:00			
0199ac94-867c-4d40-a1ba-6b9156cc0373	Luis	Garcia Ucharima	s8rugarc@uni-saarland.de	2022-04-08T01:16:19.500+02:00			
49c1fa47-b898-45cd-a663-93383524cac7	Edgard	Ruiz s8rugarc@uni-saarland.de	2022-04-08T01:16:52.595+02:00			
\.


--
-- Name: participants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: garcia
--

SELECT pg_catalog.setval('public.participants_id_seq', 12, true);


--
-- Name: participants participants_pkey; Type: CONSTRAINT; Schema: public; Owner: garcia
--

ALTER TABLE ONLY public.participants
    ADD CONSTRAINT participants_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--
