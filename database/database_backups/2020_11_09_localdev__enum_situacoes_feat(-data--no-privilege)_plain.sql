--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14
-- Dumped by pg_dump version 10.14

-- Started on 2020-11-09 14:49:29

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
-- TOC entry 4003 (class 0 OID 24618)
-- Dependencies: 210
-- Data for Name: enum_situacoes_feat; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.enum_situacoes_feat (name, label) FROM stdin;
em_construcao	Em construção
ativo	Ativo
a_construir	A construir
inativo	Inativo
inativo_perm	Inativo permanentemente
p_recuperacao	Para recuperação
recuperacao	Em recuperação
\.


-- Completed on 2020-11-09 14:49:29

--
-- PostgreSQL database dump complete
--

