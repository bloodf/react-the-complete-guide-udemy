# Notas imporantes da aula

## Lifecycle Hooks

1 - `constructor(props)` : ES6 Default -> Melhor prática: Não utilizar nada que possa gerar re-render ou manipulações para não causar nenhum side effect. Definir estado / state do componente.

2 - `getDerivedStateFromProps(props, state)` : Equivalente ao Watch do Vue, quando um prop altera, você pode alterar o estado / state do componente. -> Melhor prática: Não utilizar nada que possa gerar re-render ou manipulações para não causar nenhum side effect.

3 - `render()` : Rendirização do componente. Melhor prática: Tomar cuidado com o que é definido aqui, pois ele vai ser chamado toda vez que houver um re-render, nada que possa bloquear o processo de renderização.

3.1 - Renderização dos componentes filhos / child components.

4 - `componentDidMount()` : Normalmente utilizado após a renderização, para por exemplo buscar dados via HTTP, mudar LocaStorage e afins. Pois sempre é executado após a renderização do compoente. ** ATENÇÃO **: Nunca alterar dados do estado / state aqui, pois vai re-renderizar os componente, causando Loop infinito.

5 - 