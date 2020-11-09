--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14
-- Dumped by pg_dump version 10.14

-- Started on 2020-11-09 14:58:02

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
-- TOC entry 4006 (class 0 OID 24733)
-- Dependencies: 244
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.roles (id, nome, auth_tables) FROM stdin;
1	admin	\N
2	user	\N
3	contributor	\N
4	manager	\N
\.


--
-- TOC entry 4014 (class 0 OID 0)
-- Dependencies: 245
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.roles_id_seq', 4, true);


-- Completed on 2020-11-09 14:58:02

--
-- PostgreSQL database dump complete
--

