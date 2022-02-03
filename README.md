# ClienteUi

  Este projeto realiza o cadastro de Clientes em uma base de dados MySQL. O projeto é desenvolvido em [Angular](https://github.com/feltex/cliente-ui)
e consume uma API desenvolvida em [Java](https://github.com/feltex/cliente-api)


  ![CadastroDeClientes](CadastroClientes.png)
  
  
  
## Vídeo da API


 - [Cliente API](https://github.com/feltex/cliente-api)


## Pré Requisitos

 - [Angular 12](https://www.youtube.com/playlist?list=PLoBE72jMC_aL2-KIxOjBNxnoaDcvjGyhd)
 - UI: Código no GitHub Angular [Feltex](https://github.com/feltex/cliente-ui)
 - API: Código no GitHub API Java com Spring Boot [Feltex](https://github.com/feltex/cliente-api)


## Iniciar a API de Clientes

 Há 2 formas de iniciar a API
 
1.   Acessando a pasta docker do projeto UI e executar o comando abaixo: 
   
```
   docker-compose  up
```
 
 
2. Se você tiver algum conhecimento em Java acesse o projeto [cliente-api](https://github.com/feltex/cliente-api/blob/main/README.md) e siga as instruções 
 **Iniciar a aplicação**.
  


## Criar imagem Docker

    docker build -t <usuario>/cliente-ui:V1  .

    docker push <usuario>/cliente-ui:V1


## Executando o projeto

```
    ng serve 
```

## Utilizando a aplicação

```
  http://localhost:4200/  
``` 

