--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14
-- Dumped by pg_dump version 10.14

-- Started on 2020-11-09 14:48:45

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

--
-- TOC entry 4005 (class 0 OID 24606)
-- Dependencies: 208
-- Data for Name: enum_licen_situ; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.enum_licen_situ (nome, label) FROM stdin;
sem_outorga	Sem outorga
outorgado	Outorgado
em_processo	Em processo
\.


-- Completed on 2020-11-09 14:48:46

--
-- PostgreSQL database dump complete
--

