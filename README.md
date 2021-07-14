
<p align="center">
  <img src="./src/assets/logo.png">
</p>

    
# IT

O it é um app marketplace de games



[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


## Demo

![Demo](src/assets/demo.gif)
  
## Installation 


Instalar o projeto com Yarn (Atenção aos passos)

```bash 
# Baixar as dependências
  yarn 
# Rodar o server
  yarn start
```

O projeto utilizou o Json Server para criar uma API FAKE para realizar o GET de produtos.
Portanto, é necessário usar o seguinte comando para subir o server:

```bash
  yarn api
```

Além disso, foi utilizado o lt para criar um subdominio (passo opcional). Caso opte por usar, rodar o seguinte comando:
```bash
  yarn localhost
```

OBS***

No arquivo [src/services/api.ts](src/services/api.ts) possui as configurações do BaseUrl que será utilizado para fazer a requisição.
Por padrão, o valor selecionado é o localhost na porta 3333. Na etapa de desenvolvimento o localhost funcionava normalmente quando 
utilizado o emulador do android studio (lembrar de apontar a porta do emulador para a porta do PC). Caso você queira rodar a aplicação pelo celular físico pelo app do Expo Go, aconselha-se rodar o 
comando ```yarn localhost``` e deixar descomentado a baseUrl ```https://application-mock-server.loca.lt/```.

## Conhecimentos adquiridos durante o projeto

Durante esse projeto pude aprender melhor a lidar com múltiplos contextos e utilizei o component de Modal que nunca tinha visto anteriormente.

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Author

- [@samuelLimaSantos](https://www.github.com/samuelLimaSantos)

   
