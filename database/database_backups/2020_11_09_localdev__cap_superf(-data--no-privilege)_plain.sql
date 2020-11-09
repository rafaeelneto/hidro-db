--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14
-- Dumped by pg_dump version 10.14

-- Started on 2020-11-09 14:47:35

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
-- TOC entry 4014 (class 0 OID 27610)
-- Dependencies: 273
-- Data for Name: cap_superf; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.cap_superf (geom, nome, setor_id, un_id, municipio_id, bomba, situacao, vaz_max, obs, horas_outorg, corpo_hidrico, id, last_modif, usr_modif, vaz_outorg, data_op, files, licen_situ) FROM stdin;
0101000020E61000008B50345D6A3348C0D593827BBF47F7BF	S1 - Rio Guamá	\N	\N	55	\N	Ativo	\N	\N	\N	Rio Guamá	10	\N	\N	\N	\N	\N	\N
0101000020E61000001ED8CBC99E3149C03C6B9A779CA2C3BF	S1 - Afuá	\N	6	69	\N	Ativo	\N	\N	\N	Rio Cajuúna	4	\N	\N	\N	\N	\N	\N
0101000020E61000000FED2069C1A148C04601E45E739120C0	S1 - Conceição do Araguaia	\N	8	5	\N	Ativo	\N	\N	\N	Rio Araguaia	15	\N	\N	\N	\N	\N	\N
0101000020E61000001DA30002746547C0A62E04FC5A90F1BF	S1 - Bragança	\N	5	62	\N	Ativo	\N	\N	\N	Rio Chumucuí	9	\N	\N	\N	\N	\N	\N
0101000020E6100000E0085793A98C47C0153E0C4BC7CDF4BF	S1 - Capanema	\N	5	74	\N	Ativo	\N	\N	\N	Rio Caeté	7	\N	\N	\N	\N	\N	\N
0101000020E6100000825531E43AF848C0BCCF2B38027BEFBF	S1 - Anajás	\N	6	66	\N	Ativo	840	\N	\N	Rio Anajás	3	\N	\N	\N	\N	\N	\N
0101000020E61000003E9F18ABF98C48C055317F72CEDD11C0	S1 - Jacundá	\N	8	94	\N	Ativo	220	\N	\N	Rio Arraia	17	\N	\N	\N	\N	\N	\N
0101000020E61000004E3DF039759148C08818D8E44D6215C0	S1 - Marabá	\N	8	31	\N	Ativo	\N	Marabá Pioneira	\N	Rio Tocantins	2	\N	\N	\N	\N	\N	\N
0101000020E6100000436587A9CB8948C064DBB7F89F4D15C0	S2 - Marabá	\N	8	31	\N	Ativo	\N	Nova Marabá	\N	Rio Tocantins	13	\N	\N	\N	\N	\N	\N
0101000020E610000080BCE25A8BC848C0BB8CB1265C1A0EC0	S1 - Breu Branco	\N	8	83	KSB 10033-2015	Ativo	\N	\N	\N	Igarapé Moru	16	\N	\N	\N	\N	\N	\N
0101000020E610000049D961EA721747C0CE8FCED5562CF3BF	S1 - Viseu	\N	5	60	\N	\N	\N	\N	\N	Igarapé Icaitecueira	12	\N	\N	\N	\N	\N	\N
0101000020E61000007FDAF70A476148C0EAD64B20F00DFEBF	S1 - Moju	\N	6	35	\N	Ativo	\N	Em processo de renovação	\N	Rio Moju	6	\N	\N	\N	\N	\N	\N
0101000020E610000048488761E97848C000A05FFBCCA8FFBF	S1 - Igarapé-Miri	\N	6	25	\N	Ativo	\N	\N	\N	Igarapé do Japonês	1	\N	\N	\N	\N	\N	\N
0101000020E61000008AE025DCD8C747C00DAA026555FC10C0	S1 - Dom Eliseu	\N	8	19	\N	Ativo	\N	\N	\N	Igarapé Água Suja	5	\N	\N	\N	\N	\N	\N
0101000020E6100000E76DFBCFB2EF4BC059476055FA26FCBF	S1 - Oriximiná	\N	7	43	\N	Ativo	\N	\N	\N	Rio Trombetas	8	\N	\N	\N	\N	\N	\N
0101000020E6100000A3703D0AD7FF49C0A86BEC9D829A1AC0	S1 - São Félix do Xingu	\N	8	53	\N	Ativo	\N	\N	\N	Rio Xingu	14	\N	\N	\N	\N	\N	\N
0101000020E6100000468F7B01E7FD4BC072FB830C951D11C0	S1 - Itaituba	\N	7	28	\N	Ativo	\N	\N	\N	Rio Tapajós	11	\N	\N	\N	\N	\N	\N
0101000020E61000009550B86163C148C0B6309E6465AF04C0	S1 - Mocajuba	\N	6	106	\N	Ativo	\N	\N	\N	Rio Tocantins	18	\N	\N	\N	\N	\N	\N
0101000020E61000000606A25D618E47C042A82C7096D5F8BF	S1 - Ourém	\N	5	108	\N	A construir	\N	\N	\N	\N	19	\N	\N	\N	\N	\N	\N
\.


--
-- TOC entry 4021 (class 0 OID 0)
-- Dependencies: 204
-- Name: cap_super_super_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cap_super_super_id_seq', 19, true);


-- Completed on 2020-11-09 14:47:35

--
-- PostgreSQL database dump complete
--

