--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14
-- Dumped by pg_dump version 10.14

-- Started on 2020-11-09 14:45:58

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
-- TOC entry 4014 (class 0 OID 27634)
-- Dependencies: 277
-- Data for Name: pocos; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.pocos (geom, nome, setor_id, un_id, municipio_id, profun, situacao, licen_situ, obs, data_perf, revest, vaz_max, relatorio, horas_outorg, id, num_patrimonio, vaz_outorg, perfil_const, perfil_geol, ponteira, usr_modif, data_entrega, files, last_modif) FROM stdin;
0101000020E6100000AED919083EC34BC0B7C54809D475FEBF	P4 - Óbidos	\N	7	41	117	Ativo	\N	\N	\N	PVC Geomec. 10in	100	\N	\N	146	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000064CED16EA53D48C0BB6A4F67B270F6BF	P3 - CDP	30	2	55	273	Ativo	\N	Verificar as datas de perfuração	2011-09-06 14:23:24	Aço Carbono 14in 8in	250	https://drive.google.com/open?id=1AOtk94AVnt7bmyZuv6jq94qCyKkXIAlX	\N	7	\N	\N	{}	{}	1	\N	\N	\N	\N
0101000020E61000003A6220E1953D48C0405A791BD378F6BF	P4 - CDP	30	2	55	273	Inativo	\N	Verificar as profundidades etc	2012-12-27 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1Iw2PGg4KMC6oTH1aD0h9Hw0-AES8K-vD	\N	8	\N	\N	{}	{}	1	\N	\N	\N	\N
0101000020E6100000D8C249532A3A48C000A06F6B083FF5BF	P1 - Tocantins	23	3	55	248.86000000000001	Ativo	\N	Incorporado SAAEB/Verificar informações	2000-04-09 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=15mf2N6MnIURbS95ir0hozpCqsQkyC-8c	18	61	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000006F84327A5B5E4BC099EB70EACE8503C0	P3 - Bacabal	\N	7	52	238	Ativo	\N		\N	\N	\N	https://drive.google.com/open?id=1jvdZ0vS_WJV1hKvwRAL1boACtv9K1LUe	\N	1	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000032510562C43948C08A474E88F515F4BF	P2 - Água Boa	\N	3	55	252.22	Ativo	\N	Ativo dia 23/12/2019	2019-08-13 14:46:59.847	Aço Carbono	\N	https://drive.google.com/open?id=1qKT-LOHG4J_n8eEenBFaXQjjIn69zOie	18	324	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000004956642F55D4BC0D6429DA87F8303C0	P1 - Caranazal Ponteira	\N	7	52	\N	Ativo	\N	Poços rasos com a retomada da obra eles serão desativados. Sem relatório. O abastecimento será feito com a água do aeroporto velho para adução, jogada na elevatória para abastecer o Caranazal	\N	\N	\N	\N	\N	160	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000903B176CC15E4CC0008795CA0E5301C0	P1 - Faro	\N	7	20	270	Ativo	\N	O poço encontra-se desativado e aguarda aprovação da outorga	2018-01-18 00:00:00	Espiralado e PVC REF 8in	900	https://drive.google.com/open?id=1snmNtLNwFUV-JFxoNTLvavywY_TQejzU	\N	152	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000004063FFD2283A48C000E2C87A9FD7F4BF	P1 - Águas Negras	13	3	55	270.75	Ativo	\N	Incorporado SAAEB; Possui apenas a ficha resumo de poço (perfil litológico)	2004-08-27 00:00:00	Aço Carbono 12in 8in	\N	https://drive.google.com/open?id=1IhRahbvoF1vONUC1AVLZwcYU_5946dxY	\N	52	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000006DEA295FBD5D4BC05B8D4ED24B8E03C0	P1 - Irurá	\N	7	52	272	Ativo	outorgado	Poço antigo com confusão com outro poço proximo, as infos aqui são do P1 - Irurá PAC; Todos os poços do Irurá contribuem para: Caranazal, Bacabal, Irurá e Santarenzinho. Para Estação elevatória do Irurá, faz adução para elevatória do Aeroporto velho	1978-01-01 00:00:00	Aço Carbono 12in 8in	230	https://drive.google.com/open?id=1MMgXvWtjpNr5Xb8Ja9fsB3B9i-VrBp0z	\N	173	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000DD74B843B03148C089A757CA32C4F5BF	P1 - Maguariaçu	\N	4	67	\N	\N	\N	\N	\N	\N	\N	\N	\N	6	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000004724BB70AB5D4BC0F8780E52DD8903C0	P5 - Irurá	30	7	52	256	Ativo	\N	\N	2000-03-17 00:00:00	Aço Inox 14in 10in	350	https://drive.google.com/open?id=1pZckeTWCZxfUQHGTSYGwWty7KOt5pCQE	\N	177	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000070ED5714895C4BC0D1F753E3A5BB03C0	P3 - Nova República (PTNR3)	\N	7	52	249.94	Ativo	\N	Em processo para obtenção do Outorga. Abastece Nova Republica e Matinha	2014-12-15 00:00:00	Aço Carbono 	170	https://drive.google.com/open?id=1Lkqdc6KeZLMa3ZnWK9B7TiTa12IJ8pQU	\N	179	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000005F1EFF32C82F48C0490D8269A9A3F5BF	P3 - Ananindeua Centro	44	4	67	270	A construir	\N	\N	\N	Aço Carbono 14in 8in	\N	\N	\N	382	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000583E9D3EFB3548C08C79D7C6653BF6BF	P2 - Guanabara II	47	4	67	270	A construir	\N	\N	\N	Aço Carbono 14in 8in	\N	\N	\N	383	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000003DA48289A35D4BC0873990575C8B03C0	P2 - Irurá	\N	7	52	272	Ativo	\N	Poço antigo com confusão com outro poço proximo, as infos aqui são do P1 - Irurá PAC; Todos os poços do Irurá contribuem para: Caranazal, Bacabal, Irurá e Santarenzinho. Para Estação elevatória do Irurá, faz adução para elevatória do Aeroporto velho	1979-01-01 00:00:00	Aço Carbono 14in 8in	250	https://drive.google.com/open?id=1vbLDUQ_wphhN8o0gV5h7j39Wo-K7-nBI	\N	176	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000003D8D635B3C3548C080DDB2494587F5BF	P2 - Sabiá	43	4	67	\N	A construir	\N	\N	\N	\N	\N	\N	\N	384	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000C2F950AD7D5C4BC0A8B1D8B7E3BD03C0	P2 - Nova República	\N	7	52	\N	Inativo	\N	\N	2009-07-20 00:00:00	Aço Carbono 10in 8in	140	https://drive.google.com/open?id=1dT-_lEZkBw9UkTxKVdC5entN9WvJMdp8	\N	178	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000000006545B513A48C0008A34847219F6BF	P1 - Catalina	4	3	55	251.47	Inativo	\N	\N	\N	\N	\N	https://drive.google.com/open?id=1nFcNWS6vUd3OcZ4fETBEhqW7C1yufFxB	18	48	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000009BA169270E594BC0212EEF609E8803C0	P1 - Livramento	\N	7	52	254	Inativo	\N	Não vai funcionar. Foi desativado, bomba caiu. Será perfurado outro no lugar	\N	Aço Carbono 14in 8in	\N	https://drive.google.com/open?id=14jJRVg6zNLroa6R5H1lUtdO05UWuAhZD	\N	181	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000023441F19985A4BC0ABD76A9CEB5F03C0	P1 - Mendoça Furtado	\N	7	52	252	Ativo	\N	Abastece Centro. Joga direto na rede;	2013-05-20 00:00:00	Aço Carbono 14in 8in	250	https://drive.google.com/open?id=1T_Isvm_nJbyukfbVBicVW6G-ixSaVuIc	\N	188	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000005C66AF022DC14BC0075C6A974967FEBF	P1 - Chapéu Ponteira	\N	7	41	8	Ativo	\N	Poço faz parte de um sistema de ponteira (Chapéu)	\N	\N	2.9500000000000002	\N	\N	144	\N	\N	{}	{}	12	\N	\N	\N	\N
0101000020E61000002BDEBFA734614BC0C6831AB492BF03C0	P1 - Residencial Salvação	\N	7	52	206	Ativo	\N	\N	2013-12-24 00:00:00	PVC Geomec. REF 8in	150	https://drive.google.com/open?id=1ussBcm9XLMT6pggMdPEzCxLfQ7EWla-5	18	180	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000ABC5706157604BC09AEC3D7FF48403C0	P1 - Elcione Barbalho	\N	7	52	261	Ativo	\N	Informação de vazão erronea. Água sai do poço ativo do Elcione e vai para o RAP_P2. Abastece por Gravidade o Elcione. Adução (booster)-Conquista.	2006-03-01 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1UKqpF0UdXnOZ-5m3_fxRa_1sx6izTL0N	\N	184	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000058E19622483748C00012F241CF26F5BF	P2 - Tenoné	10	3	55	267.19999999999999	Ativo	\N	\N	\N	\N	150	https://drive.google.com/open?id=1U-x9D63ca-S6_pJRniUm0W_vJD-BDVLM	\N	49	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000027FA19BD263348C03E6DA20A7D3EF5BF	P2 - Uirapurú	41	4	67	\N	A construir	\N	\N	\N	\N	\N	\N	\N	385	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000A8FC70728D2A48C0C6791A07CF07F6BF	P3 - Marituba COHAB	50	4	105	\N	A construir	\N	\N	\N	\N	\N	\N	\N	386	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000006065A080512A48C055CF72643DBDF5BF	P2 - Novo Horizonte	52	4	105	\N	A construir	\N	\N	\N	\N	\N	\N	\N	387	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000093DFDBA74C3948C082ECD5C30ABBF5BF	P9 - Benjamin Sodré	2	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	388	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000003D4AFDB0043748C0DED1F2630BEBF5BF	P3 - Coqueiro	6	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	389	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B0966B9C7A3B48C01060AFDA0B99F5BF	P8 - Cordeiro de Farias	5	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	390	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000033CD84BE5E3B48C0534EA526838FF5BF	P2 - Raimundo Jinkings	26	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	391	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000000CC769DC8D3848C0564586139F78F5BF	P9 - IPASEP	7	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	392	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F9FA83EFB33848C035872B8B4877F5BF	P10 - IPASEP	7	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	393	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000005DB5B5B5F03B48C0D8C619C641C1F4BF	P3 - Cohab	17	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	394	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000584BF008F13B48C0081A737CC2C0F4BF	P4 - Cohab	17	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	395	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000009CC6183B6B3C48C02D6D756C84FFF4BF	P2 - Paracurí	22	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	396	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F5E9DB607C3A48C0519AB81DEC02F5BF	P3 - Eduardo Angelim	21	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	397	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000933E56AD523C48C0D763FAE3C75EF5BF	P3 - Mata Fome	25	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	398	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000A8848D382C3C48C057F66981E3B4F5BF	P2 - Pratinha II	28	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	399	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000001256EC54B43B48C0022EC6875132F4BF	P2 - São João do Outeiro	15	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	400	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000BFCD504DC74748C09C6B05D56139F4BF	P2 - Cotijuba	24	3	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	401	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000002A3702FF393F4CC0639720C1B1D100C0	P1 - Ponteira?	\N	7	134	\N	Ativo	\N	\N	\N	\N	\N	\N	\N	244	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000009F00C226F82A48C0EAB69CCEBB0BF1BF	P2 - Baía do Sol	57	9	55	\N	A construir	\N	\N	\N	PVC Geomec. 14in 8in	\N	\N	\N	402	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000945E4901853D48C0F90B80B9AE70F6BF	P9 - CDP	\N	2	55	\N	A construir	\N	Poço em projeto	\N	\N	\N	\N	\N	334	\N	\N	{}	{}	1	\N	\N	\N	\N
0101000020E6100000F15E2A85A23D48C0D76A4F67B270F6BF	P10 - CDP	\N	2	55	\N	A construir	\N	Poço em projeto	\N	\N	\N	\N	\N	333	\N	\N	{}	{}	1	\N	\N	\N	\N
0101000020E6100000439B6FB3F53D48C05F2E6298822FF7BF	P1 - 3° Setor Nazaré	34	1	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	409	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000000B33B1EFF2A48C0116B8454EE0BF1BF	P3 - Baía do Sol	57	9	55	\N	A construir	\N	\N	\N	PVC Geomec. 14in 8in	\N	\N	\N	403	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000001B8C55D6D83B48C0C540DD08E286F2BF	P5 - Padre Manoel Raiol	54	9	55	\N	A construir	\N	\N	\N	PVC Geomec. 14in 8in	\N	\N	\N	404	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000085570AF6D83B48C0B9E4A0C72986F2BF	P6 - Padre Manoel Raiol	54	9	55	\N	A construir	\N	\N	\N	PVC Geomec. 14in 8in	\N	\N	\N	405	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000002A66C999B33F48C001D9CD0A4F39F7BF	P1 - 1° Setor Comércio	32	1	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	407	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000001351137FF43E48C0D4E6E1CD4453F7BF	P1 - 2° Setor Batista Campos	33	1	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	408	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000CCFB83250F3C48C0E7A344479537F7BF	P1 - 6° Setor São Brás	37	1	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	406	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000024851CD2167248C0F18DFD404FC3FBBF	P1 - Chicolândia	\N	\N	64	74	Ativo	\N	Poço cedido pela prefeitura a COSANPA	\N	PVC Geomec. STD 6in	40	\N	\N	321	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000007A9B3610D3C48C055C59E1CA764F7BF	P1 - 4° Setor Guamá	35	1	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	410	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000002135450E5A3A48C043A8D9807CD6F6BF	P1 - 5° Setor Marco	36	2	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	411	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000622CAA03F93848C077562F1B6D4CF7BF	P4 - 7° Setor Perimetral	38	1	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	412	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000FF230A80A43D48C01F528D5C9F7FF7BF	P1 - 8° Setor Jurunas	39	1	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	413	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B89F1BE640F447C00032BCF910E3F4BF	P1 - Milagre	\N	5	76	112	Ativo	\N	\N	2002-06-17 00:00:00	Aço Carbono 12in 8in	141	https://drive.google.com/open?id=1Nsz_F9EZvsI8oq09tqGq-CNaWtxiGthh	\N	76	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000AEDFF2610E3D48C09E5F8047ACCBF4BF	P2 - São Roque	\N	3	55	\N	Em construção	\N	\N	\N	\N	\N	\N	\N	335	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000429EF8B65D3A48C077267C6DA571F5BF	P1 - Benedito Monteiro	\N	3	55	\N	Em construção	\N	\N	\N	PVC Geomec.	\N	\N	\N	336	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000404C675F2D3C48C000FF3CD56DB5F5BF	P1 - Pratinha II	28	3	55	270	Ativo	\N	Incorporado SAAEB/No relatório de técnico, esse poço é chamado de "Poço Tapanã/Pratinha"	2007-05-27 00:00:00	Aço Carbono 12in 8in	150	https://drive.google.com/open?id=17pGbduP51wSRdN4JQMBAshsQFzgZkB4O	18	67	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B7F6F19EF83B48C01A4890797FD6F6BF	P1 - 9° Setor Pedreira	40	2	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	414	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000D38820AC5D3848C073157C882C62F6BF	P1 - 12° Setor Marambaia	58	2	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	415	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000045959269253848C0E722F051DC89F6BF	P1 - 13° Setor Costa e Silva	59	2	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	416	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000D9C8D26F233A48C03E278E08386EF6BF	P1 - 14° Setor Mendara	60	2	55	\N	A construir	\N	\N	\N	\N	\N	\N	\N	417	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F423BAB619074BC06766666666E6FFBF	P1 - Vácuo II	\N	7	36	12	Ativo	\N	\N	\N	\N	\N	\N	\N	290	\N	\N	{}	{}	10	\N	\N	\N	\N
0101000020E610000026738E762B3148C0578EE3388E63F5BF	P6 - PAAR	42	4	67	246.88	Ativo	\N	\N	2019-11-12 00:00:00	Aço Carobono 12in 8in	175	https://drive.google.com/open?id=1gUsx7VhIFGGGv6sLX-GL93LKN7ZLFl7R	\N	322	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000BA02E45E733D48C007D313FA0573F6BF	P8 - CDP	30	2	55	24124	Ativo	\N	\N	2019-12-20 00:00:00	Aço Carbono 14in 8in	125	https://drive.google.com/open?id=1KUcS4_RUFR37g1xZPKw_CLzMQIv43rb7	\N	332	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000009907BCD855C4BC01CE8B4814EBB03C0	P1 - Nova República	\N	7	52	250	Inativo	\N	\N	1998-03-31 00:00:00	Aço Carbono 14in 8in	\N	https://drive.google.com/open?id=12bHWQoLA4YIjxd8-Iz1JB8xlbarEf4zN	18	94	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000092BC6C3DCE594BC032FCD841818503C0	PL4 - Livramento	\N	7	52	250	A construir	\N	\N	\N	\N	\N	\N	\N	418	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000006D7AEEC809594BC020DB9C3B928803C0	PL3 - Livramento	\N	7	55	250	A construir	\N	\N	\N	\N	\N	\N	\N	419	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000008F510001BA5D4BC0B7891236AE8603C0	P3 - Trevo Irurá	50	7	52	126	Ativo	\N	Em processo de outorga	\N	PVC Geomec. REF 14in 8in	210	https://drive.google.com/open?id=1UjCzm0pR2Fv6KDXco-l3Dy1Xt9wHARN3	\N	4	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000017AE47E17A7A4BC0DED78173461404C0	P1 - Alter do Chão	\N	7	52	250	Em construção	\N	Poço a ser perfurado	\N	\N	\N	\N	\N	26	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000008D11EE59885E4BC09BD18255318403C0	P2 - Bacabal	\N	7	52	\N	Inativo	\N	Será feito outro poço (caminho fechado)	1997-08-26 00:00:00	Aço Carbono 14in 8in	\N	https://drive.google.com/open?id=1Wek-Hmjznl9KUDVn5r49rMmONLyWM6US	\N	186	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000D95B063D705F4BC0440A4D67AAA103C0	P2 - Amparo	\N	7	52	250	Ativo	\N	Pode ser referido como PT - Amparo ou P1 	2003-03-15 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1Wek-Hmjznl9KUDVn5r49rMmONLyWM6US	\N	187	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000045405CFD89604BC0F843A24A588C03C0	P2 - Elcione Barbalho	\N	7	52	271	Inativo	\N	\N	2009-09-18 00:00:00	Aço Carbono 14in 8in	220	https://drive.google.com/open?id=13Fndo--VF_g_Q5ZxhEW9pL1_o0IyzKzo	\N	185	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000FCD478E926C14BC0A04A58CCA667FEBF	P2 - Chapéu	\N	7	41	57	Ativo	\N	Atualizar relatório	\N	PVC Geomec. 8in	40	\N	\N	239	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000019821BFE62D647C0F920418C79FEE7BF	P1 - Cafezal Ponteira	\N	5	98	\N	Ativo	\N	\N	\N	\N	\N	\N	\N	364	\N	\N	{}	{}	2	\N	\N	\N	\N
0101000020E610000073C01CDA2DCD47C094A847FA1778E9BF	P1 - Magalhães Barata Ponteira	\N	5	98	12	Ativo	\N	\N	\N	\N	\N	\N	18	361	\N	\N	{}	{}	3	\N	\N	\N	\N
0101000020E61000004776E156A35D4BC0AB5BB2797E8D03C0	P4 - Irurá	\N	7	52	256	Inativo	\N	Não foi encontrado relatório do poço, apenas um relatório de perfilagem com as informações	1998-07-10 00:00:00	Aço Carbono 14in 8in	\N	https://drive.google.com/open?id=11ruKQiwPrJqAuiApfYBlQYZLadfXFaZd	\N	172	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000050882AD6123148C000884B358365F5BF	P5 - PAAR	30	4	67	234.5	Ativo	\N	\N	2009-02-20 00:00:00	Aço Carbono 14in 8in	250	https://drive.google.com/open?id=1eO74JHuNsB17K8iWjAAkZbMCA26kKhiL	\N	47	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000008580B8FA13594BC0D59BD98AFD8503C0	P2 - Livramento	\N	7	52	245.46000000000001	Ativo	\N	\N	2000-01-01 00:00:00	Aço Carbono 10in	200	https://drive.google.com/open?id=1eQ-lr65zSi1tO18GvKaDCQoSOgZtBMbR	\N	182	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E0807AEC543C48C000B9408E555EF5BF	P2 - Mata Fome	25	3	55	259.33999999999997	Ativo	\N	Incorporado SAAEB	2010-11-16 00:00:00	Aço Carbono 12in 8in	257.14299999999997	https://drive.google.com/open?id=1xolF18ALdZGeI66pX6Ub7hZG049CKG2r	\N	64	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B6F7E51B33614BC07B5731C3F7BC03C0	P2 - Residencial Salvação	\N	7	52	258	Ativo	\N	\N	2015-02-04 00:00:00	PVC Geomec REF 8in	150	\N	\N	183	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000003FA26B9B317A48C0CD0B9ABF7E9707C0	P1 - Tailândia Ponteira	\N	6	58	30	Ativo	\N	\N	\N	PVC Geomec. 6in	8	https://drive.google.com/open?id=1JpytdLcZCO-QmFfoiwjZfiZRdAOwhTqQ	18	197	\N	\N	{}	{}	20	\N	\N	\N	\N
0101000020E610000088530232FF7A48C0202876F39723F0BF	P7 - Cachoeira do Arari	\N	6	9	120	Inativo	\N	\N	\N	PVC Geomec. 6in	\N	https://drive.google.com/open?id=1_S2wH5y-K5Jdf3b4Af8uyOCUqPcMmmzE	\N	343	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000079EC54E6D33E4CC04E3F59CFD4DC00C0	P1 - Centro	\N	7	134	\N	Ativo	\N	\N	\N	\N	\N	\N	\N	113	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E02E4A32E73848C0ECF1B68F044FF7BF	P1 - 7° Setor Perimetral	\N	1	55	262.57999999999998	Ativo	\N	\N	\N	Aço Carbono 14in 8in	158.81999999999999	https://drive.google.com/open?id=11RA2qyBSBqvrk4L0ce9kaegF_OO2ihTt	\N	256	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000D7F0F44A595E4BC01FD1DF7BEE8503C0	PB4 - Bacabal	\N	7	55	250	A construir	\N	\N	\N	\N	\N	\N	\N	420	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000C0EFCCF1F73848C0DCAC6071234AF7BF	P3 - 7° Setor Perimetral	\N	1	55	252.53999999999999	Ativo	\N	\N	\N	14/8in	150	https://drive.google.com/open?id=17OBddWGVuCxBOX1Q4qcNwB56Sbcn6AND	\N	257	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000C0D8092FC12F48C000BDDA519CA3F5BF	P1 - Ananindeua Centro	\N	4	67	270	Ativo	\N	No relatório é referido como P1 - Maguari	2000-06-28 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1g_P1Ira4ks71vko29WgA2L7FmHmkyu7j	24	42	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000EC888517F57A48C0E6242EA38A24F0BF	P8 - Cachoeira do Arari	\N	6	9	120	Inativo	\N	\N	\N	PVC Geomec. 6in	\N	https://drive.google.com/open?id=1_S2wH5y-K5Jdf3b4Af8uyOCUqPcMmmzE	\N	344	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000001C3D2F3A88B147C07C1CFD264D4CF3BF	P1 - Nova Timboteua	\N	5	85	120	Ativo	\N	\N	2003-08-01 00:00:00	PVC Geomec. 8in	\N	https://drive.google.com/open?id=1P25f4bS34GBxopG4sFL47BPLduVbIYS8	\N	323	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000687C9B089F5F4BC000A5ECBAD838FFBF	P1 - Seringal	\N	7	71	36	Ativo	\N	Poço em ponteira; Em processo de renovação	\N	Aço Carbono 8in	190	https://drive.google.com/open?id=1al7YPJzzzIrsIJ1PKGQIxBl7m12T7df_	\N	140	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000EC746FA7E91847C07290EA4E8A29F3BF	P1 - Viseu	\N	5	60	150	Em construção	\N	\N	\N	\N	\N	\N	\N	245	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000023FB8252031947C07F8EE4F21F52F3BF	P2 - Viseu	\N	5	60	\N	A construir	\N	\N	\N	\N	\N	\N	\N	318	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000005180F3E5C14BC000BB4270735AFEBF	P6 - São Francisco	\N	7	41	140	Ativo	\N	\N	2018-09-01 00:00:00	PVC Geomec. STD 8in	95.311999999999998	\N	\N	142	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F0A64F960D5E4BC0006AC8F1A347FFBF	P1 - Aningal	\N	7	71	36	Ativo	\N	Poço em ponteira; Em processo de renovação	\N	Aço Carbono 8in	190	https://drive.google.com/open?id=1al7YPJzzzIrsIJ1PKGQIxBl7m12T7df_	18	139	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000010473ADDDB3D49C0003311363CFDFABF	P2 - Breves	\N	6	7	138	Ativo	\N	\N	2003-02-04 00:00:00	PVC Geomec. REF 8in	533.20000000000005	https://drive.google.com/open?id=1UvXGbVkW1iVhTdjWZsIS7GAkK0V9ZEuT	\N	149	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000282120ABD03D49C00056CC4F44FBFABF	P3 - Breves	1	6	7	128	Ativo	\N	\N	2003-02-12 00:00:00	PVC Geomec. REF 8in	150.06	https://drive.google.com/open?id=1Y2ogtOe3gbiCFNGSG4zMBrGNLd57sclh	\N	150	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000C8F319E312C14BC000042C591871FEBF	P3 - Engenho	\N	7	41	80	Ativo	\N	Atualizar o processo	\N	PVC Geomec. 10in	50	\N	\N	145	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B06E2DDAF65C4BC0000BB389F93DFFBF	P1 - Fazendinha	\N	7	71	35	Ativo	\N	Poço em ponteira; Em processo de renovação	\N	Aço Carbono 8in	130	https://drive.google.com/open?id=1al7YPJzzzIrsIJ1PKGQIxBl7m12T7df_	24	138	\N	\N	{}	{}	1	\N	\N	\N	\N
0101000020E6100000878D2A6131C14BC0D0C0CB5BD764FEBF	P1 - Areial Ponteira	\N	7	41	8	Ativo	\N	Poços fazem parte de um sistema em ponteira	\N	PVC Geomec. 4in	3	\N	\N	143	\N	\N	{}	{}	12	\N	\N	\N	\N
0101000020E61000006066666666C24BC0005651816895FEBF	P5 - S. Terezinha	\N	7	41	140	Ativo	\N	\N	2018-09-10 00:00:00	PVC Geomec. REF 8in	90.647999999999996	https://drive.google.com/open?id=1r0XMlx6BD5t8njp4ESirXb21Tt_1hYpb	\N	141	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000070C2D91AC26F48C0007493180456FBBF	P7 - Francilândia	\N	6	64	150	Ativo	\N	Vazão outorgada de 90.18	2003-09-20 00:00:00	PVC Geomec. REF 12in 8in	112.73	\N	\N	136	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000000CA47EBE188947C03D41A6AD0D19FCBF	P1 - IPASEP CP	\N	5	75	52	Ativo	\N	\N	1989-10-01 00:00:00	PVC Geomec. STD 8in	20	https://drive.google.com/file/d/1D4XzbvyTRdPrbCaVz69ulSVj1920vW26/view?usp=sharing	\N	421	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000558758BFBD8847C0FA063727C608FCBF	P1 - Goiabarana	\N	5	75	66	Ativo	\N	\N	1997-12-22 00:00:00	Aço Carbono e PVC 8in	\N	https://drive.google.com/file/d/1D4XzbvyTRdPrbCaVz69ulSVj1920vW26/view?usp=sharing	\N	422	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000002C503374F77A48C00ECB3DF0B324F0BF	P3 - Cachoeira do Arari	\N	6	9	32	Ativo	\N	\N	\N	PVC Geomec. 6in	20	https://drive.google.com/open?id=1_S2wH5y-K5Jdf3b4Af8uyOCUqPcMmmzE	\N	339	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000DBD957AE9D3E4CC012A5BDC117C600C0	P1 - Cidade Nova	\N	4	67	\N	Ativo	\N	\N	\N	\N	\N	\N	\N	174	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000AF21EF18BC7148C01DED565AF7ADFBBF	P2 - Algodoal	\N	6	64	50	Ativo	\N	\N	2019-06-24 00:00:00	PVC Geomec. 8in	\N	https://drive.google.com/open?id=17n67cVgQPcSc8KhA8kqm2GVQn_nvsv8J	\N	302	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000012BB74D6F66D48C02326F0465564F6BF	P2 - Ponta de Pedras	\N	6	110	42	Ativo	\N	\N	\N	PVC Geomec 8in	\N	https://drive.google.com/open?id=1054jOFq9Gsy7X1SR_LanrklWOHqkb9T3	\N	348	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000CAF8C803F36D48C05641BBA0B865F6BF	P4 - Ponta de Pedras	\N	6	110	\N	Inativo	\N	\N	\N	\N	\N	https://drive.google.com/open?id=1054jOFq9Gsy7X1SR_LanrklWOHqkb9T3	\N	350	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000007DB9042499D947C034D0875EF7C5E6BF	P2 - Marapanim	\N	5	104	98	Ativo	\N	\N	2014-09-22 15:42:58.211	Aço Carbono 12in/8in	155	https://drive.google.com/open?id=167Ig73iUUl9r3OqL4fFD7e32tHco8uxk	\N	366	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000FCEC17ADE1F447C0D4B3CF3448DCF6BF	P1 - Inhangapi	\N	5	92	110	Ativo	\N	\N	\N	8in	\N	\N	\N	367	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000418E28AA2F4248C043288210D766E8BF	P3 - Salvaterra	\N	6	116	80	Ativo	\N	\N	\N	PVC Geomec. 8in	\N	https://drive.google.com/open?id=10w7sDEfDriRJipAm9bgapxGsC0lmMAAb	\N	357	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E03F5F6E1D4248C0F5CA4146126AE8BF	P5 - Salvaterra	\N	6	116	80	Ativo	\N	\N	\N	PVC Geomec.	\N	https://drive.google.com/open?id=10w7sDEfDriRJipAm9bgapxGsC0lmMAAb	\N	359	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000CFC086EA354248C00D2CE262B56AE8BF	P6 - Salvaterra	\N	6	116	80	Ativo	\N	\N	\N	PVC Geomec. 8in	\N	https://drive.google.com/open?id=10w7sDEfDriRJipAm9bgapxGsC0lmMAAb	\N	360	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000520D2EAF0D4248C0142B38BA7E63E8BF	P1 - Salvaterra	\N	6	116	80	Ativo	\N	\N	\N	PVC Geomec. 8in	\N	https://drive.google.com/open?id=10w7sDEfDriRJipAm9bgapxGsC0lmMAAb	\N	355	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000DF3F32ED264248C00F11E0C96661E8BF	P2 - Salvaterra	\N	6	116	80	Ativo	\N	\N	\N	PVC Geomec. 8in	\N	https://drive.google.com/open?id=10w7sDEfDriRJipAm9bgapxGsC0lmMAAb	\N	356	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E1D4C5B0124248C0AF2E980C5D67E8BF	P4 - Salvaterra	\N	6	116	80	Ativo	\N	\N	\N	PVC Geomec. 8in	\N	https://drive.google.com/open?id=10w7sDEfDriRJipAm9bgapxGsC0lmMAAb	\N	358	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000057D678A6484148C0F80357E6794EE7BF	P2 - Soure	\N	6	133	120	Ativo	\N	\N	\N	PVC Geomec. 8in	\N	https://drive.google.com/open?id=1zKqpRQK2D8wBDN3JC2rN57esUDGoOp-L	\N	352	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000045EEA7092A4148C0F015DC1A684DE7BF	P3 - Soure	\N	6	133	120	Inativo	\N	\N	\N	PVC Geomec. 8in	\N	https://drive.google.com/open?id=1zKqpRQK2D8wBDN3JC2rN57esUDGoOp-L	\N	353	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000009F9AC51D204148C00922A0F00756E7BF	P4 - Soure	\N	6	133	120	Inativo	\N	\N	\N	PVC Geomec.	\N	https://drive.google.com/open?id=1zKqpRQK2D8wBDN3JC2rN57esUDGoOp-L	\N	354	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000008A3FECC1F37A48C067F8E78F5622F0BF	P6 - Cachoeira do Arari	\N	6	9	120	Inativo	\N	\N	\N	Geomecânico 6in	\N	https://drive.google.com/open?id=1_S2wH5y-K5Jdf3b4Af8uyOCUqPcMmmzE	\N	342	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000ED96DE90F76D48C0D8681A5E3067F6BF	P1 - Ponta de Pedras	\N	6	110	42	Ativo	\N	\N	\N	Geomecânico 8in	\N	https://drive.google.com/open?id=1054jOFq9Gsy7X1SR_LanrklWOHqkb9T3	\N	347	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000BE250DDA6FB148C001643B58C356FEBF	P1 - Limoeiro do Arujú	\N	6	97	93	Ativo	\N	\N	\N	Aço Carbono 6in	\N	https://drive.google.com/open?id=1oKy4IKFtk_h8PvjPkg1OCkOGhDkK2Qvr	\N	345	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000647B63E956B148C0759166BB6855FEBF	P2 - Limoeiro do Ajurú	\N	6	97	103	Ativo	\N	\N	\N	Aço Carbono 6in	\N	https://drive.google.com/open?id=1oKy4IKFtk_h8PvjPkg1OCkOGhDkK2Qvr	\N	346	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000000724E30CEB7A48C069A0A6426C23F0BF	P4 - Cachoeira do Arari	\N	6	9	32	Ativo	\N	\N	\N	PVC Geomec. 6in	20	https://drive.google.com/open?id=1_S2wH5y-K5Jdf3b4Af8uyOCUqPcMmmzE	\N	340	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000DDC7534AF56D48C0949CE49EA163F6BF	P3 - Ponta de Pedras	\N	6	110	42	Ativo	\N	\N	\N	PVC Geomec 8in	\N	https://drive.google.com/open?id=1054jOFq9Gsy7X1SR_LanrklWOHqkb9T3	\N	349	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000996C71DEEC7A48C026CE70ABC023F0BF	P5 - Cachoeira do Arari	\N	6	9	120	Ativo	\N	\N	\N	PVC Geomec. 6in	20	https://drive.google.com/open?id=1_S2wH5y-K5Jdf3b4Af8uyOCUqPcMmmzE	\N	341	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000991ED2B23D4148C0D6FD95872B58E7BF	P1 - Soure	\N	6	133	120	Ativo	\N	\N	\N	PVC Geomec.	\N	https://drive.google.com/open?id=1zKqpRQK2D8wBDN3JC2rN57esUDGoOp-L	\N	351	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F48B97B1F07A48C087237CE12922F0BF	P1 - Cachoeira do Arari	\N	6	9	32	Inativo	\N	\N	\N	PVC Geomec. 6in	\N	https://drive.google.com/open?id=1_S2wH5y-K5Jdf3b4Af8uyOCUqPcMmmzE	\N	337	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000C403E361037B48C08D1E55F9CE22F0BF	P2 - Cachoeira do Arari	\N	6	9	32	Inativo	\N	\N	\N	PVC Geomec. 6in	\N	https://drive.google.com/open?id=1_S2wH5y-K5Jdf3b4Af8uyOCUqPcMmmzE	\N	338	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000051B9D816DA5E4BC01CF740F4918103C0	P1 - Bacabal	3	7	52	250	Ativo	\N	No relatório referido como P5 - Bacabal	2013-06-20 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1j0N_n35Ozu53kUYDh9Ln2wnCIIf_h__J	\N	175	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000045B47FDAF72A48C06C77C0133E0CF1BF	P1 - Baía do Sol	\N	1	55	274	Ativo	\N	Pertencente a SEDOP	1999-04-23 00:00:00	Aço Carbono 12in 8in	210	https://drive.google.com/open?id=1cy8zJHL4YwWCewUjPnUz-14GOFs5jozi	20	254	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000CC723015F95D4BC0C51B224A7B8303C0	P2 - Caranazal Ponteira	\N	7	52	\N	Ativo	\N	Poços rasos com a retomada da obra eles serão desativados. Sem relatório. O abastecimento será feito com a água do aeroporto velho para adução, jogada na elevatória para abastecer o Caranazal	\N	\N	\N	\N	\N	192	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000008F9A9CC74E594BC054D4FE489CA603C0	P1 - Uramari	\N	7	52	\N	Inativo	\N	Sem informações; Poço desativado devido a água comprometida;	\N	\N	\N	\N	\N	195	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000005B409EC80D594BC0F40674029A8803C0	P3 - Livramento	\N	7	52	250	Em construção	\N	Poço a ser concluído. Paralisada pela CMT	\N	\N	\N	\N	\N	196	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000090510001BA594BC051DF1773D77203C0	P1 - Julia Passarinho	\N	7	52	200	Ativo	\N	Também pode ser referido como PT1 - Julia Passarinho; Poço operante. Joga direto na rede abastece Santana e parte Prainha; Vazão recomendada no relatório de 150 m³/h	2000-10-01 00:00:00	Aço Carbono 12in 8in	200	https://drive.google.com/open?id=1TLCrQhTVdLINwnd9mwPXLGBhlU7Fh76g	20	194	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000007B881D450C5F4BC0395E40B7CF6C03C0	P1 - Mapiri	\N	7	52	100	Ativo	\N	Em processo de renovação; Também pode ser referido como PT1 - Mapiri; A nomeclatura do poço mostra um nome incorreto; Abastece bairro Mapiri. Fica dentro da Escola Maria Amalia;	1993-08-01 00:00:00	Aço Inox 12in 8in	200	https://drive.google.com/open?id=19yvcDHkFPRLsPhoAtcZoofKbVJeeETEw	20	193	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000686534855D2848C0005B3D6E9223F6BF	P1 - Beija Flor	\N	4	105	281.01999999999998	Ativo	\N		1998-12-03 00:00:00	Aço Carbono 24in 14in 8in	100	https://drive.google.com/open?id=1h80H4VLtsAYm_PVCmA6bPJ4HpSiz9npw	20	38	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000038BD5296213848C000FE08C380A5F5BF	P1 - Ariri Bolonha	\N	3	55	247.5	Ativo	\N	Em processo de outorga	1997-12-05 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1ex1ElrTFn42BFIrmZqwKs4Cv0R5EqKma	\N	16	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000CB147941528E47C0A82FBF2F0AC3F8BF	P1 - Ourém Ponteira	\N	5	108	4	Ativo	\N	\N	\N	PVC Geomec. STD 6in	\N	\N	\N	368	\N	\N	{}	{}	14	\N	\N	\N	\N
0101000020E610000010D3EC844EDC48C0E040F7875BBD21C0	P1 - St. M° Barreiras Ponteira	\N	8	123	21	Ativo	\N	Poço sem relatório, sendo estas informações oriundas de um relatório descritivo genérico. Também não há outorga para o mesmo	\N	\N	\N	https://drive.google.com/open?id=1PGPtiNvXX2-mpfZta5evhZrvU11UJbHy	\N	163	\N	\N	{}	{}	9	\N	\N	\N	\N
0101000020E610000058D11F9A793A48C0E3B06D516603F5BF	P2 - Eduardo Angelim	21	3	55	\N	Inativo	\N	Incorporado SAAEB	\N	\N	\N	\N	\N	319	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000104C8BB30F074BC00047DF5D94E4FFBF	P1 - Vácuo IV	29	7	36	18	Ativo	\N	Esse é o poço nº 1 representativo de um sistema de ponteira. Não foi encontrado relatório e encontrasse em processo de renovação de outorga	\N	PVC Geomec. STD 8in	\N	\N	\N	159	\N	\N	{}	{}	10	\N	\N	\N	\N
0101000020E61000007ACD85A429C14BC07272D59ECE64FEBF	P1 - Areial 	\N	7	41	75	Ativo	\N	Relatório faltante	\N	PVC Geomec. 8in	90	\N	\N	238	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000069BA00703B5C4BC05F285A1B9FB803C0	P4 - Nova República	\N	7	52	\N	Em construção	\N	A ser perfurado;	\N	\N	\N	\N	\N	251	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000075711B0DE03B48C0999B0DBD7687F2BF	P1 - Padre Manoel Raiol	\N	1	55	\N	Ativo	\N	Pertencente a SEDOP; Também chamado de 5ª Rua	\N	\N	95	https://drive.google.com/open?id=15DcKhwzQ1f4vWPPOaomK4Kl-Xe-tsQXw	\N	248	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000CEBC1C76DF3B48C0C646E7FC14C7F4BF	P1 - Cohab	17	3	55	\N	Inativo	\N	\N	\N	\N	\N	\N	\N	320	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000058941C9EED3B48C03804718F35C1F4BF	P2 - Cohab	17	3	55	257.55000000000001	Ativo	\N	Incorporado SAAEB	1999-02-28 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1ZBa2xu7EC589jhnf0InZB5NHXU8Cfkpc	20	56	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000283334EA96F247C00053ED7A39D9F4BF	P4 - Jaderlândia Castanhal	\N	5	76	168	Ativo	\N	\N	2009-11-25 00:00:00	Aço Carbono 12in 8in	250	https://drive.google.com/open?id=1cfM_dE-Ig_JoR50NwH0TGvgLNPBk4NXR	\N	117	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000080BD50C0763648C0007B444C8924F6BF	P2 - Jaderlândia	\N	4	67	254.40000000000001	Ativo	\N	Vazão atualizada em 05/04/2019;	2019-01-01 00:00:00	Aço Carbono 14in 8in	\N	\N	\N	34	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000040D6E1E82A3348C000094AD1CA3DF5BF	P1 - Uirapurú	\N	4	67	258	Ativo	\N	Em processo de renovação de outorga	1998-10-05 00:00:00	Aço Carbono 12in 8in	300	https://drive.google.com/open?id=1zfWAaCsCBT50C69cq0_xKhBc5_v7BpC_	\N	37	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000036A810A28F2A48C000673B011905F6BF	P1 - Marituba COHAB	\N	4	105	280	Inativo	\N	Sem relatório construtivo do poço; outorga Vencida	\N	\N	210	\N	\N	217	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F836351792F247C0007E6CD9F4DCF4BF	P1 - Jaderlândia Castanhal	\N	5	76	189.5	Ativo	\N	\N	1997-01-30 00:00:00	PVC Geomec. STD 12in 8in	137	https://drive.google.com/open?id=1dPmMjRJ4DsLMg7VPMq7c-DU9mxcfKlzZ	18	101	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000182B2B5FADF847C0009EEB351C02F5BF	P1 - COHAB Castanhal	\N	5	76	120	Ativo	\N	Recomenda-se redução da vazão explotada quando o P1 - Cohab estiver funcionando; Está em processo de renovação	2008-11-10 00:00:00	Aço Carbono 12in e 8in	132	https://drive.google.com/open?id=17WO49Sfrdj4cp82P9RyXobnqFXZXs8OT	18	89	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000A8F49397A0F847C00085694F3105F5BF	P2 - COHAB Castanhal	\N	5	76	150	Ativo	\N	Relatório disponível é apenas de filmagem, estão ausentes algumas informações	2011-11-11 00:00:00	PVC Geomec. STD 12in 8in	100	https://drive.google.com/open?id=1WFV-_IMZw-oVaWSV54e3zhqgOqM-Mgn4	\N	90	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000019754B36CF2F48C031A63814F7A3F5BF	P2 - Ananindeua Centro	\N	4	67	239.5	Ativo	\N	Não há relatório apenas perfil	\N	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1tlRMTK8S5ODEFov_tDAJpVhAIQeGg6MD	24	41	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000030E6AD6E80F247C0002B6519E2D8F4BF	P2 - Jaderlândia Castanhal	\N	5	76	152	Ativo	\N	\N	1997-04-30 00:00:00	Aço Schedulle 12in 8in	164	https://drive.google.com/open?id=1dCoGxagq-vYSchf0TV7MXUWfEvaKeJRz	\N	116	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000068C5FEB27BF247C000717A1EA9DCF4BF	P3 - Jaderlândia Castanhal	\N	5	76	167.25999999999999	Ativo	\N	\N	2000-04-07 00:00:00	Aço Carbono 12in 8in	153	https://drive.google.com/open?id=1ti8kcf99MMDbRxQe2W5TY7DbAfqMm1_m	\N	118	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000030E2742551F747C0003835D736A3F4BF	P1 - Cte. Assis	\N	5	76	119.7	Ativo	\N	\N	\N	PVC Geomec. 8in	195	https://drive.google.com/open?id=1xk4DrT3tXBnzdpPxdMnmjuU9vrxfMVoq	18	91	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000C82A4FFAA42748C000CD2109F8E6F5BF	P1 - Almir Gabriel	\N	4	105	274	Ativo	\N	Em processo de renovação / Pode ser chamado de Che Guevara	2008-06-24 00:00:00	Aço Carbono 14in 8in	250	https://drive.google.com/open?id=1TFHzitQ4DimIrfz8j1EKJmkAsfImLWNb	18	70	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000804D0EE689F247C000BF4BB005DBF4BF	P5 - Jaderlândia Castanhal	30	5	76	224.06999999999999	Ativo	\N	\N	2019-01-09 00:00:00	Aço Carbono 14in 8in	120	https://drive.google.com/open?id=1cfM_dE-Ig_JoR50NwH0TGvgLNPBk4NXR	\N	119	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000BACED228375E4BC0E06A09A0D28C03C0	P6 - Santarenzinho	\N	7	52	272	Ativo	\N	Abastece o bairro Santarenzinho; O poço está outorgado segundo a outorga 3061/2018, mas foi reentrado para processo de outorga devido a confusão com nomenclatura com o P2	2008-10-05 00:00:00	Aço Carbono 14in 8in	250	https://drive.google.com/open?id=1vbLDUQ_wphhN8o0gV5h7j39Wo-K7-nBI	20	299	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000028D060E68AF447C000EC1793CEADF4BF	P1 - Ianetama	\N	5	76	193.59	Ativo	\N	Possui um relatório antigo que possui coordenadas próximas. Verificar se são relatórios do mesmo poço. Não foi encontrado nenhum documento de outorga para esse poço	2002-09-09 00:00:00	Aço Carbono 12in 8in	150	https://drive.google.com/open?id=1Dtk_MVTkM-z8ArxdwF4IdQvstLnp3ZR7	20	100	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000007D5FBE31535E4BC0176B07857D8A03C0	P7 - Santarenzinho	\N	7	52	272	Ativo	\N	Contribui para o Irurá e abastece o Aeroporto Velho; O poço está outorgado segundo a outorga 3061/2018, mas foi reentrado para processo de outorga devido a confusão com nomenclatura	2008-09-18 00:00:00	Aço Carbono 14in 8in	230	https://drive.google.com/open?id=1MMgXvWtjpNr5Xb8Ja9fsB3B9i-VrBp0z	20	300	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000C1CC1569933D48C0256785F49073F6BF	P1 - CDP	30	2	55	257.91000000000003	Ativo	\N	Verificar as datas corretas	2014-06-03 00:00:00	Aço Carbono 14in 8in	250	https://drive.google.com/open?id=1vmZIVeNjeyKNeAggKGi3m2q4go_A2-dN	18	9	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000181FF523BA3A48C000EAFA5E73A1F4BF	P1 - Morada de Deus	16	3	55	273	Inativo	\N	Incorporado SAAEB/Verificar informações faltantes - Inoperante desde 25/09/2019	1999-07-05 00:00:00	Aço Carbono 12in 8in	\N	https://drive.google.com/open?id=1ynCaeaXwd2eqwphVTFYU3xybyN-j4GWJ	\N	55	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B0DF070B1A3D48C000676BDA4BDEF4BF	P1 - Souza Franco	20	3	55	262.16000000000003	Ativo	\N	Incorporado SAAEB/Verificar Informações	1999-04-01 00:00:00	Aço Carbono 12in 8in	300	https://drive.google.com/open?id=1atpML3fF4DVNKEEjxNjLEafCPkyo11rO	18	58	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000050D3BD9A783A48C0009A5F744902F5BF	P1 - Eduardo Angelim	21	3	55	266	Ativo	\N	Incorporado SAAEB	1997-09-27 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1SKezRDuzA7HUj5HItG1erXXSfwLXX3Jj	18	301	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000070DB85E63A3748C00038B9DFA128F5BF	P1 - Tenoné	10	3	55	246	Ativo	\N	\N	\N	\N	175	https://drive.google.com/open?id=1iyCaqniYXhIktYnkV0iNlEYDLPUOOz06	\N	12	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B853C8957A3A48C000E32EC21465F5BF	P1 - Canarinho	\N	3	55	273.63999999999999	Ativo	\N	Verificar diâmetro	\N	\N	300	https://drive.google.com/open?id=1GoqnOkCyAYfVWe7uAaSCFnvuWWmTIQT6	18	13	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000000685BCD3A3148C000FA95CE8767F5BF	P4 - PAAR	\N	4	67	251.03999999999999	Ativo	\N	\N	\N	\N	310	https://drive.google.com/open?id=13J83CPOrVW5qTB7tT0o7_YZKolQcS-xb	\N	45	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000008022B87163D48C0000EACA3DDCAF4BF	P1 - São Roque	19	3	55	\N	Ativo	\N	Incorporado SAAEB/Verificar informações	\N	\N	\N	\N	\N	57	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000C00308543C3D48C0008F0F4AFDDCF4BF	P2 - Souza Franco	20	3	55	268.55000000000001	Ativo	\N	Incorporado SAAEB/Verificar informações	2013-07-13 00:00:00	Aço Carbono 12in 8in 12in	250	https://drive.google.com/open?id=1-L2fnsT09aKfd2OVCamo5rfBEEBCm7wj	\N	59	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000982A17DE703C48C0006E10664001F5BF	P1 - Paracurí	22	3	55	\N	Ativo	\N	Incorporado SAAEB/Verificar informações ausentes	\N	\N	\N	\N	\N	60	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000005BECF6593948C0004127840EBAF5BF	P5 - Benjamin Sodré	2	3	55	200	Ativo	\N	No dia da visita técnica ao setor Benjamin Sodré pela equipe da UE-MA com o acompanhamento da operadora Marília da UN-AM (25/10/2018), o poço P05 estava parado e necessitando de manutenção.	1992-01-01 00:00:00	Aço Carbono 14in 8in	200	\N	\N	14	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000005830B8E68E3848C000F4A3E19479F5BF	P7 - IPASEP	7	3	55	244.74000000000001	Ativo	\N	Verificar e adicionar dados	1997-02-01 00:00:00	Aço Carbono 14in 8in	300	https://drive.google.com/open?id=12tWOMJR6EqQ9ewY4HO_v6wRI-cdWWPH8	\N	2	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F8E460EA723B48C000A59BC42030F5BF	P2 - Viver Primavera	29	3	55	80	Ativo	\N	Minha Casa Minha Vida	\N	\N	\N	\N	\N	68	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B0F3FDD4783B48C000FEB27BF230F5BF	P1 - Viver Primavera	29	3	55	80	Ativo	\N	Minha Casa Minha Vida	\N	\N	\N	\N	\N	69	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000506C938AC63C48C000E7DB82A57AF4BF	P1 - Brasília	14	3	55	264.00999999999999	Ativo	\N	Incorporado SAAEB	1999-06-14 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1CJC-CYZGt1Y_CqwUshWuvkPQQEz560L0	18	53	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E01C3C139A3848C00061821ABE05F6BF	P5 - Benguí	1	3	55	270	Ativo	\N		1998-01-01 00:00:00	14in 8in	170	https://drive.google.com/open?id=1wdMnDvSumFRLO_h-uoHyhFvHMLgbo0mk	\N	21	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000003009DE90463948C000677BF486BBF5BF	P7 - Benjamin Sodré	2	3	55	272	Ativo	\N	\N	2002-08-29 00:00:00	14in 8in	200	\N	\N	25	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E047C329733B48C000BC55D7A19AF5BF	P7 - Cordeiro de Farias	5	3	55	265.32999999999998	Ativo	\N		\N	14in 8in	160	https://drive.google.com/open?id=1wD_2gepT2Nl4vF6FDXj7v7uK3g2szt3e	\N	29	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000009058198D7C3848C00051D5045177F5BF	P6 - IPASEP	7	3	55	269	Inativo	\N	Pode ser reativado; Precisa de checagem de informações	\N	\N	\N	\N	\N	31	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000030FAD170CA3848C000B510E4A004F6BF	P3 - Benguí	1	3	55	245	Ativo	\N		1996-01-01 00:00:00	14in 8in	200	https://drive.google.com/open?id=1aNfGP1QKU190sYbSJqLRh64sVT3dvlkH	\N	22	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000A0B5696CAF3B48C0009E909DB731F4BF	P1 - São João do Outeiro	15	3	55	273	Ativo	\N	Incorporador SAAEB/Apenas relatório de perfilagem ótica	\N	Aço Carbono 12in 8in	300	https://drive.google.com/open?id=1b4iVFP_Y16YqRI6Gg5CbkynOeZrU5OuZ	18	54	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000068847EA65E3B48C0006E8104C58FF5BF	P1 - Raimundo Jinkings	26	3	55	273	Inativo	\N	Incorporado SAAEB	1999-08-20 00:00:00	Aço Carbono 12in 8in	300	https://drive.google.com/open?id=1Tj4XNJfnaWTlSx-Vd7Bn2R6tIgO5l4uo	\N	65	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000090E4B9BE0F3748C0002955A2ECEDF5BF	P1 - Coqueiro	6	3	55	268.19999999999999	Ativo	\N	Possui apenas ficha de poço	1994-01-01 00:00:00	\N	160	https://drive.google.com/open?id=1fU9C7nBOWkGNpkHumdsEXQENgmS9qlJb	\N	19	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000006D917BBABA5147C0FF3174ECA052F0BF	P1 - Augusto Corrêa Ponteira	\N	5	2	15	Ativo	\N	\N	\N	\N	\N	\N	\N	303	\N	\N	{}	{}	15	\N	\N	\N	\N
0101000020E6100000982F2497A73848C000E67CB8B177F5BF	P8 - IPASEP	7	3	55	242.87	Ativo	\N	\N	2006-06-05 00:00:00	Aço Carbono 14in 8in 14in	340	https://drive.google.com/open?id=1Cii4U1dcapFj_61cHQ-NI3YCX0dz7mw_	\N	30	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000809F38807E3B48C00051B9895A9AF5BF	P4 - Cordeiro de Farias	5	3	55	240.30000000000001	Ativo	\N	Possui apenas ficha de poço	\N	14in 8in	\N	https://drive.google.com/open?id=1F8r9IphQxYLph2xpq09CP_vYI9AomZzz	\N	17	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000D023F118BC3948C0004B2FD12315F4BF	P1 - Água Boa	18	3	55	256.77999999999997	Ativo	\N	Incorporado SAAEB	1999-08-31 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=1o9TB73BPGf-Apubl_CdM3xhyQXEcE9oj	\N	50	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000048950B6F383C48C0002633252CE6F5BF	P1 - Pratinha I	27	3	55	251.33000000000001	Ativo	\N	Incorporado SAAEB	2018-09-21 00:00:00	Aço Carbono 14in 8in	170	https://drive.google.com/open?id=17pGbduP51wSRdN4JQMBAshsQFzgZkB4O	\N	66	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000030F7578FFB3648C000C3D2C08FEAF5BF	P2 - Coqueiro	6	3	55	248.71000000000001	Ativo	\N	Possui apenas ficha de poço	1996-01-01 00:00:00	\N	160	https://drive.google.com/open?id=1LMORZsKqpxm8jGr2zpIXp6cSoMxjwrIk	\N	18	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000285C1D00713B48C000C3EDD0B098F5BF	P6 - Cordeiro de Farias	5	3	55	270.16000000000003	Ativo	\N	\N	2005-12-26 00:00:00	14in 8in	270	https://drive.google.com/open?id=1k_Lv7egl-d_5Q-IfnWgMr_Y9qr2zxUig	\N	28	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E843DE72F53748C0000967B79609F6BF	P2 - Panorama XXI	8	3	55	252.25	Ativo	\N	\N	\N	Aço Carbono 14in 8in	\N	\N	\N	11	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000A0B228ECA23848C0006304543802F6BF	P2 - Benguí	\N	3	55	272	Ativo	\N	\N	1995-01-01 00:00:00	14in 8in	200	\N	\N	20	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000BB58658E673D48C0D0C889B77470F6BF	P5 - CDP	30	2	55	275	Ativo	\N	Verificar as datas	2013-09-07 00:00:00	Aço Carbono 14in 8in	200	https://drive.google.com/open?id=1e3w3k5ySoAAAhIAvjwb6ySj-Q8-Qk3Vs	\N	10	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E0077591423948C0006C04E275BDF5BF	P8 - Benjamin Sodré	2	3	55	246.91999999999999	Ativo	\N	Em processo de renovação de outorga	2006-01-01 00:00:00	Aço Carbono 14in 8in	250	\N	\N	27	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000D852B178C44748C000C85E964639F4BF	P1 - Cotijuba	24	3	55	\N	Ativo	\N	Incorporado SAAEB/Verificar informações	\N	\N	\N	\N	\N	62	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000032547698BA3848C05CD6EA98E001F2BF	P3 - Murubira	\N	1	55	\N	Ativo	\N	Pertencente a SEDOP	\N	\N	\N	\N	\N	93	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000896B2D6ABB3848C029A52B898AFCF1BF	P5 - Murubira	30	1	55	246.5	Ativo	\N	Pertencente a SEDOP	2004-06-24 00:00:00	Aço Carbono 14in 8in	190	https://drive.google.com/open?id=1Vl_nBoKLuj7yLD3E_YN6IwHNTT5OJfX2	\N	247	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000822836AA843D48C0191C9F7EC470F6BF	P7 - CDP	30	2	55	273	Ativo	\N	Poço novo; Atualizar vazão e nd	2018-12-01 00:00:00	Aço Carbono 14in 8in	170	https://drive.google.com/open?id=1H__cPcrbKe0Do9wP2MwMzk5N0viv36az	\N	240	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000001C2FDD24063948C0C74695B0984DF7BF	P2 - 7° Setor Perimetral	\N	1	55	250.31999999999999	Ativo	\N	\N	\N	14/8	250	https://drive.google.com/open?id=1Y_h07Fq4FZ4xXioZ0oMDDfYdnZY7WgbU	\N	255	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B00BCD751A3148C000B10E475769F5BF	P3 - PAAR	\N	4	67	247.11000000000001	Ativo	\N	\N	\N	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=131sv6up5zPINK5NoSK1RiXzgzpO67oKK	\N	32	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000005C00B81DCB3348C05FE2A26D0F95F1BF	P1 - Carananduba	\N	1	55	270	Ativo	\N	Pertencente a SEDOP	\N	Aço Carbono 12in 8in	130	https://drive.google.com/open?id=1BsGcQFB76ZfASry6SPHdR4QhOEUbMVf1	18	253	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000006B479724BC3848C01EA0D24CA8FEF1BF	P1 - Murubira	\N	1	55	246.5	Ativo	\N	Pertencente a SEDOP	\N	\N	\N	https://drive.google.com/open?id=1Vl_nBoKLuj7yLD3E_YN6IwHNTT5OJfX2	18	191	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000582A6F47383548C000DE550F9887F5BF	P1 - Sabiá	\N	4	67	287.5	Ativo	\N		1998-09-29 00:00:00	Aço Carbono 14in 8in	200	https://drive.google.com/open?id=14BE1NIj9A_cBXSlqZtZB5vVQZpQLYy1Q	\N	35	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000070BAF3C4733248C000C83B873294F6BF	P1 - Verdejante	\N	4	55	245.61000000000001	Ativo	\N	\N	1999-01-26 00:00:00	Aço Carbono 12in 8in	340	https://drive.google.com/open?id=19a9aAQRdOLppj4cLKh6-ylYM2A1B7oKP	18	43	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000784BE35E733D48C000BAC8FD4106F6BF	P1 - Pratinha	11	3	55	248	Inativo	\N	Referenciado como P3 no relatório de construção e na outorga como P1	2012-12-27 00:00:00	Aço Carbono 12in 8in	260	https://drive.google.com/open?id=134Ujn_YhcRnzl-bzXRk2lYDv4VbQ-ksg	\N	23	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000090C0ADBB793448C0007FD8D2A3E9F5BF	P13 - Cidade Nova II	\N	4	67	258.23000000000002	Ativo	\N	Referido com P04 no relatório	1996-05-10 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=129kaU_1t4YIqjEiWbOWbQ6OcaobTGCix	24	39	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000550A456BE33B48C0CF63A7329F86F2BF	P2 - Padre Manoel Raiol	\N	1	55	\N	Ativo	\N	Pertencente a SEDOP; Também chamado de 5ª Rua	\N	\N	\N	\N	\N	249	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000057CF36AE23B48C0B63BE0091F86F2BF	P3 - Padre Manoel Raiol	\N	1	55	272	Ativo	\N	Pertencente a SEDOP; Também chamado de 5ª Rua	2002-04-18 00:00:00	Aço Carbono 12in 8in	\N	https://drive.google.com/open?id=1_OHtwOKcmlhz7f_LwFnJfXsDesCpmjAT	\N	250	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000378D29A79F3848C01565AB1AE600F2BF	P4 - Murubira	55	1	55	\N	Ativo	\N	Pertencente a SEDOP	\N	\N	\N	https://drive.google.com/open?id=1NW7_ZUmMejrhHwSGZQ8wm-S0IEL0WKfN	\N	246	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000009E8638575D3D48C07CE5DBD1476CF6BF	P6 - CDP	\N	2	55	\N	Inativo	\N	\N	\N	\N	\N	\N	\N	112	\N	\N	{}	{}	1	\N	\N	\N	\N
0101000020E610000000E3A7716F3A48C0008D78B29B19F6BF	P2 - Catalina	4	3	55	252	Ativo	\N	Relatório está com a localização do P1	2010-04-07 00:00:00	14in 8in	\N	https://drive.google.com/open?id=1nFcNWS6vUd3OcZ4fETBEhqW7C1yufFxB	\N	24	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000002019726C3D3548C000148C4AEA84F5BF	P2 - Sabiá	\N	4	67	270.5	Ativo	\N	\N	2007-06-05 00:00:00	Aço Carbono 14in 8in	250	https://drive.google.com/open?id=1U7dS6Zt--47fGoiG1jXRg3WFldzGiffu	\N	36	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F063CBA6E73248C000EF26B88B92F6BF	P2 - Verdejante	\N	4	67	232.09	Ativo	\N	Pode constar como P2 - Águas Lindas; Possui um form_d	2013-09-27 00:00:00	Aço Carbono 12in 8in	400	https://drive.google.com/open?id=1dsil01tgNvfVqzBW-wtI4CcXex2hQoGP	\N	75	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000BFC82D22D93B48C0FBF019760588F2BF	P4 - Padre Manoel Raiol	\N	1	55	88.920000000000002	Ativo	\N	Pertencente a SEDOP; Também chamado de 5ª Rua	2013-11-09 00:00:00	PVC Geomec. STD 8in	95	https://drive.google.com/open?id=1_OHtwOKcmlhz7f_LwFnJfXsDesCpmjAT	\N	252	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000A8C1FBAA5C3448C000E444BB0AE9F5BF	P14 - Cidade Nova II	\N	4	67	255.69999999999999	Ativo	\N	Referido como P05 	1997-05-22 00:00:00	Aço Schedulle 14in 8in	340	\N	24	44	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000009E01DC59293148C095BA6183A263F5BF	P? - Paar	\N	4	67	\N	Inativo	\N	\N	\N	\N	\N	\N	\N	258	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B95F6E35EA2B48C07DA5E6FB21ECF5BF	P3 - Marituba Centro	\N	4	105	220.81999999999999	Ativo	\N	\N	1999-01-01 00:00:00	Aço Carbono 14in 8in	\N	\N	\N	261	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E06E66AD8E2748C00042A5B1C0E6F5BF	P2 - Almir Gabriel	\N	4	105	273	Inativo	\N	Inativo temporáriamente por problemas na bomba; Em processo de renovação de outorga	2008-09-09 00:00:00	Aço Carbono 14in 8in	255	https://drive.google.com/open?id=1UkSXK2MiTpYXqVd1VtOYLoqncHfvhMK_	\N	71	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000010A299E0C12848C000835F4D12C1F5BF	P1 - Viver Melhor Marituba	\N	4	105	250	Ativo	\N	Em processo de renovação	2015-01-01 00:00:00	Aço Carbono 12in 8in	468.18000000000001	https://drive.google.com/open?id=1OzbVSpUzwylfmG0cP2BrVOb3BkpznRnp	18	73	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000098E2E3A6552848C0006054522720F6BF	P2 - Beija Flor	\N	4	105	270	Em construção	\N	\N	2014-06-01 00:00:00	Aço Carbono 12in 8in	\N	https://drive.google.com/open?id=18necM7aAg8AIUYkTmRzgHuhewkkgB_de	\N	147	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E8B3744CF07048C00094C4992C8CFBBF	P1 - RPM 01	\N	6	64	\N	Ativo	\N	Poço pertecente a SEDOP, necessita de mais informações	\N	\N	\N	\N	\N	3	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000706457EDE97048C0003CB37DF88CFBBF	P3 - RPM 03	\N	6	64	\N	Ativo	\N	Poço pertecente a SEDOP, necessita de mais informações	\N	\N	\N	\N	\N	51	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000404FE6F9352848C000882A22E120F6BF	P3 - Beija Flor	\N	4	105	270	Em construção	\N	\N	\N	Aço Carbono 14in 8in	110	https://drive.google.com/open?id=1V3u7oKw7zJK_8vSNCLyKbIc9vC6T_mMD	\N	72	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000C05B1F8A8D2A48C000CF4EAD8E09F6BF	P2 - Marituba COHAB	\N	4	105	271	Ativo	\N	Também chamado de Marituba I	2010-06-18 00:00:00	14in 8in	330	https://drive.google.com/open?id=1XP7vErNcqGvKmR_rfDphEVzyCWPaBPJN	\N	46	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F8C379123AF447C000764766F8DEF4BF	P2 - Milagre	\N	5	76	119.7	Ativo	\N	\N	1997-05-28 00:00:00	PVC Geomec. 8in	195	https://drive.google.com/open?id=1DtzjVno5n9wLjTxxqat_mm-p5cyIOPll	\N	77	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000581B2AC6F93548C000044EB6813BF6BF	P1 - Guanabara II	\N	4	67	257.37	Ativo	\N	Vazão atualizada em 08/05/2016; Falta relatório	2005-01-01 00:00:00	Aço Carbono 14in 8in	340	https://drive.google.com/open?id=11r_sybGpL_APAdL78JF6rC9_cS08ipm8	24	33	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000A7E3A1BC472A48C0E17659CF2FBCF5BF	P1 - Novo Horizonte	\N	4	105	\N	Ativo	\N	Vazão estimada	\N	\N	132	https://drive.google.com/open?id=1m42LFOKRPNCnP6cG1TnGVhBcu_GZ9fQX	\N	259	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000E546B298F92B48C05238C6F72BEAF5BF	P4 - Marituba Centro	49	4	105	223.62	Ativo	\N	\N	2015-06-20 00:00:00	Aço Carbono 12in 8in	170	\N	\N	260	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000003095EF609E2848C000146B3748C0F5BF	P2 - Viver Melhor Marituba	\N	4	105	250	Ativo	\N	Em processo de renovação	2015-01-01 00:00:00	12in 8in	187.16999999999999	https://drive.google.com/open?id=1OzbVSpUzwylfmG0cP2BrVOb3BkpznRnp	\N	74	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000038014CCDA9F547C000BE85D55572F4BF	P1 - Caiçara Ponteira	\N	5	76	18	Ativo	\N	Faz parte de um sistema de Ponteira denominada Sistema Caiçara; Em processo de renovação	\N	PVC Geomec. 12 in	12.630000000000001	https://drive.google.com/open?id=1hxFndkHqEqS2KfmbhfXfPVBivhlA2nNi	18	78	\N	\N	{}	{}	10	\N	\N	\N	\N
0101000020E6100000403BC4F856F947C000163028A3B7F4BF	P1 - Cristo	\N	5	76	115	Ativo	\N	\N	1998-11-09 00:00:00	PVC Geomec. STD 10in 8in	150	https://drive.google.com/open?id=1NIwmH-ZGIgTaNj3CDKY381Prf9MvX6os	\N	99	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000050DB319B9EF747C0003407619EA8F4BF	P1 - Coronel Leal	\N	5	76	118.40000000000001	Ativo	\N	Também ocorre como pertecente ao setor Comandante Assis	2009-01-15 00:00:00	Aço Carbono 12in 8in	190	https://drive.google.com/open?id=1VLe35gMO4WNvkOqpzawRH8cqoBjIrqOw	18	115	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000B87058610DF447C0006E9391806FF4BF	P1 - Imperador	\N	5	76	200	Ativo	\N	\N	2011-06-01 00:00:00	Aço Carbono 14in 8in	110	https://drive.google.com/open?id=16o8FWy0o74VEM75ceAgJkKIt04KY14eo	20	102	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000A8A563A8EC7048C0003E5F13CF8AFBBF	P2 - RPM 02	\N	6	64	\N	Ativo	\N	Poço pertecente a SEDOP, necessita de mais informações	\N	\N	\N	\N	\N	137	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000D8A04C5CB4F747C0000E925E0460F4BF	P1 - Estrela	\N	5	76	200	Em construção	\N		\N	Aço Carbono 12in 8in	\N	\N	\N	128	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F0285D4626F747C000E8589E3AB8F4BF	P1 - Usina	\N	5	76	270	Ativo	\N	\N	\N	Aço Carbono 14in 8in	135	https://drive.google.com/open?id=11HFIzAo7ej-1qk5JTumaH06ALv0JgjWQ	18	120	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000010DE73CD157048C00090B17A8A5BFBBF	P1 - Francilândia	\N	6	64	169.5	Ativo	\N	\N	2003-01-13 00:00:00	PVC Geomec. REF 12in 8in	104	https://drive.google.com/open?id=12qEcBqrvmFf44HCC0woqpdtstQ6mm6qt	\N	131	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000038641FD1B57148C000A7475AF7ADFBBF	P3 - Algodoal	\N	6	64	47	Ativo	\N	\N	2008-02-01 00:00:00	PVC Geomec. 8in	105	https://drive.google.com/open?id=1GPb06GVFsWqkxA-4YH2LZccW95jd6kMr	\N	130	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000D02F42F23A7048C00007B76BF85CFBBF	P3 - Francilândia	\N	6	64	152	Ativo	\N	Vazão outorgada é 84.24m³/h	2003-02-10 00:00:00	PVC Geomec. 12in 8in	105.3	https://drive.google.com/open?id=1v5KShtJsgWQa-Vi7hakGjWtIs3ZXQeXl	\N	133	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000104C8BB30F6348C000EF201DEE50FEBF	P3 - Moju Paraíso	\N	6	35	120	Ativo	\N	\N	2001-01-01 00:00:00	PVC Geomec. 8in 6in	70	https://drive.google.com/open?id=1zEY6kNq4yc5-XHtKxko5UoSn3sfi6E1Y	\N	155	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000090E50788ABF547C00060CB8B4970F4BF	P1 - Caiçara Ponteira 2	\N	5	76	20	Ativo	\N	Faz parte de um sistema de Ponteira denominada Sistema Caiçara 2, uma extensão do antigo sistema de ponteira	\N	PVC Geomec. 6in	7.5	https://drive.google.com/open?id=1hxFndkHqEqS2KfmbhfXfPVBivhlA2nNi	\N	103	\N	\N	{}	{}	9	\N	\N	\N	\N
0101000020E6100000E03A54C0EE7247C00043EA7DB0AAF8BF	P1 - Std Luzia Ponteiras	\N	5	122	3	Ativo	\N	Sistema de Ponteiras com 35 poços sendo a maioria com 6" de diametro. Não foi encontrada informações sobre a outorga desse sistema	\N	PVC Geomec. STD 8in 6in	3	https://drive.google.com/open?id=1TRvG_SMLE1la-GcMHPoV-wn2skJIoSEE	18	161	\N	\N	{}	{}	35	\N	\N	\N	\N
0101000020E6100000F8D2FFF8E66F48C000C2278E1D53FBBF	P4 - Francilândia	\N	6	64	152	Ativo	\N	Vazão outorgada de 99.53	2002-03-08 00:00:00	PVC Geomec REF 12in 8in	124	https://drive.google.com/open?id=1gnCFo9uWhs0yE09CEwoj-5UW9EX3Uwdr	\N	134	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000D8919FF7007048C0001281A34A58FBBF	P5 - Francilândia	30	6	64	154	Ativo	\N	\N	2003-04-03 00:00:00	PVC Geomec. REF 12in 8in	140	https://drive.google.com/open?id=16XOHyG8Ot8JMzKCSGm-Ktd4CxMOtVosd	\N	135	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000F853E2EE376348C000D02A93174AFEBF	P4 - Moju	\N	6	35	114.3	Ativo	\N	Para UNI-ILHAS a nomenclatura é P5	\N	Aço Carbono 10in 8in	120	https://drive.google.com/open?id=1dRTy9T-ZKQliQoAg5famRJJvzf5pnpFz	\N	156	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000684468B88C6248C0009AFE45004AFEBF	P? - Moju  Ponteira	7	6	35	20	Inativo	\N	Sistema em ponteira com 8 poços; Não possuem relatório, as informações encontram-se no memorial descritivo	\N	\N	\N	\N	\N	157	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000002808ADD3BDF747C0003ED64CF15AF4BF	P2 - Estrela	\N	5	76	200	Em construção	\N	\N	\N	Aço Carbono 14in	\N	\N	\N	129	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000909DD3992C7048C0000B2CE09B57FBBF	P2 - Francilância	\N	6	64	152	Ativo	\N	\N	2003-01-27 00:00:00	PVC Geomec. 12in 8in	105.3	https://drive.google.com/open?id=1VaBdMm_b2jYKx88Za_VN64T6EcYIISMo	\N	132	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000183DB763396348C0001B74A9144AFEBF	P2 - Moju Paraíso	\N	6	35	112	Inativo	\N	\N	1999-01-01 00:00:00	PVC Geomec. 8in (?)	\N	https://drive.google.com/open?id=1KgvkWEZl-AcunP_QH-hH3Kh4S9b1VGnS	\N	154	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000038C5C69647F747C00061A98E52BAF4BF	P2 - Usina	\N	5	76	250	Ativo	\N	\N	\N	Aço Carbono 14in 8in	\N	https://drive.google.com/open?id=11HFIzAo7ej-1qk5JTumaH06ALv0JgjWQ	\N	121	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000003813627A376348C000C8FF847D4AFEBF	P1 - Moju Paraíso	\N	6	35	110	Inativo	\N	\N	\N	PVC Geomec. 8in(?)	\N	https://drive.google.com/open?id=1svfY34cF1BZwfGQBGgSHP_VNNtOyozaM	\N	153	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000AA5EE02E4A7A48C05B555555559507C0	P1 - TAI 01	\N	6	58	112	Ativo	\N	Sem relatório; Necessita atualizar as informações; Em processo de mudança de razão social	\N	\N	\N	\N	\N	241	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000AA5EE02E4A7A48C09E829AE5639507C0	P2 - TAI 02	\N	6	58	114	Ativo	\N	Sem relatório; Necessita de mais informações; Em processo de mudança de razão social	\N	\N	\N	\N	\N	242	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E61000006D9B312E917A48C000DFBC9A789607C0	P4 - TAI 04	\N	6	58	108	Ativo	\N	Em processo de mudança de razão social	\N	\N	\N	\N	\N	243	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E610000081CC16D9945C4BC03A3577BC275B03C0	P1 - Praça Tiradentes	\N	7	52	107	Ativo	\N	Joga na rede. Abastece Aldeia/Fatima e Aparecida	1993-01-01 00:00:00	Aço Carbono 12in 8in	220	https://drive.google.com/open?id=1SBge0bpijMu4zm-3LFvCHU0mXM9SfZZs	\N	189	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000469A5271F65D4BC066E81288628303C0	P8 - Caranazal	\N	7	52	200	Ativo	\N	Abastece Irurá e Caranazal. Joga para elevatória para ir para Caranazal. Só o extravasor	2000-10-01 00:00:00	PVC Geomec 14in 8in	200	https://drive.google.com/open?id=1qzJM0NVfCqiMSIx39c4KPgoP69tbES72	20	190	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000D857019894C747C0004A77A7A02611C0	P4 - Dom Eliseu	\N	8	19	200.69999999999999	Ativo	\N	\N	\N	PVC Geomec STD 10in	48	https://drive.google.com/open?id=1ksd_V_yWmsmWjBsnposjTmAUgUVeoTCa	\N	151	\N	\N	\N	\N	1	\N	\N	\N	\N
0101000020E6100000885CFFFA5DF747C000E772E313A3F4BF	P1 - Cte. Assis Ponteira	\N	5	76	18	Ativo	\N	Esse poço faz parte de um sistema de ponteira denominado "Poço P Comandante Assis"	\N	PVC Geomec. 12in	22	https://drive.google.com/open?id=1xk4DrT3tXBnzdpPxdMnmjuU9vrxfMVoq	18	92	\N	\N	{}	{}	5	\N	\N	\N	\N
0101000020E6100000F8A17DD227F747C000D189A4E0B8F4BF	P1 - Usina Ponteira	\N	5	76	30	Ativo	\N	\N	\N	PVC Geomec. STD 8in	15	\N	\N	122	\N	\N	{}	{}	10	\N	\N	\N	\N
0101000020E6100000D286692772B147C001B4B1AC3A39F3BF	P1 - Nova Timboteua Ponteira	\N	5	85	\N	Ativo	\N	\N	\N	PVC Geomec STD 5in e 6in	\N	https://drive.google.com/file/d/1oP3jQTzlGUtwkG6EYeZI6eHVA2myc4Kp/view?usp=sharing	\N	325	\N	\N	{}	{}	15	\N	\N	\N	\N
0101000020E61000008FC28099374148C01B5704B59A4FE7BF	P1 - Soure Ponteira	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	424	\N	\N	{}	{}	13	\N	\N	\N	\N
0101000020E6100000CE228EF4434148C0122E2B86CD42E7BF	P1 - Soure Ponteira II	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	425	\N	\N	{}	{}	10	\N	\N	\N	\N
0101000020E6100000DB15F8F3954248C0F433EA0F52DFE6BF	P1 - Soure Ponteira III	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N	426	\N	\N	{}	{}	7	\N	\N	\N	\N
0101000020E61000007F94E56527074BC0BCD058F973E6FFBF	P1 - Vácuo I	29	7	36	12	Ativo	\N	Poço nº 1 representativo de um sistema de ponteira com 10 poços	\N	PVC Geomec. STD 12in	35	https://drive.google.com/open?id=1Z6DFIS8X1X11lb82yWSaGEiQjmaJ_eOr	\N	158	\N	\N	{}	{}	10	\N	\N	\N	\N
0101000020E61000004D22FEB007074BC09FC263F0CEE5FFBF	P1 - Vácuo III	29	7	36	20	Inativo	\N	Não é possível identificar se é o Vacuo 3 ou 4	\N	PVC Geomec. STD 12in	22	\N	\N	280	\N	\N	{}	{}	10	\N	\N	\N	\N
0101000020E610000084B64728A33D49C00A9C0F883DF8FABF	P1 - Breves	\N	6	7	150	Ativo	outorgado	Em processo de renovação de outorga	\N	PVC Geomec. STD 8in	304	https://drive.google.com/open?id=14E3XIUnJq1reTHolNVEVvuSbPd15GrRW	18	148	\N	\N	\N	\N	1	\N	\N	\N	\N
\.


--
-- TOC entry 4021 (class 0 OID 0)
-- Dependencies: 235
-- Name: poços_poço_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."poços_poço_id_seq"', 427, true);


-- Completed on 2020-11-09 14:45:58

--
-- PostgreSQL database dump complete
--

