--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14
-- Dumped by pg_dump version 10.14

-- Started on 2020-11-09 14:55:09

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
-- TOC entry 4005 (class 0 OID 24600)
-- Dependencies: 207
-- Data for Name: enum_features_types; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.enum_features_types (nome, label) FROM stdin;
pocos	Poços
sedes_setores	Sedes Setores
cap_superf	Cap. Superficial
\.


-- Completed on 2020-11-09 14:55:09

--
-- PostgreSQL database dump complete
--

