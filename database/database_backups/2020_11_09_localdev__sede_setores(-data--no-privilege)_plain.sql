--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14
-- Dumped by pg_dump version 10.14

-- Started on 2020-11-09 14:57:13

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
-- TOC entry 4009 (class 0 OID 27653)
-- Dependencies: 280
-- Data for Name: sedes_setores; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sedes_setores (geom, nome, ender, vazao, un_id, municipio_id, obs, id, pop_atendida, vazao_demanda, num_lig, sistema_flux, files) FROM stdin;
0101000020E610000056774C0CF73E48C04E3F4D7B2953F7BF	2° Setor - Batista Campos	Av. Gentil Bittencourt com Rua Pres. Pernambuco	\N	1	55	\N	33	\N	\N	\N	\N	\N
0101000020E61000003CE0F4E1593A48C0D0AFA88377D7F6BF	5° Setor - Marco	Trav. Perebebuí c/ Av. Rômulo Maiorana	\N	2	55	\N	36	\N	\N	\N	\N	\N
0101000020E6100000E2424B3DF13D48C08022A183EA2FF7BF	3° Setor - Nazaré	Trav. Dom Romualdo de Seixas c/ Rua João Balbi	\N	1	55	\N	34	\N	\N	\N	\N	\N
0101000020E61000006A0D3DF50E3C48C085741C9CD264F7BF	4° Setor - Guamá	Av. José Bonifácio c/ Rua Paes de Souza	\N	1	55	\N	35	\N	\N	\N	\N	\N
0101000020E610000068501D064E3948C00082357035BAF5BF	Benjamin Sodré	Avenida das Andorinhas, S/N	492	3	55	\N	2	\N	\N	\N	\N	\N
0101000020E61000001022F1CFA53848C00028042DB502F6BF	Benguí	Passagem Santo Antônio, S/N entre Rodovia Augusto Montenegro e Passagem Magalhães Barata	598	3	55	\N	1	\N	\N	\N	\N	\N
0101000020E6100000C0C004E52B3848C000CF10A23DA5F5BF	Ariri Bolonha	Av. Central, S/N - Conjunto Residencial Ariri Bolonha	120	3	55	\N	3	\N	\N	\N	\N	\N
0101000020E61000000054F0F5643A48C000E501062B19F6BF	Catalina	Av. Major Aviador Seda, S/N entre Rua Cel. Tibério e Travessa 10 - Conjunto Residencial Catalina nº 383	170	3	55	\N	4	\N	\N	\N	\N	\N
0101000020E610000098C88479BE3848C0004F455CC676F5BF	IPASEP	Rua SN05, S/N	542	3	55	\N	7	\N	\N	\N	\N	\N
0101000020E610000077155856913D48C05187175A8F71F6BF	10º Setor - CDP	WE3, nº572, CDP, Belém - PA	\N	2	55	\N	30	\N	\N	\N	\N	\N
0101000020E6100000AB579B67922748C0101C727846E6F5BF	Almir Gabriel		\N	4	105	\N	31	\N	\N	20901	\N	\N
0101000020E61000008D9474A9743248C0FE2648E76B92F6BF	Verdejante	Q. Três entre Tv. Terceira Conjunto Verdejante	97	4	55	\N	12	3189	2254	859	\N	\N
0101000020E61000007E48266AB23F48C0FC7A6F13003AF7BF	1° Setor - Comércio	Rua Ó de Almeida c/ Trav. 1° de março	\N	1	55	\N	32	\N	\N	\N	\N	\N
0101000020E61000001F5E7C45A53D48C0FC32543E6A7EF7BF	8° Setor - Jurunas	Tv. Apinagés entre Pass. Aluisio Chaves e Pass. Santo Antônio	\N	1	55	\N	39	\N	\N	\N	\N	\N
0101000020E61000004FB3A317FC3848C06A8010E44F4EF7BF	7° Setor - Perimetral	Av. Perimetral	\N	1	55	\N	38	\N	\N	\N	\N	\N
0101000020E61000002F366A56AC3148C0C5BA381D89C4F5BF	Conjunto Maguariaçu	\N	\N	4	67	\N	48	\N	\N	\N	\N	\N
0101000020E6100000DE2C6E34283348C04F099425F23EF5BF	Uirapurú	Travessa WE 2 do Conjunto Uirapuru , esquina com a SN 4, bairro Icuí Guajará	122	4	67	\N	41	3911	1098	1038	\N	\N
0101000020E6100000B8277743492A48C0879DE9A869BDF5BF	Novo Horizonte	\N	\N	4	105	\N	52	\N	\N	\N	\N	\N
0101000020E6100000670FF351B52848C05F9C8A5BA4C3F5BF	Viver Melhor Marituba	\N	\N	4	105	\N	53	\N	\N	\N	\N	\N
0101000020E6100000CD06A620DC3B48C06AF348977186F2BF	Padre Manoel Raiol	\N	\N	9	55	\N	54	\N	\N	\N	\N	\N
0101000020E6100000FE6DDCA3AD3848C02A8746132FFFF1BF	Murubira	\N	\N	9	55	\N	55	\N	\N	\N	\N	\N
0101000020E6100000DB8BDF28CE3348C0B78768632D95F1BF	Carananduba	\N	\N	9	55	\N	56	\N	\N	\N	\N	\N
0101000020E6100000273B9037F72A48C00A1F4836740CF1BF	Baía do Sol	\N	\N	9	55	\N	57	\N	\N	\N	\N	\N
0101000020E6100000DA3DB4A5113148C01795AD798C63F5BF	PAAR	Avenida Rio Amazonas entre Av. Manaus e Rua Dr. José, bairro PAAR	623	4	67	\N	42	38665	13835	7012	\N	\N
0101000020E61000000B55D073253A48C06C5C5808F06DF6BF	14° Setor - Mendara	Rua da Mata, entre Av. B e Rua L	\N	2	55	\N	60	\N	\N	\N	\N	\N
0101000020E610000038E268D8B93A48C0006534ABA4A1F4BF	Morada de Deus	Parque Zorgbh - Rua Elcione Barbalho entre a Estrada Velha do Outeiro e a Rua Amazonex	\N	3	55	Configuração do SAA Morada de Deus: Poço + REL + rede de distribuição	16	\N	\N	\N	\N	\N
0101000020E610000040D485047E3B48C000E82BA3EC98F5BF	Cord. de Farias	Alameda 06, S/N - Conjunto Cordeiro de Farias	563	3	55	\N	5	\N	\N	\N	\N	\N
0101000020E610000088B829B3FB3648C000A1FC2813ECF5BF	Coqueiro	Passagem Veteranos, S/N entre Rua do Fio e Rua Benjamin	409	3	55	\N	6	\N	\N	\N	\N	\N
0101000020E6100000B08D88BA733A48C00089C7579864F5BF	Canarinho	Rua Atenas esquina com a Travessa Marciano - Conjunto Residencial Canarinho	110	3	55	\N	9	\N	\N	\N	\N	\N
0101000020E610000030FC0E48393748C00025748A9A27F5BF	Tenoné	Rua das Orquídeas, S/N esquina com a Rua Valparaíso	175	3	55	\N	10	\N	\N	\N	\N	\N
0101000020E6100000C0D261FA283A48C000F19BC44BD8F4BF	Águas Negras	\N	\N	3	55	\N	13	\N	\N	\N	\N	\N
0101000020E6100000C82B0ACDCB3C48C000D4F2F82D7AF4BF	Brasília	\N	\N	3	55	\N	14	\N	\N	\N	\N	\N
0101000020E610000008C38A2AAE3B48C000226C293431F4BF	S. J. do Outeir	Rua Manoel Barata, S/N esquina com a Tv. Belém	\N	3	55	\N	15	\N	\N	\N	\N	\N
0101000020E610000010B9AAF6ED3B48C0003EED48D9C0F4BF	COHAB	Conjunto COHAB, Rua N4, S/N	\N	3	55	\N	17	\N	\N	\N	\N	\N
0101000020E6100000806D1A27BA3948C000042E0EB515F4BF	Água Boa	Travessa Flamengo, S/N entre Rua Jader Barbalho e Rua Heitor Costa	\N	3	55	\N	18	\N	\N	\N	\N	\N
0101000020E6100000408C48EE123D48C0005449BDD7CBF4BF	São Roque	Tv. São Roque, S/N entre a Rua Oito de Setembro e a Rua Dois de Dezembro	\N	3	55	Configuração do SAA São Roque: Poço + rede de distribuição,	19	\N	\N	\N	\N	\N
0101000020E6100000A8BBCBA8263D48C000D127A3DEDCF4BF	Souza Franco	Tv. Souza Franco, S/N entre a Rua Dois de Dezembro (esquina) e a Rua Santa Izabel	\N	3	55	Configuração do SAA Souza Franco: 02 Poços + RAP + rede de distribuição.	20	\N	\N	\N	\N	\N
0101000020E6100000A8362376723A48C000B34A0CA902F5BF	Eduardo Angelim	Rodovia Augusto Montenegro, S/N esquina com a Rua 17 de Abril	\N	3	55	Configuração do SAA Eduardo Angelim: Poço + REL + rede de distribuição.	21	\N	\N	\N	\N	\N
0101000020E610000028B96491703C48C0007258ACA4FFF4BF	Paracurí	Rua L1, S/N entre a Tv. 6 e a Tv.7	\N	3	55	Configuração do SAA Paracuri: Poço + REL + rede de distribuição	22	\N	\N	\N	\N	\N
0101000020E6100000C02AF3F62A3A48C00090C505B93EF5BF	Tocantins	Rua Golveia Silva s/n, esquina com a Rua dos Líderes	\N	3	55	Configuração do SAA Tocantins: Poço + REL + rede de distribuição	23	\N	\N	\N	\N	\N
0101000020E610000090DA99DCC44748C000EDBDFAA338F4BF	Cotijuba	Av. Jarbas Passarinho, na Ilha de Cotijuba - Pará	\N	3	55	\N	24	\N	\N	\N	\N	\N
0101000020E6100000100FFBAC4E3C48C000D6F2CAF55EF5BF	Mata Fome	Rua Almirante Tamandaré, S/N entre Rua Uberaba e Rodovia do Tapanã	\N	3	55	Foram encontrados dois relatórios técnicos (um de 2006, outro de 2010). Configuração do SAA Mata Fome: Poço + REL (inativo) + rede de distribuição	25	\N	\N	\N	\N	\N
0101000020E610000040832DD9653B48C000F9E82D4E8FF5BF	Raim. Jinking	Rua Juscelino Kubitscheck, S/N entre as Ruas José Alves e Jocelim Brasil, no Conj. Raimundo Jinkings	\N	3	55	Setor inoperante em função do poço desativado	26	\N	\N	\N	\N	\N
0101000020E6100000C49B58FDF83B48C0D2F2535C49D5F6BF	9° Setor - Pedreira	Trav. Angustura c/ Av. Marquês de Herval	\N	1	55	\N	40	\N	\N	\N	\N	\N
0101000020E6100000C0085FB8393548C0007B66C4C986F5BF	Sabiá	Av. Central, Quadra 12, bairro 40 Horas	384	4	67	\N	43	7082	5116	1866	\N	\N
0101000020E610000004931B730D3C48C0F580BC70E734F7BF	6° Setor - São Brás	Av. Magalhães Barata c/ Av. José Bonifácio	\N	1	55	\N	37	\N	\N	\N	\N	\N
0101000020E61000009E166DA95D3848C09902FC43FF61F6BF	12° Setor - Marambaia	Rua Maravalho Belo	\N	2	55	\N	58	\N	\N	\N	\N	\N
0101000020E61000000972B0E1273848C0BF74691A298AF6BF	13° Setor  - Costa e Silva	Av. Almirante Barroso com Passagem São Jorge, Conj. Costa e Silva	\N	2	55	\N	59	\N	\N	\N	\N	\N
0101000020E6100000E0D4E884393C48C00088D998C5E6F5BF	Pratinha I	Passagem Profeta Jeremias, S/N entre Pass. Novo Horizonte e Pass. Samaritana	\N	3	55	Configuração do SAA Pratinha I: Poço + REL + rede de distribuição	27	\N	\N	\N	\N	\N
0101000020E6100000A81F7C6A2D3C48C000154E4EC4B5F5BF	Pratinha II	Rua Bandeirante, S/N entre a Trav. Liberdade e Trav. Fluminense	\N	3	55	Configuração do SAA Pratinha II: Poço + rede de distribuição,	28	\N	\N	\N	\N	\N
0101000020E6100000301890AE733B48C0006938466130F5BF	Viver Primaver	Rua do Ranário, S/N	\N	3	55	\N	29	\N	\N	\N	\N	\N
0101000020E6100000F0ACBB44F83748C000737CE47109F6BF	Panorama XXI	Rua Principal do Conjunto Panorama XXI, S/N esquina com a Rua da Quadra 13	225	3	55	\N	8	\N	\N	\N	\N	\N
0101000020E610000028CB47BA753D48C0007DBC78BB05F6BF	Pratinha	Rodovia Arthur Bernardes, S/N	109	3	55	\N	11	7437	3216	3039	\N	\N
0101000020E6100000D3764A17763648C0EEA9326BAF24F6BF	Jaderlândia	Rua Jarbas Passarinho entre Rua Principal e Rua São Francisco	757	4	67	\N	46	\N	\N	6010	\N	\N
0101000020E61000005893617ACF2F48C02F1045BC12A7F5BF	Ananindeua Centro	Rua Júlia Medeiros na Av. Cláudio Sanderes	263	4	67	\N	44	13494	4471	2510	\N	\N
0101000020E61000001D7DF066EC2B48C049AD447817EAF5BF	Marituba Centro	Travessa Padre Marques Mesquita entre Raimundo Santana e Rua 21 de Abril, bairro Centro.	331	4	105	\N	49	14585	7944	3860	\N	\N
0101000020E610000037C9BA945F2848C0FA4BE7538224F6BF	Beija Flor	Conjunto Beija-Flor,  Avenida Central com a Trav. WE 12, bairro Nova Marituba.	124	4	105	\N	51	6357	2604	1707	\N	\N
0101000020E61000003557D5D18B2A48C0ADA10FF0C204F6BF	Marituba COHAB	Conjunto Marituba I, Avenida Principal  na Travessa SN 06, bairro Cecon.	192	4	105	\N	50	2694	1080	1557	\N	\N
0101000020E61000009FDAF4B922F747C0B96DEAD8F3B7F4BF	Usina	Travessa 28 de janeiro, s/n	\N	5	76	\N	61	\N	\N	\N	\N	\N
0101000020E6100000F9725F355AF747C0711C97FEB3A2F4BF	Comandante Assis	Rua Comandante Assis	\N	5	76	\N	62	\N	\N	\N	\N	\N
0101000020E610000095A5DAD80BF447C03605F2B2506FF4BF	Imperador	Av. Romulo de Seixas	\N	5	76	\N	63	\N	\N	\N	\N	\N
0101000020E6100000D03823A49DF847C0B0B0B722FD04F5BF	COHAB	Av. Brasil	\N	5	76	\N	64	\N	\N	\N	\N	\N
0101000020E610000057BAAD6E38F447C0313721BA31E1F4BF	Milagre	Avenida José Bertino da Silva	\N	5	76	\N	65	\N	\N	\N	\N	\N
0101000020E6100000C769096857F947C003418E99C4B7F4BF	Cristo Redentor	Rua Manoel Porpino 	\N	5	76	\N	66	\N	\N	\N	\N	\N
0101000020E6100000A2C0A1188FF247C043CED7084DDCF4BF	Jaderlandia	Rua Francisco Pereira da Silva	\N	5	76	\N	67	\N	\N	\N	\N	\N
0101000020E6100000CF9E9B8BACFE47C0EE0E3AB19AD4F4BF	Apeú	Av. Holanda Pessoa	\N	5	76	\N	68	\N	\N	\N	\N	\N
0101000020E6100000982D5E9EED7048C021065424118BFBBF	RPM	\N	\N	6	64	\N	70	\N	\N	\N	\N	\N
0101000020E61000006816A1B383B147C0FF1A94416F4CF3BF	Nova Timboteua	\N	\N	5	85	\N	71	\N	\N	\N	\N	\N
0101000020E61000003FA4BA869C5D4BC0F89C4ADE8E8D03C0	Irurá	\N	\N	\N	52	\N	73	\N	\N	\N	\N	\N
0101000020E6100000ECF95CD0F93548C074DCDD8E403BF6BF	Guanabara II	\N	317	4	67	\N	47	13335	7608	8922	\N	\N
0101000020E61000009EE02229613448C09F72FE3CBAEAF5BF	Cidade Nova (R1)	Travessa WE 13, 332, Cidade Nova II, esquina com a Rua da Providência, bairro Coqueiro	768	4	67	\N	45	12966	4560	3045	\N	\N
0101000020E61000007DAF637CBE3348C00805FB3EF0B5F5BF	Cidade Nova IV (R2)	\N	\N	4	67	\N	74	\N	\N	\N	\N	\N
0101000020E61000007DAF637CBE3348C00805FB3EF0B5F5BF	Cidade Nova IV (R2)	\N	\N	\N	\N	\N	75	\N	\N	\N	\N	\N
0101000020E6100000D6B337A1F73248C087843C6D37C4F5BF	Cidade Nova V (R3)	\N	\N	\N	\N	\N	76	\N	\N	\N	\N	\N
0101000020E6100000B3C5BD9CBB3148C000B1781E1AA9F5BF	Guajará I (R5)	\N	\N	\N	\N	\N	77	\N	\N	\N	\N	\N
0101000020E6100000A4BA1B750D3348C0E221FE159699F5BF	Cidade Nova VI (R4)	\N	\N	\N	\N	\N	78	\N	\N	\N	\N	\N
0101000020E610000089C6F28BB23448C050CA45D93AADF5BF	Cidade Nova VIII (R6)	\N	\N	\N	\N	\N	79	\N	\N	\N	\N	\N
0101000020E6100000C34CDE61C85147C06AB924E9EA53F0BF	Augusto Corrêa	\N	\N	5	2	\N	72	\N	\N	\N	\N	\N
\.


--
-- TOC entry 4017 (class 0 OID 0)
-- Dependencies: 246
-- Name: setores_sedes_setor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.setores_sedes_setor_id_seq', 79, true);


-- Completed on 2020-11-09 14:57:13

--
-- PostgreSQL database dump complete
--

