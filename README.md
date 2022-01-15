# ClienteUi

  Este projeto realiza o cadastro de Clientes em uma base de dados MySQL. 


## Pré Requisitos

 - Angular 12
 - Código no GitHub UI Angular [Feltex](https://github.com/feltex/cliente-ui)
 - Código no GitHub API Java com Spring Boot [Feltex](https://github.com/feltex/cliente-api)


## Criar imagem Docker

    docker build -t andrefelix/cliente-ui:V1  .

    docker push andrefelix/cliente-ui:V1


## Criando o jar
  
    mvn clean package

## Executando o projeto

```
    ng serve 
```

## Utilizando a aplicação

```
  http://localhost:4200/  
``` 

