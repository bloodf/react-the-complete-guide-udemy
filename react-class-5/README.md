# Notas imporantes da aula

## Lifecycle Hooks Criação

1 - `constructor(props)` (**VUE** -> `beforeCreate()`): ES6 Default Class Constructor.

**ATENÇÃO**: Sempre executar passando o `super(props)`, caso seja utilizado.

- Melhor prática: Não utilizar nada que possa gerar re-render ou manipulações para não causar nenhum side effect. Definir estado / state do componente.

2 - `static getDerivedStateFromProps(props, state)` (**VUE** -> `created()`): Equivalente ao Watch do Vue, quando um prop altera, você pode alterar o estado / state do componente.

- Melhor prática: Não utilizar nada que possa gerar re-render ou manipulações para não causar nenhum side effect.

3 - `render()` (**VUE** -> `render()`): Renderização do componente.

- Melhor prática: Tomar cuidado com o que é definido aqui, pois ele vai ser chamado toda vez que houver um re-render, nada que possa bloquear o processo de renderização.

3.1 - Renderização dos componentes filhos / child components.

4 - `componentDidMount()` (**VUE** -> `mounted()`): Utilizado após a renderização, para por exemplo buscar dados via HTTP, mudar LocaStorage e afins. Pois sempre é executado após a renderização do compoente. 

**ATENÇÃO**: Nunca alterar dados do estado / state aqui, pois vai re-renderizar os componente, causando Loop infinito.

5 - `componentWillUnmount()` (**VUE** -> `beforeDestroy()`): Executado quando o componente for desmontado. Normalmente utilizado para limpeza de dados e componente.

## Lifecycle Hooks Atualização

1 - `static getDerivedStateFromProps(props, state)` (**VUE** -> `created()`): Equivalente ao Watch do Vue, quando um prop altera, você pode alterar o estado / state do componente.

- Melhor prática: Não utilizar nada que possa gerar re-render ou manipulações para não causar nenhum side effect.

2 - `shouldComponentUpdate(nextProps, nextState)` : Este hook, pode cancelar a atualização do componente caso necessário.

**ATENÇÃO**: Este hook caso usado errado, pode causar problemas na renderização ou nos outros hooks.

3 - `render()` (**VUE** -> `render()`): Renderização do componente.

- Melhor prática: Tomar cuidado com o que é definido aqui, pois ele vai ser chamado toda vez que houver um re-render, nada que possa bloquear o processo de renderização.

3.1 - Renderização dos componentes filhos / child components.

4 - `getSnapshotBeforeUpdate(prevProps, prevState)` (**VUE** -> `beforeUpdate()`): Recebe os dados antigos, e você pode salvar um snapshot do componente para usos internos, como por exemplo salvar a posição do scroll do usuário na página antes de uma re-renderização, devolvendo o usuário a posição anterior à nova renderização. Você deve retornar um valor ou null, para ser passado ao hook `componentDidUpdate` quando ele for executado.

- Melhor prática: Não utilizar nada que possa gerar re-render ou manipulações para não causar nenhum side effect.

5 - `componentDidUpdate(prevProps, prevState, snapshot)` (**VUE** -> `updated()`): Utilizado após a nova renderização, para por exemplo buscar dados via HTTP, mudar LocaStorage e afins. Pois sempre é executado após a renderização do compoente.

**ATENÇÃO**: Nunca alterar dados do estado / state aqui, pois vai re-renderizar os componente, causando Loop infinito.

6 - `componentWillUnmount()` (**VUE** -> `beforeDestroy()`): Executado quando o componente for desmontado. Normalmente utilizado para limpeza de dados e componente.

## Lifecycle Hooks componentes funcionais
Para ter acesso aos Lifecycle Hooks dentro de um componente funcionar, você deve utilizar os ReactHooks que foram apresentados no React 16+

1 - `useEffect(() => {}, [])` : Recebe um callback como parâmetro, que será executado toda vez que o componente tiver um lifecycle hook executado. Recebe um array de variaveis que podem ser alteradas, causando o uso do Hook somente quando estas variaveis realmente forem alteradas. Caso o array seja vazio, ele só será executado na primeira vez. Se você retornar uma função anonima, ela será executada na destruição do componente.

**ATENÇÃO**: Tomar cuidado como é utilizado pois é executado inclusive na criação.

**LEGAL**: Você pode utilizar quantas vezes quiser a função dentro do componente funcional.

```JS
import React, { useEffect } from 'react';

const Componente = (props) => {
  useEffect(() => {
    console.log('Componente atualizado');
    return () => {
      console.log('Componente desmontado');
    }
  },[] // Execução inicial somente);

  return React.createElement('div', null, 'Componente');
}

export default Componente;

```

## Memorização de dados

Você pode utilizar a função `memo` presente no React, para memorizar os dados do componente funcional, fazendo assim que ele só re-renderize quando houver mudanças em seus dados.

## PureComponent

Você pode extender o `PureComponent` ao invés de `Component` para ja ter aplicado regra de re-renderização quando somente, houver a mudança dos dados.

## Rootless Render

Para fazer um Rootless render, você tem a possibilidade de encorporarar os elementos dentro de um Array, e atribuindo Key, Utilizando um High Order Componente que retornar os filhos do compoente ou usando o `React.fragment`, presente somente no React 16.2+

```JS
// Array de componentes
import React, {Component} from 'react';

class Component extends Component {
  render (){
    return [
      <div key={1}>1</div>,
      <div key={2}>2</div>,
      <div key={3}>3</div>,
    ];
  }
}
```

```JS
//High Order Componente
const hoc = (props) => props.children;

export default hoc
```

```JS
// React Fragment
import React, {Component, Fragment} from 'react';

class Component extends Component {
  render (){
    <Fragment>
      <div>1</div>,
      <div>2</div>,
      <div>3</div>,
    </Fragment>
  }
}
```

## SetState com dados anteriores à chamada

**RECOMENDADO** A função `setState` pode receber como primeiro argumento uma função anônima na qual, ela tem como parâmetro o `prevState` e `props`.

```JS
import React, {Component, Fragment} from 'react';

class Component extends Component {
  decrease = () => {
    this.setState((prevState, props) => ({
      counter: prevState + 1,
    }));
  }
}
```

## Definindo tipos dos Props

No React, diferente do Vue, você não tem como definir no prop qual o tipo dele por padrão, assim temos de usar uma lib de terceiros chamada `prop-types`, você pode instalar ela com o comando `$ yarn add prop-types` e importar ela no seu componente.

```JS
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Component extends Component {
  render() {
    return <div>{this.props.textString}</div>;
  }
}

Component.propTypes = {
  textString: PropTypes.string,
}

export default Component;
```

## Referências internas

Assim como no Vue, o React tem a propiedade ref, na qual você pode passar uma função anônima, `(element) => { element.focus(); }` o qual o primeiro parâmetro é o elemento que está sendo referenciado.

## Notes

- `componentWillMount` foi removido nos lifeCycle hooks. Utilizar o `static getDerivedStateFromProps(props, state)` ao invés.
- `componentWillUpdate` foi removido nos lifeCycle hooks.
- `componentWillReceiveProps` foi removido nos lifeCycle hooks.