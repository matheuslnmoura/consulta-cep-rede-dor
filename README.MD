<p align="center">
  <a href="https://github.com/$username-github/$nome-repositorio">
    <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4eb.svg" alt="readme-logo" width="80" height="80">
  </a>

  <h3 align="center">
    Consulta de CEP - Desafio Técnico Rede D'or
  </h3>
</p>

## Descrição

Este é um projeto que busca informações de um endereço através do CEP.

## Link do Deploy

http://consultacep-rede-dor.tk/

## Uso

```bash
$ git clone git@github.com:matheuslnmoura/consulta-cep-rede-dor.git
$ cd consulta-cep-rede-dor

```

## Rodar o projeto com Docker

```bash
$ docker-compose up --build

```

## Link de Acesso Local

http://localhost:80

## Link de Acesso Local do Back-End (Requisições com Thunder Client, Insomnia, etc)
http://localhost:80/api

## API:

```
# Endpoint:

- POST /consult-cep
    - Rota para envio do CEP através do corpo da requisição. 
    - Aceita strings nos seguintes formatos: 
      - '99999999'
      - '99999-999'
    - Aceita números no seguinte formato: 
      - 99999999
    - headers: {}
    - body: {
        "cep": "20775181"
      }

```
