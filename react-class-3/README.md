# Importante notes on class

Você pode executar scoped styles internament com plugins como Radium ou pelo WebPack com CSS Loader.

## Radium

`yarn add radium`

Quando exportar seu componente, você deve utilizar o Radium como high order function.

```JS
import React from 'react';
import Radium from 'radium';

const style = {
  color: 'red',
  ':hover': {
    color: 'blue',
  }
};

const Componente = (prop) => React.createElement('p', {
style,
});

export default Radium(Componente);
```

## CSS Loader

Para utilizar o CSS loader, você deve primeiro, ejetar os arquivos de configurações do WebPack do Create-React-App.
Alterar o arquivo `webpack.config.js` aonde seria chamado o loader de CSS.

Adicionar as linhas `localIdentName: '[name]__[local]__[hash:base64:5]',` e `modules: true,`.

```JS
return {
  test: cssRegex,
    exclude: cssModuleRegex,
    use: getStyleLoaders({
      importLoaders: 1,
      modules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]',
      sourceMap: isEnvProduction && shouldUseSourceMap,
    })
    }
```

Assim você pode importar os arquivos CSS como objetos dentro do JS e utilizar eles internamente como Scoped Styles.
```JS
import React from 'react';
import css from './App.css';

const App = (prop) => React.createElement('div', {
  className: css.App,
});
```