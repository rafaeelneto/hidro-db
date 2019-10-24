# UEMA-db (COSANPA-db)
Desenvolvimento de uma interface acessível para o banco de dados contendo os pontos de captação de água da COSANPA e tabelas relacionadas.

## Banco de dados
Instância em servidor PostgresSQL v9+ com os seguintes pré-requisitos:
- postgis
- postgresql-9.6-postgis-3
- postgresql-9.6-postgis-3-dbgsym
- postgresql-9.6-postgis-3-scripts

## Requisitos do app
Aplicativo totalmente baseado em JavaScript rodando por [Node.js](https://nodejs.org/en/) versão 12.13 LTS (Para instalação em sistema Linux consultar [binários](https://github.com/nodesource/distributions/blob/master/README.md)).

### Pré-requisitos
- nodejs 
- build-essential

Antes de iniciar o programa deve-se instalar as dependências requeridas, todas especificadas no arquivo package.json. Para instalar as dependências automaticamente, deve dar o comando na pasta raiz do projeto:
>npm install

Variáveis sensíveis e internas como IP do servidor Postgres, nome do banco de dados, usuário e senha, APIs usadas e porta do serviço são armazenadas no arquivo .env. Portanto antes de rodar a aplicação deve-se criar esse arquivo esse arquivo de acordo com as especificações do server. Modelo abaixo com as variáveis usadas:

> PORT = 80
> 
> PGHOST = 10.20.100.30
> 
> PGPORT = 5432
> 
> PGDATABASE = uema
> 
> PGUSER = uema
> 
> PGPASSWORD = uema_publico
> 
> MAPBOX_URL = "mapboxlink/apikey"
>
> MAPS_URL = "googlemapslink/apikey"

Para rodar o aplicativo, finalmente, deve-se dar o seguinte comando na pasta raíz do projeto:
>node app.js

## Configuração do server

### Comandos para inciar o node.js na inicialização

Arquivo: uema.service 

> vi /etc/systemd/system/uema.service
>
> systemctl enable uema


### Nginx configuration

Arquivo: uema.conf