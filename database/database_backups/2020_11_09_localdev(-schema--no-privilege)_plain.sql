--
-- PostgreSQL database dump
--

-- Dumped from database version 10.14
-- Dumped by pg_dump version 10.14

-- Started on 2020-11-09 14:28:20

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
-- TOC entry 318 (class 1255 OID 24576)
-- Name: updatelatlong(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.updatelatlong() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
   NEW.latitude = (regexp_split_to_array(ST_AsLatLonText(ST_AsText(NEW.geom), 'D°M''S.SS''''C'), E'\\s+'))[1];
   NEW.longitude = (regexp_split_to_array(ST_AsLatLonText(ST_AsText(NEW.geom), 'D°M''S.SS''''C'), E'\\s+'))[2];
   RETURN NEW;
END;
$$;


SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 202 (class 1259 OID 24585)
-- Name: autos_infraçao; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."autos_infraçao" (
    processo_id bigint,
    "notificaçao_id" bigint,
    num_infra character varying(20) NOT NULL,
    data_emissao timestamp without time zone NOT NULL,
    data_defesa timestamp without time zone,
    setor_respon character varying(30),
    oficio_id bigint,
    licen_id bigint,
    orgao_id bigint,
    setor_id bigint,
    municipio_id bigint,
    un_id bigint,
    autoifr_id bigint NOT NULL,
    obj_autuado character(30),
    prazo_defesa date,
    "situaçao_auto" character varying(20)
);


--
-- TOC entry 203 (class 1259 OID 24588)
-- Name: autos_infraçao_autoifr_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."autos_infraçao_autoifr_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4315 (class 0 OID 0)
-- Dependencies: 203
-- Name: autos_infraçao_autoifr_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."autos_infraçao_autoifr_id_seq" OWNED BY public."autos_infraçao".autoifr_id;


--
-- TOC entry 273 (class 1259 OID 27610)
-- Name: cap_superf; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cap_superf (
    geom public.geometry(Point,4326),
    nome text NOT NULL,
    setor_id integer,
    un_id integer,
    municipio_id integer,
    bomba text,
    situacao character varying(15),
    vaz_max double precision,
    obs text,
    horas_outorg integer,
    corpo_hidrico text,
    id bigint NOT NULL,
    last_modif timestamp with time zone,
    usr_modif uuid,
    vaz_outorg double precision,
    data_op timestamp with time zone,
    files jsonb,
    licen_situ text
);


--
-- TOC entry 204 (class 1259 OID 24590)
-- Name: cap_super_super_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cap_super_super_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4316 (class 0 OID 0)
-- Dependencies: 204
-- Name: cap_super_super_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cap_super_super_id_seq OWNED BY public.cap_superf.id;



--
-- TOC entry 206 (class 1259 OID 24594)
-- Name: enum_agua_tipo; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.enum_agua_tipo (
    nome text NOT NULL,
    label text NOT NULL
);


--
-- TOC entry 207 (class 1259 OID 24600)
-- Name: enum_features_types; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.enum_features_types (
    nome text NOT NULL,
    label text
);


--
-- TOC entry 208 (class 1259 OID 24606)
-- Name: enum_licen_situ; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.enum_licen_situ (
    nome text NOT NULL,
    label text
);


--
-- TOC entry 210 (class 1259 OID 24618)
-- Name: enum_situacoes_feat; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.enum_situacoes_feat (
    name text NOT NULL,
    label text NOT NULL
);



--
-- TOC entry 214 (class 1259 OID 24636)
-- Name: licenças; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."licenças" (
    num_licen character varying(15) NOT NULL,
    data_entrada timestamp without time zone,
    validade timestamp without time zone NOT NULL,
    tipo character varying(20) NOT NULL,
    atividade character varying(100) NOT NULL,
    licen_arq character varying(500),
    orgao_id bigint NOT NULL,
    licen_id bigint NOT NULL
);


--
-- TOC entry 215 (class 1259 OID 24642)
-- Name: licenças_licen_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."licenças_licen_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4320 (class 0 OID 0)
-- Dependencies: 215
-- Name: licenças_licen_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."licenças_licen_id_seq" OWNED BY public."licenças".licen_id;


--
-- TOC entry 216 (class 1259 OID 24644)
-- Name: manutençao_poço; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."manutençao_poço" (
    manuten_id bigint NOT NULL,
    "poço_id" bigint,
    data_previsao date,
    data_realizada timestamp without time zone,
    "serviço_realiz" character varying(200) NOT NULL,
    obs text,
    link text,
    executor character varying(60),
    "orçamento" money
);


--
-- TOC entry 217 (class 1259 OID 24650)
-- Name: manutençao_poço_manuten_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."manutençao_poço_manuten_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4321 (class 0 OID 0)
-- Dependencies: 217
-- Name: manutençao_poço_manuten_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."manutençao_poço_manuten_id_seq" OWNED BY public."manutençao_poço".manuten_id;


--
-- TOC entry 276 (class 1259 OID 27628)
-- Name: municipios; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.municipios (
    geom public.geometry(MultiPolygon,4326),
    nome character varying(70),
    id bigint NOT NULL
);


--
-- TOC entry 218 (class 1259 OID 24652)
-- Name: municipios_municipio_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.municipios_municipio_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4322 (class 0 OID 0)
-- Dependencies: 218
-- Name: municipios_municipio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.municipios_municipio_id_seq OWNED BY public.municipios.id;


--
-- TOC entry 219 (class 1259 OID 24654)
-- Name: n_estat; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.n_estat (
    id bigint NOT NULL,
    poco_id bigint NOT NULL,
    usr_modif uuid,
    created_at timestamp with time zone,
    ne double precision NOT NULL,
    data_medida timestamp with time zone NOT NULL,
    fonte_medida text,
    obs text
);


--
-- TOC entry 220 (class 1259 OID 24660)
-- Name: n_estat_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.n_estat_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4323 (class 0 OID 0)
-- Dependencies: 220
-- Name: n_estat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.n_estat_id_seq OWNED BY public.n_estat.id;


--
-- TOC entry 223 (class 1259 OID 24670)
-- Name: notificaçoes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."notificaçoes" (
    num_notif character varying(20) NOT NULL,
    tipo_nota character varying(20),
    data_recebim timestamp without time zone,
    data_resp timestamp without time zone,
    via_receb character varying,
    condns text,
    "situaçao_notif" bigint NOT NULL,
    oficio_id bigint,
    obs_notif text,
    licen_id bigint,
    orgao_id bigint NOT NULL,
    setor_id bigint,
    un_id bigint,
    municipio_id bigint,
    notif_id bigint NOT NULL,
    data_emissao timestamp without time zone,
    prazo timestamp without time zone,
    processo_id bigint
);


--
-- TOC entry 224 (class 1259 OID 24676)
-- Name: notificaçoes_notif_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."notificaçoes_notif_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4325 (class 0 OID 0)
-- Dependencies: 224
-- Name: notificaçoes_notif_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."notificaçoes_notif_id_seq" OWNED BY public."notificaçoes".notif_id;


--
-- TOC entry 225 (class 1259 OID 24678)
-- Name: oficios; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.oficios (
    num_oficio character varying(15) NOT NULL,
    oficio_id bigint NOT NULL,
    link_oficio character varying(700)
);


--
-- TOC entry 226 (class 1259 OID 24684)
-- Name: oficios_oficio_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.oficios_oficio_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4326 (class 0 OID 0)
-- Dependencies: 226
-- Name: oficios_oficio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.oficios_oficio_id_seq OWNED BY public.oficios.oficio_id;


--
-- TOC entry 227 (class 1259 OID 24686)
-- Name: orgaos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orgaos (
    nome character varying(20),
    orgao_id integer NOT NULL
);


--
-- TOC entry 228 (class 1259 OID 24689)
-- Name: orgaos_orgao_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.orgaos_orgao_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 233 (class 1259 OID 24701)
-- Name: outorgas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.outorgas (
    data_entrada timestamp without time zone,
    validade timestamp without time zone,
    tipo character varying(30),
    responsavel character varying(50),
    obsoutorga character varying(255),
    num_outorga character varying(20),
    outorga_arq character varying(255),
    tipo_captacao character varying(50),
    municipio_id integer,
    un_id integer,
    orgao_id bigint,
    licen_id bigint,
    outorga_id bigint NOT NULL,
    obj_outor character varying(100)
);


--
-- TOC entry 234 (class 1259 OID 24707)
-- Name: outorgas_outorga_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.outorgas_outorga_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4330 (class 0 OID 0)
-- Dependencies: 234
-- Name: outorgas_outorga_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.outorgas_outorga_id_seq OWNED BY public.outorgas.outorga_id;


--
-- TOC entry 277 (class 1259 OID 27634)
-- Name: pocos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.pocos (
    geom public.geometry(Point,4326),
    nome character varying(30) NOT NULL,
    setor_id integer,
    un_id integer,
    municipio_id integer,
    profun double precision,
    situacao character varying(15),
    licen_situ text,
    obs character varying(255),
    data_perf timestamp without time zone,
    revest character varying(25),
    vaz_max double precision,
    relatorio character varying(255),
    horas_outorg integer,
    id bigint NOT NULL,
    num_patrimonio integer,
    vaz_outorg double precision,
    perfil_const jsonb,
    perfil_geol jsonb,
    ponteira integer DEFAULT 1,
    usr_modif uuid,
    data_entrega timestamp with time zone,
    files jsonb,
    last_modif timestamp with time zone
);


--
-- TOC entry 235 (class 1259 OID 24709)
-- Name: poços_poço_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."poços_poço_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4331 (class 0 OID 0)
-- Dependencies: 235
-- Name: poços_poço_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."poços_poço_id_seq" OWNED BY public.pocos.id;


--
-- TOC entry 240 (class 1259 OID 24721)
-- Name: processos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.processos (
    data_entrada timestamp without time zone,
    num_processo character varying(30) NOT NULL,
    municipio_id integer,
    un_id integer,
    "situaçao" character varying(200),
    orgao_id bigint,
    outorga_id bigint,
    licen_id bigint,
    processo_id bigint NOT NULL,
    obj_processo character varying(50),
    "descriçao" character varying(150),
    tipologia character varying(50),
    obs_processo character varying(600)
);


--
-- TOC entry 241 (class 1259 OID 24727)
-- Name: processos_processo_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.processos_processo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4334 (class 0 OID 0)
-- Dependencies: 241
-- Name: processos_processo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.processos_processo_id_seq OWNED BY public.processos.processo_id;


--
-- TOC entry 278 (class 1259 OID 27641)
-- Name: regionais; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.regionais (
    geom public.geometry(MultiPolygon,4326),
    nome character varying(30),
    region_id integer NOT NULL
);


--
-- TOC entry 242 (class 1259 OID 24729)
-- Name: regionais_region_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.regionais_region_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4335 (class 0 OID 0)
-- Dependencies: 242
-- Name: regionais_region_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.regionais_region_id_seq OWNED BY public.regionais.region_id;


--
-- TOC entry 279 (class 1259 OID 27647)
-- Name: reservatorios; Type: TABLE; Schema: public; Owner: -
--

--
-- TOC entry 244 (class 1259 OID 24733)
-- Name: roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    nome text NOT NULL,
    auth_tables jsonb
);


--
-- TOC entry 245 (class 1259 OID 24739)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4337 (class 0 OID 0)
-- Dependencies: 245
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- TOC entry 280 (class 1259 OID 27653)
-- Name: sedes_setores; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sedes_setores (
    geom public.geometry(Point,4326),
    nome character varying(50) NOT NULL,
    ender text,
    vazao double precision,
    un_id integer,
    municipio_id integer,
    obs text,
    id bigint NOT NULL,
    pop_atendida bigint,
    vazao_demanda double precision,
    num_lig integer,
    sistema_flux integer,
    files jsonb
);


--
-- TOC entry 4338 (class 0 OID 0)
-- Dependencies: 280
-- Name: COLUMN sedes_setores.num_lig; Type: COMMENT; Schema: public; Owner: -
--

COMMENT ON COLUMN public.sedes_setores.num_lig IS 'Numero de ligações';


--
-- TOC entry 246 (class 1259 OID 24741)
-- Name: setores_sedes_setor_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.setores_sedes_setor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4339 (class 0 OID 0)
-- Dependencies: 246
-- Name: setores_sedes_setor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.setores_sedes_setor_id_seq OWNED BY public.sedes_setores.id;


--
-- TOC entry 249 (class 1259 OID 24751)
-- Name: situacao_features; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.situacao_features (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    situacao text NOT NULL,
    feature_id bigint NOT NULL,
    features_type text NOT NULL,
    last_modif timestamp with time zone,
    usr_modif uuid,
    obs text
);


--
-- TOC entry 250 (class 1259 OID 24758)
-- Name: situacao_features_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.situacao_features_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4341 (class 0 OID 0)
-- Dependencies: 250
-- Name: situacao_features_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.situacao_features_id_seq OWNED BY public.situacao_features.id;


--
-- TOC entry 251 (class 1259 OID 24760)
-- Name: situaçao_notif; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."situaçao_notif" (
    "situaçao" character varying(20) NOT NULL,
    situnot_id integer NOT NULL
);


--
-- TOC entry 252 (class 1259 OID 24763)
-- Name: situaçao_notif_situnot_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."situaçao_notif_situnot_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4342 (class 0 OID 0)
-- Dependencies: 252
-- Name: situaçao_notif_situnot_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."situaçao_notif_situnot_id_seq" OWNED BY public."situaçao_notif".situnot_id;


--
-- TOC entry 281 (class 1259 OID 27659)
-- Name: uns; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.uns (
    geom public.geometry(MultiPolygon,4326),
    nome character varying(30),
    id bigint NOT NULL
);


--
-- TOC entry 253 (class 1259 OID 24765)
-- Name: uns_un_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.uns_un_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4343 (class 0 OID 0)
-- Dependencies: 253
-- Name: uns_un_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.uns_un_id_seq OWNED BY public.uns.id;


--
-- TOC entry 254 (class 1259 OID 24767)
-- Name: userOnRoles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."userOnRoles" (
    id bigint NOT NULL,
    user_id uuid NOT NULL,
    role_id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


--
-- TOC entry 255 (class 1259 OID 24771)
-- Name: userOnRoles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."userOnRoles_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4344 (class 0 OID 0)
-- Dependencies: 255
-- Name: userOnRoles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."userOnRoles_id_seq" OWNED BY public."userOnRoles".id;


--
-- TOC entry 282 (class 1259 OID 28324)
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_by uuid,
    created_in timestamp with time zone DEFAULT now() NOT NULL,
    nome text NOT NULL,
    drt text,
    login_name text NOT NULL,
    psw text NOT NULL,
    psw_changed_at timestamp with time zone,
    api_key text,
    last_acess timestamp with time zone,
    scope jsonb,
    email text NOT NULL,
    reset_token text,
    reset_expires timestamp with time zone,
    refresh_token text
);


--
-- TOC entry 260 (class 1259 OID 24794)
-- Name: vaz_poco; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.vaz_poco (
    poco_id bigint NOT NULL,
    vazao double precision NOT NULL,
    nd double precision,
    id bigint NOT NULL,
    fonte_medida character varying(30),
    pressao double precision,
    data_medida timestamp with time zone NOT NULL,
    obs text,
    usr_modif uuid,
    created_at timestamp with time zone
);



--
-- TOC entry 263 (class 1259 OID 24808)
-- Name: vaz_setor_s; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.vaz_setor_s (
    id bigint NOT NULL,
    setor_id integer NOT NULL,
    usr_modif uuid,
    tipo integer NOT NULL,
    vazao double precision NOT NULL,
    pressao double precision,
    data_medida timestamp with time zone NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    fonte_medida text,
    obs text
);


--
-- TOC entry 264 (class 1259 OID 24815)
-- Name: vaz_setor_s_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.vaz_setor_s_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4348 (class 0 OID 0)
-- Dependencies: 264
-- Name: vaz_setor_s_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.vaz_setor_s_id_seq OWNED BY public.vaz_setor_s.id;


--
-- TOC entry 265 (class 1259 OID 24817)
-- Name: vaz_superf; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.vaz_superf (
    id bigint NOT NULL,
    superf_id integer NOT NULL,
    usr_modif uuid,
    created_at timestamp with time zone,
    vazao double precision NOT NULL,
    pressao double precision,
    data_medida timestamp with time zone NOT NULL,
    fonte_medida text NOT NULL,
    obs text NOT NULL
);


--
-- TOC entry 266 (class 1259 OID 24823)
-- Name: vaz_superf_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.vaz_superf_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4349 (class 0 OID 0)
-- Dependencies: 266
-- Name: vaz_superf_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.vaz_superf_id_seq OWNED BY public.vaz_superf.id;


--
-- TOC entry 267 (class 1259 OID 24825)
-- Name: vazoes_poços_vazao_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."vazoes_poços_vazao_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 4350 (class 0 OID 0)
-- Dependencies: 267
-- Name: vazoes_poços_vazao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."vazoes_poços_vazao_id_seq" OWNED BY public.vaz_poco.id;


--
-- TOC entry 3920 (class 2604 OID 28333)
-- Name: autos_infraçao autoifr_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."autos_infraçao" ALTER COLUMN autoifr_id SET DEFAULT nextval('public."autos_infraçao_autoifr_id_seq"'::regclass);


--
-- TOC entry 3953 (class 2604 OID 28334)
-- Name: cap_superf id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cap_superf ALTER COLUMN id SET DEFAULT nextval('public.cap_super_super_id_seq'::regclass);


--
-- TOC entry 3924 (class 2604 OID 28338)
-- Name: licenças licen_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."licenças" ALTER COLUMN licen_id SET DEFAULT nextval('public."licenças_licen_id_seq"'::regclass);


--
-- TOC entry 3956 (class 2604 OID 28340)
-- Name: municipios id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.municipios ALTER COLUMN id SET DEFAULT nextval('public.municipios_municipio_id_seq'::regclass);


--
-- TOC entry 3926 (class 2604 OID 28341)
-- Name: n_estat id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.n_estat ALTER COLUMN id SET DEFAULT nextval('public.n_estat_id_seq'::regclass);


--
-- TOC entry 3928 (class 2604 OID 28343)
-- Name: notificaçoes notif_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."notificaçoes" ALTER COLUMN notif_id SET DEFAULT nextval('public."notificaçoes_notif_id_seq"'::regclass);


--
-- TOC entry 3929 (class 2604 OID 28344)
-- Name: oficios oficio_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.oficios ALTER COLUMN oficio_id SET DEFAULT nextval('public.oficios_oficio_id_seq'::regclass);


--
-- TOC entry 3930 (class 2604 OID 28345)
-- Name: orgaos orgao_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orgaos ALTER COLUMN orgao_id SET DEFAULT nextval('public.orgaos_orgao_id_seq'::regclass);



--
-- TOC entry 3933 (class 2604 OID 28348)
-- Name: outorgas outorga_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.outorgas ALTER COLUMN outorga_id SET DEFAULT nextval('public.outorgas_outorga_id_seq'::regclass);


--
-- TOC entry 3957 (class 2604 OID 28349)
-- Name: pocos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pocos ALTER COLUMN id SET DEFAULT nextval('public."poços_poço_id_seq"'::regclass);


--
-- TOC entry 3936 (class 2604 OID 28352)
-- Name: processos processo_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.processos ALTER COLUMN processo_id SET DEFAULT nextval('public.processos_processo_id_seq'::regclass);


--
-- TOC entry 3959 (class 2604 OID 28353)
-- Name: regionais region_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.regionais ALTER COLUMN region_id SET DEFAULT nextval('public.regionais_region_id_seq'::regclass);


--
-- TOC entry 3937 (class 2604 OID 28355)
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- TOC entry 3961 (class 2604 OID 28356)
-- Name: sedes_setores id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sedes_setores ALTER COLUMN id SET DEFAULT nextval('public.setores_sedes_setor_id_seq'::regclass);

--
-- TOC entry 3940 (class 2604 OID 28358)
-- Name: situacao_features id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.situacao_features ALTER COLUMN id SET DEFAULT nextval('public.situacao_features_id_seq'::regclass);


--
-- TOC entry 3941 (class 2604 OID 28359)
-- Name: situaçao_notif situnot_id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."situaçao_notif" ALTER COLUMN situnot_id SET DEFAULT nextval('public."situaçao_notif_situnot_id_seq"'::regclass);


--
-- TOC entry 3962 (class 2604 OID 28360)
-- Name: uns id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.uns ALTER COLUMN id SET DEFAULT nextval('public.uns_un_id_seq'::regclass);


--
-- TOC entry 3943 (class 2604 OID 28361)
-- Name: userOnRoles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userOnRoles" ALTER COLUMN id SET DEFAULT nextval('public."userOnRoles_id_seq"'::regclass);



--
-- TOC entry 3948 (class 2604 OID 28364)
-- Name: vaz_poco id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_poco ALTER COLUMN id SET DEFAULT nextval('public."vazoes_poços_vazao_id_seq"'::regclass);

--
-- TOC entry 3951 (class 2604 OID 28366)
-- Name: vaz_setor_s id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_setor_s ALTER COLUMN id SET DEFAULT nextval('public.vaz_setor_s_id_seq'::regclass);


--
-- TOC entry 3952 (class 2604 OID 28367)
-- Name: vaz_superf id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_superf ALTER COLUMN id SET DEFAULT nextval('public.vaz_superf_id_seq'::regclass);


--
-- TOC entry 3971 (class 2606 OID 27849)
-- Name: autos_infraçao auto_infraçao_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."autos_infraçao"
    ADD CONSTRAINT "auto_infraçao_pkey" PRIMARY KEY (autoifr_id);


--
-- TOC entry 4057 (class 2606 OID 27851)
-- Name: eeas eea_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.eeas
    ADD CONSTRAINT eea_pkey PRIMARY KEY (id);

--
-- TOC entry 3976 (class 2606 OID 27855)
-- Name: enum_features_types enum_features_types_nome_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enum_features_types
    ADD CONSTRAINT enum_features_types_nome_key UNIQUE (nome);


--
-- TOC entry 3980 (class 2606 OID 27857)
-- Name: enum_licen_situ enum_licen_situ_nome_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enum_licen_situ
    ADD CONSTRAINT enum_licen_situ_nome_key UNIQUE (nome);


--
-- TOC entry 3982 (class 2606 OID 27859)
-- Name: enum_licen_situ enum_licen_situ_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enum_licen_situ
    ADD CONSTRAINT enum_licen_situ_pkey PRIMARY KEY (nome);


--
-- TOC entry 3986 (class 2606 OID 27863)
-- Name: enum_situacoes_feat enum_situacoes_feat_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enum_situacoes_feat
    ADD CONSTRAINT enum_situacoes_feat_pkey PRIMARY KEY (name);



--
-- TOC entry 3978 (class 2606 OID 27871)
-- Name: enum_features_types features_types_enum_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.enum_features_types
    ADD CONSTRAINT features_types_enum_pkey PRIMARY KEY (nome);


--
-- TOC entry 3992 (class 2606 OID 27873)
-- Name: licenças licença_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."licenças"
    ADD CONSTRAINT "licença_pKey" PRIMARY KEY (licen_id);




--
-- TOC entry 4063 (class 2606 OID 27879)
-- Name: municipios municipios_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.municipios
    ADD CONSTRAINT "municipios_pKey" PRIMARY KEY (id);


--
-- TOC entry 3996 (class 2606 OID 27881)
-- Name: n_estat n_estat_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.n_estat
    ADD CONSTRAINT n_estat_pkey PRIMARY KEY (id);


--
-- TOC entry 4002 (class 2606 OID 27885)
-- Name: notificaçoes notificaçoes_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."notificaçoes"
    ADD CONSTRAINT "notificaçoes_pKey" PRIMARY KEY (notif_id);


--
-- TOC entry 4004 (class 2606 OID 27887)
-- Name: oficios oficios_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.oficios
    ADD CONSTRAINT "oficios_pKey" PRIMARY KEY (oficio_id);


--
-- TOC entry 4006 (class 2606 OID 27889)
-- Name: orgaos orgaos_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orgaos
    ADD CONSTRAINT "orgaos_pKey" PRIMARY KEY (orgao_id);


--
-- TOC entry 4018 (class 2606 OID 27893)
-- Name: outorgas outorgas_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.outorgas
    ADD CONSTRAINT "outorgas_pKey" PRIMARY KEY (outorga_id);


--
-- TOC entry 4069 (class 2606 OID 27895)
-- Name: pocos poços_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pocos
    ADD CONSTRAINT "poços_pKey" PRIMARY KEY (id);



--
-- TOC entry 4024 (class 2606 OID 27901)
-- Name: processos processos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.processos
    ADD CONSTRAINT processos_pkey PRIMARY KEY (processo_id);


--
-- TOC entry 4072 (class 2606 OID 27903)
-- Name: regionais regionais_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.regionais
    ADD CONSTRAINT "regionais_pKey" PRIMARY KEY (region_id);


--
-- TOC entry 4075 (class 2606 OID 27905)
-- Name: reservatorios reservatorios_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reservatorios
    ADD CONSTRAINT reservatorios_id_key UNIQUE (id);


--
-- TOC entry 4077 (class 2606 OID 27907)
-- Name: reservatorios reservatorios_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.reservatorios
    ADD CONSTRAINT reservatorios_pkey PRIMARY KEY (id);


--
-- TOC entry 4026 (class 2606 OID 27909)
-- Name: roles roles_nome_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_nome_key UNIQUE (nome);


--
-- TOC entry 4028 (class 2606 OID 27911)
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- TOC entry 4079 (class 2606 OID 27913)
-- Name: sedes_setores setores_sedes_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sedes_setores
    ADD CONSTRAINT "setores_sedes_pKey" PRIMARY KEY (id);


--
-- TOC entry 4032 (class 2606 OID 27917)
-- Name: situacao_features situacao_features_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.situacao_features
    ADD CONSTRAINT situacao_features_pkey PRIMARY KEY (id);


--
-- TOC entry 4034 (class 2606 OID 27919)
-- Name: situaçao_notif situnotif_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."situaçao_notif"
    ADD CONSTRAINT "situnotif_pKey" PRIMARY KEY (situnot_id);


--
-- TOC entry 4055 (class 2606 OID 27921)
-- Name: cap_superf superf_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cap_superf
    ADD CONSTRAINT "superf_pKey" PRIMARY KEY (id);


--
-- TOC entry 4083 (class 2606 OID 27923)
-- Name: uns uns_pKey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.uns
    ADD CONSTRAINT "uns_pKey" PRIMARY KEY (id);


--
-- TOC entry 4036 (class 2606 OID 27925)
-- Name: userOnRoles userOnRoles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userOnRoles"
    ADD CONSTRAINT "userOnRoles_pkey" PRIMARY KEY (id);


--
-- TOC entry 4085 (class 2606 OID 28470)
-- Name: users users_drt_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_drt_key UNIQUE (drt);


--
-- TOC entry 4087 (class 2606 OID 28472)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4089 (class 2606 OID 28474)
-- Name: users users_login_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_login_name_key UNIQUE (login_name);


--
-- TOC entry 4091 (class 2606 OID 28476)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);



--
-- TOC entry 4043 (class 2606 OID 27931)
-- Name: vaz_poco vaz_poco_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_poco
    ADD CONSTRAINT vaz_poco_pkey PRIMARY KEY (id);



--
-- TOC entry 4047 (class 2606 OID 27935)
-- Name: vaz_setor_s vaz_setor_s_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_setor_s
    ADD CONSTRAINT vaz_setor_s_pkey PRIMARY KEY (id);


--
-- TOC entry 4049 (class 2606 OID 27937)
-- Name: vaz_superf vaz_superf_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_superf
    ADD CONSTRAINT vaz_superf_pkey PRIMARY KEY (id);


--
-- TOC entry 3972 (class 1259 OID 27939)
-- Name: fki_auto_process_fkey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_auto_process_fkey ON public."autos_infraçao" USING btree (processo_id);


--
-- TOC entry 4065 (class 1259 OID 27940)
-- Name: fki_municipio_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_municipio_fKey" ON public.pocos USING btree (municipio_id);


--
-- TOC entry 3999 (class 1259 OID 27941)
-- Name: fki_notif_ofic_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_notif_ofic_fKey" ON public."notificaçoes" USING btree (oficio_id);


--
-- TOC entry 4000 (class 1259 OID 27942)
-- Name: fki_notif_situ_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_notif_situ_fKey" ON public."notificaçoes" USING btree ("situaçao_notif");


--
-- TOC entry 4013 (class 1259 OID 27943)
-- Name: fki_out_munipio_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_out_munipio_fKey" ON public.outorgas USING btree (municipio_id);


--
-- TOC entry 4014 (class 1259 OID 27944)
-- Name: fki_out_orgao_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_out_orgao_fKey" ON public.outorgas USING btree (orgao_id);


--
-- TOC entry 4015 (class 1259 OID 27945)
-- Name: fki_out_un_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_out_un_fKey" ON public.outorgas USING btree (un_id);


--
-- TOC entry 4016 (class 1259 OID 27946)
-- Name: fki_outor_licen_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_outor_licen_fKey" ON public.outorgas USING btree (licen_id);


--
-- TOC entry 4041 (class 1259 OID 27950)
-- Name: fki_poços_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_poços_fKey" ON public.vaz_poco USING btree (poco_id);


--
-- TOC entry 4050 (class 1259 OID 27951)
-- Name: fki_setor-uns_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_setor-uns_fKey" ON public.cap_superf USING btree (un_id);


--
-- TOC entry 4066 (class 1259 OID 27952)
-- Name: fki_setor_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_setor_fKey" ON public.pocos USING btree (setor_id);




--
-- TOC entry 4051 (class 1259 OID 27954)
-- Name: fki_super_municipio_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_super_municipio_fKey" ON public.cap_superf USING btree (municipio_id);


--
-- TOC entry 4052 (class 1259 OID 27955)
-- Name: fki_super_setor; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_super_setor ON public.cap_superf USING btree (setor_id);


--
-- TOC entry 4067 (class 1259 OID 27956)
-- Name: fki_un_fKey; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "fki_un_fKey" ON public.pocos USING btree (un_id);


--
-- TOC entry 4053 (class 1259 OID 27957)
-- Name: sidx_cap_super_geom; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sidx_cap_super_geom ON public.cap_superf USING gist (geom);


--
-- TOC entry 4064 (class 1259 OID 27958)
-- Name: sidx_municipios_geom; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sidx_municipios_geom ON public.municipios USING gist (geom);


--
-- TOC entry 4070 (class 1259 OID 27959)
-- Name: sidx_poços_geom; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX "sidx_poços_geom" ON public.pocos USING gist (geom);


--
-- TOC entry 4080 (class 1259 OID 27961)
-- Name: sidx_setores_sedes_geom; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sidx_setores_sedes_geom ON public.sedes_setores USING gist (geom);


--
-- TOC entry 4081 (class 1259 OID 27962)
-- Name: sidx_uns_geom; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX sidx_uns_geom ON public.uns USING gist (geom);


--
-- TOC entry 4093 (class 2606 OID 27963)
-- Name: autos_infraçao auto_licen_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."autos_infraçao"
    ADD CONSTRAINT auto_licen_fkey FOREIGN KEY (licen_id) REFERENCES public."licenças"(licen_id);


--
-- TOC entry 4094 (class 2606 OID 27968)
-- Name: autos_infraçao auto_munic_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."autos_infraçao"
    ADD CONSTRAINT auto_munic_fkey FOREIGN KEY (municipio_id) REFERENCES public.municipios(id);


--
-- TOC entry 4095 (class 2606 OID 27973)
-- Name: autos_infraçao auto_notif_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."autos_infraçao"
    ADD CONSTRAINT auto_notif_fkey FOREIGN KEY ("notificaçao_id") REFERENCES public."notificaçoes"(notif_id);


--
-- TOC entry 4096 (class 2606 OID 27978)
-- Name: autos_infraçao auto_oficio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."autos_infraçao"
    ADD CONSTRAINT auto_oficio_fkey FOREIGN KEY (oficio_id) REFERENCES public.oficios(oficio_id);


--
-- TOC entry 4097 (class 2606 OID 27983)
-- Name: autos_infraçao auto_orgao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."autos_infraçao"
    ADD CONSTRAINT auto_orgao_fkey FOREIGN KEY (orgao_id) REFERENCES public.orgaos(orgao_id);


--
-- TOC entry 4098 (class 2606 OID 27988)
-- Name: autos_infraçao auto_process_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."autos_infraçao"
    ADD CONSTRAINT auto_process_fkey FOREIGN KEY (processo_id) REFERENCES public.processos(processo_id);


--
-- TOC entry 4099 (class 2606 OID 27993)
-- Name: autos_infraçao auto_setor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."autos_infraçao"
    ADD CONSTRAINT auto_setor_fkey FOREIGN KEY (setor_id) REFERENCES public.sedes_setores(id);


--
-- TOC entry 4100 (class 2606 OID 27998)
-- Name: autos_infraçao auto_un_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."autos_infraçao"
    ADD CONSTRAINT auto_un_fkey FOREIGN KEY (un_id) REFERENCES public.uns(id);


--
-- TOC entry 4153 (class 2606 OID 28477)
-- Name: cap_superf cap_super_usr_modif_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cap_superf
    ADD CONSTRAINT cap_super_usr_modif_fkey FOREIGN KEY (usr_modif) REFERENCES public.users(id) ON UPDATE CASCADE;


--
-- TOC entry 4149 (class 2606 OID 28003)
-- Name: cap_superf cap_superf_licen_situ_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cap_superf
    ADD CONSTRAINT cap_superf_licen_situ_fkey FOREIGN KEY (licen_situ) REFERENCES public.enum_licen_situ(nome) ON UPDATE CASCADE ON DELETE SET NULL;



--
-- TOC entry 4103 (class 2606 OID 28028)
-- Name: licenças licen_orgao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."licenças"
    ADD CONSTRAINT licen_orgao_fkey FOREIGN KEY (orgao_id) REFERENCES public.orgaos(orgao_id);


--
-- TOC entry 4105 (class 2606 OID 28033)
-- Name: n_estat n_estat_poco_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.n_estat
    ADD CONSTRAINT n_estat_poco_id_fkey FOREIGN KEY (poco_id) REFERENCES public.pocos(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4106 (class 2606 OID 28492)
-- Name: n_estat n_estat_usr_modif_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.n_estat
    ADD CONSTRAINT n_estat_usr_modif_fkey FOREIGN KEY (usr_modif) REFERENCES public.users(id) ON UPDATE CASCADE;



--
-- TOC entry 4109 (class 2606 OID 28043)
-- Name: notificaçoes notif_licen_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."notificaçoes"
    ADD CONSTRAINT notif_licen_fkey FOREIGN KEY (licen_id) REFERENCES public."licenças"(licen_id);


--
-- TOC entry 4110 (class 2606 OID 28048)
-- Name: notificaçoes notif_munic_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."notificaçoes"
    ADD CONSTRAINT notif_munic_fkey FOREIGN KEY (municipio_id) REFERENCES public.municipios(id);


--
-- TOC entry 4111 (class 2606 OID 28053)
-- Name: notificaçoes notif_oficio_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."notificaçoes"
    ADD CONSTRAINT notif_oficio_fkey FOREIGN KEY (oficio_id) REFERENCES public.oficios(oficio_id);


--
-- TOC entry 4112 (class 2606 OID 28058)
-- Name: notificaçoes notif_orgao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."notificaçoes"
    ADD CONSTRAINT notif_orgao_fkey FOREIGN KEY (orgao_id) REFERENCES public.orgaos(orgao_id);


--
-- TOC entry 4113 (class 2606 OID 28063)
-- Name: notificaçoes notif_process_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."notificaçoes"
    ADD CONSTRAINT notif_process_fkey FOREIGN KEY (processo_id) REFERENCES public.processos(processo_id);


--
-- TOC entry 4114 (class 2606 OID 28068)
-- Name: notificaçoes notif_setor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."notificaçoes"
    ADD CONSTRAINT notif_setor_fkey FOREIGN KEY (setor_id) REFERENCES public.sedes_setores(id);


--
-- TOC entry 4115 (class 2606 OID 28073)
-- Name: notificaçoes notif_un_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."notificaçoes"
    ADD CONSTRAINT notif_un_fkey FOREIGN KEY (un_id) REFERENCES public.uns(id);


--
-- TOC entry 4119 (class 2606 OID 28078)
-- Name: outorgas out_licen_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.outorgas
    ADD CONSTRAINT out_licen_fkey FOREIGN KEY (licen_id) REFERENCES public."licenças"(licen_id);


--
-- TOC entry 4120 (class 2606 OID 28083)
-- Name: outorgas out_munic_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.outorgas
    ADD CONSTRAINT out_munic_fkey FOREIGN KEY (municipio_id) REFERENCES public.municipios(id);


--
-- TOC entry 4121 (class 2606 OID 28088)
-- Name: outorgas out_orgao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.outorgas
    ADD CONSTRAINT out_orgao_fkey FOREIGN KEY (orgao_id) REFERENCES public.orgaos(orgao_id);


--
-- TOC entry 4122 (class 2606 OID 28093)
-- Name: outorgas out_un_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.outorgas
    ADD CONSTRAINT out_un_fkey FOREIGN KEY (un_id) REFERENCES public.uns(id);


--
-- TOC entry 4158 (class 2606 OID 28103)
-- Name: pocos pocos_licen_situ_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pocos
    ADD CONSTRAINT pocos_licen_situ_fkey FOREIGN KEY (licen_situ) REFERENCES public.enum_licen_situ(nome) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4104 (class 2606 OID 28108)
-- Name: manutençao_poço poço_manut_fKey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

--
-- TOC entry 4159 (class 2606 OID 28113)
-- Name: pocos poço_munic_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pocos
    ADD CONSTRAINT "poço_munic_fkey" FOREIGN KEY (municipio_id) REFERENCES public.municipios(id);



--
-- TOC entry 4160 (class 2606 OID 28128)
-- Name: pocos poço_un_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pocos
    ADD CONSTRAINT "poço_un_fkey" FOREIGN KEY (un_id) REFERENCES public.uns(id);


--
-- TOC entry 4161 (class 2606 OID 28133)
-- Name: pocos poços_setor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.pocos
    ADD CONSTRAINT "poços_setor_fkey" FOREIGN KEY (setor_id) REFERENCES public.sedes_setores(id);


--
-- TOC entry 4126 (class 2606 OID 28138)
-- Name: processos process_munic_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.processos
    ADD CONSTRAINT process_munic_fkey FOREIGN KEY (municipio_id) REFERENCES public.municipios(id);


--
-- TOC entry 4127 (class 2606 OID 28143)
-- Name: processos processo_licen_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.processos
    ADD CONSTRAINT processo_licen_fkey FOREIGN KEY (licen_id) REFERENCES public."licenças"(licen_id);


--
-- TOC entry 4128 (class 2606 OID 28148)
-- Name: processos processo_orgao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.processos
    ADD CONSTRAINT processo_orgao_fkey FOREIGN KEY (orgao_id) REFERENCES public.orgaos(orgao_id);


--
-- TOC entry 4129 (class 2606 OID 28153)
-- Name: processos processo_outorga_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.processos
    ADD CONSTRAINT processo_outorga_fkey FOREIGN KEY (outorga_id) REFERENCES public.outorgas(outorga_id);



--
-- TOC entry 4130 (class 2606 OID 28163)
-- Name: processos processo_un_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.processos
    ADD CONSTRAINT processo_un_fkey FOREIGN KEY (un_id) REFERENCES public.uns(id);




--
-- TOC entry 4167 (class 2606 OID 28188)
-- Name: sedes_setores sedes_setores_fluxograma_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sedes_setores
    ADD CONSTRAINT sedes_setores_fluxograma_fkey FOREIGN KEY (sistema_flux) REFERENCES public.sistemas_agua(id) ON UPDATE CASCADE;


--
-- TOC entry 4168 (class 2606 OID 28193)
-- Name: sedes_setores sedes_setores_municipio_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sedes_setores
    ADD CONSTRAINT sedes_setores_municipio_id_fkey FOREIGN KEY (municipio_id) REFERENCES public.municipios(id) ON UPDATE CASCADE;


--
-- TOC entry 4169 (class 2606 OID 28198)
-- Name: sedes_setores sedes_setores_un_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sedes_setores
    ADD CONSTRAINT sedes_setores_un_id_fkey FOREIGN KEY (un_id) REFERENCES public.uns(id) ON UPDATE CASCADE;


--
-- TOC entry 4132 (class 2606 OID 28203)
-- Name: situacao_features situacao_features_features_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.situacao_features
    ADD CONSTRAINT situacao_features_features_type_fkey FOREIGN KEY (features_type) REFERENCES public.enum_features_types(nome) ON UPDATE CASCADE;


--
-- TOC entry 4133 (class 2606 OID 28208)
-- Name: situacao_features situacao_features_situacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.situacao_features
    ADD CONSTRAINT situacao_features_situacao_fkey FOREIGN KEY (situacao) REFERENCES public.enum_situacoes_feat(name) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 4134 (class 2606 OID 28512)
-- Name: situacao_features situacao_features_usr_modif_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.situacao_features
    ADD CONSTRAINT situacao_features_usr_modif_fkey FOREIGN KEY (usr_modif) REFERENCES public.users(id) ON UPDATE CASCADE;


--
-- TOC entry 4150 (class 2606 OID 28213)
-- Name: cap_superf superf_munic_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cap_superf
    ADD CONSTRAINT superf_munic_fkey FOREIGN KEY (municipio_id) REFERENCES public.municipios(id);



ALTER TABLE ONLY public.cap_superf
    ADD CONSTRAINT superf_setor_fkey FOREIGN KEY (setor_id) REFERENCES public.sedes_setores(id);


--
-- TOC entry 4152 (class 2606 OID 28233)
-- Name: cap_superf superf_un_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cap_superf
    ADD CONSTRAINT superf_un_fkey FOREIGN KEY (un_id) REFERENCES public.uns(id);





--
-- TOC entry 4135 (class 2606 OID 28243)
-- Name: userOnRoles userOnRoles_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userOnRoles"
    ADD CONSTRAINT "userOnRoles_role_id_fkey" FOREIGN KEY (role_id) REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4136 (class 2606 OID 28517)
-- Name: userOnRoles userOnRoles_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userOnRoles"
    ADD CONSTRAINT "userOnRoles_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4170 (class 2606 OID 28522)
-- Name: users users_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);

--
-- TOC entry 4141 (class 2606 OID 28258)
-- Name: vaz_poco vaz_poco_poco_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_poco
    ADD CONSTRAINT vaz_poco_poco_id_fkey FOREIGN KEY (poco_id) REFERENCES public.pocos(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4142 (class 2606 OID 28537)
-- Name: vaz_poco vaz_poco_usr_modif_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_poco
    ADD CONSTRAINT vaz_poco_usr_modif_fkey FOREIGN KEY (usr_modif) REFERENCES public.users(id) ON UPDATE CASCADE;




--
-- TOC entry 4145 (class 2606 OID 28268)
-- Name: vaz_setor_s vaz_setor_s_setor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_setor_s
    ADD CONSTRAINT vaz_setor_s_setor_id_fkey FOREIGN KEY (setor_id) REFERENCES public.sedes_setores(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4146 (class 2606 OID 28547)
-- Name: vaz_setor_s vaz_setor_s_usr_modif_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_setor_s
    ADD CONSTRAINT vaz_setor_s_usr_modif_fkey FOREIGN KEY (usr_modif) REFERENCES public.users(id) ON UPDATE CASCADE;


--
-- TOC entry 4147 (class 2606 OID 28273)
-- Name: vaz_superf vaz_superf_superf_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_superf
    ADD CONSTRAINT vaz_superf_superf_id_fkey FOREIGN KEY (superf_id) REFERENCES public.cap_superf(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 4148 (class 2606 OID 28552)
-- Name: vaz_superf vaz_superf_usr_modif_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vaz_superf
    ADD CONSTRAINT vaz_superf_usr_modif_fkey FOREIGN KEY (usr_modif) REFERENCES public.users(id) ON UPDATE CASCADE;


-- Completed on 2020-11-09 14:28:20

--
-- PostgreSQL database dump complete
--

