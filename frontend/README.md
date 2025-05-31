# Como desenvolver no Frontend

Crie um fork do repositório [aqui](https://github.com/arthurfary/udescore/fork), com o fork você terá uma cópia sua do repositório.

## Downloads necessários

Para começar a desenvolver, você precisa ter o [NodeJs](https://nodejs.org/pt) e o [Java](https://adoptium.net/) baixados em sua máquina.

Com estes baixados, baixe também o [Android Studio](https://developer.android.com/studio/index.html).
> O Android Studio é necessário mesmo se você for usar outra IDE, pois permite a emulação de um celular.

Para configurar o Android Studio, siga os passos [do guia oficial](https://reactnative.dev/docs/set-up-your-environment?os=windows), preste atenção nos passos 3 e 4.

### Rodando o app

Para rodar o APP, clone o repositório em uma pasta de sua escolha e entre na pasta gerada com o comando (MUDE SEU NOME PARA O NOME DO SEU GITHUB, assim você vai clonar seu fork):
```
git clone https://www.github.com/SEUNOME/udescore && cd udescore
```

Depois baixe os modulos com: 
```
npm run install
```
> Isso vai baixar os modulos e bibliotecas necessárias para rodar o app.

Esses passos anteriores serão realizados apenas uma vez, agora, toda vez que vocẽ for desenvolver o frontend siga estes passos:

- Abra o Android Studio, e rode o emulador de celular.

- Na pasta do frontend, rode `npm start` 
> Isso vai iniciar o servidor de desenvolvimento.

- Para conectar o servidor de desenvolvimento ao emulador de android rode `npm run android` **EM OUTRO TERMINAL**

Após isso é só desenvolver com o Android Studio ou outra IDE da sua escolha;

