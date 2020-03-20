# COSANPA-db
Desenvolvimento de uma interface acessível para o banco de dados contendo os pontos de captação de água da COSANPA.

## Banco de dados
Instância em servidor PostgresSQL v9+ com extensão PostGIS instalada
### Pre requisitos
- postgis
- postgresql-9.6-postgis-3 
- postgresql-9.6-postgis-3-dbgsym 
- postgresql-9.6-postgis-3-scripts

## Requisitos do webapp
Aplicativo totalmente baseado em JavaScript rodando por [Node.js](https://nodejs.org/en/) versão 12.13 LTS (Para instalação em sistema Linux consultar [binários](https://github.com/nodesource/distributions/blob/master/README.md)).

Antes de iniciar o programa deve instalar as dependências requeridas, todas especificadas no arquivo package.json. Para instalar as dependências automaticamente, deve dar o comando na pasta raiz do projeto:
>npm install

Variáveis sensíveis e internas como IP do servidor Postgres, nome do banco de dados, usuário e senha, APIs usadas e porta do serviço são armazenadas no arquivo .env. Portanto antes de rodar a aplicação deve-se criar esse arquivo esse arquivo. Modelo abaixo com as variáveis usadas:

> PORT = 80
> 
> PGHOST = localhost
> 
> PGPORT = 5432
> 
> PGDATABASE = cosanpa
> 
> PGUSER = postgres
> 
> PGPASSWORD = postgres
> 
> MAPBOX_URL = "mapboxlink/apikey"
>
> MAPS_URL = "googlemapslink/apikey"


Para rodar o aplicativo, finalmente, deve-se dar o seguinte comando na pasta raíz do projeto:
>node app.js

## Configurações do server

### Comandos para iniciar o nodejs na inicialização

Arquivo: uema.service 

vi /etc/systemd/system/uema.service 
systemctl enable uema


### Nginx configuration

Arquivo: uema.conf


### Reiniciar o service
> sudo systemctl restart uema.service

### Pre requisitos
- nodejs 
- build-essential
