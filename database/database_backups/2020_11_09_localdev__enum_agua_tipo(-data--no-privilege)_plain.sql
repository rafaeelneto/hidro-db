--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14
-- Dumped by pg_dump version 10.14

-- Started on 2020-11-09 14:50:47

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
-- TOC entry 4003 (class 0 OID 24594)
-- Dependencies: 206
-- Data for Name: enum_agua_tipo; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.enum_agua_tipo (nome, label) FROM stdin;
bruta	Água Bruta
tratada	Água Tratada
\.


-- Completed on 2020-11-09 14:50:47

--
-- PostgreSQL database dump complete
--

