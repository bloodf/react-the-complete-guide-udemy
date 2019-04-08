# Notas imporantes da aula

## Lifecycle Hooks Criação

1 - `constructor(props)` : ES6 Default -> Melhor prática: Não utilizar nada que possa gerar re-render ou manipulações para não causar nenhum side effect. Definir estado / state do componente.

2 - `static getDerivedStateFromProps(props, state)` : Equivalente ao Watch do Vue, quando um prop altera, você pode alterar o estado / state do componente. -> Melhor prática: Não utilizar nada que possa gerar re-render ou manipulações para não causar nenhum side effect.

3 - `render()` : Renderização do componente. Melhor prática: Tomar cuidado com o que é definido aqui, pois ele vai ser chamado toda vez que houver um re-render, nada que possa bloquear o processo de renderização.

3.1 - Renderização dos componentes filhos / child components.

4 - `componentDidMount()` : Utilizado após a renderização, para por exemplo buscar dados via HTTP, mudar LocaStorage e afins. Pois sempre é executado após a renderização do compoente. ** ATENÇÃO **: Nunca alterar dados do estado / state aqui, pois vai re-renderizar os componente, causando Loop infinito.

## Lifecycle Hooks Atualização

1 - `static getDerivedStateFromProps(props, state)` : Equivalente ao Watch do Vue, quando um prop altera, você pode alterar o estado / state do componente. -> Melhor prática: Não utilizar nada que possa gerar re-render ou manipulações para não causar nenhum side effect.

2 - `shouldComponentUpdate(nextProps, nextState)` : Este hook, pode cancelar a atualização do componente caso necessário. ** ATENÇÃO **: Este hook caso usado errado, pode causar problemas na renderização ou nos outros hooks.

3 - `render()` : Renderização do componente. Melhor prática: Tomar cuidado com o que é definido aqui, pois ele vai ser chamado toda vez que houver um re-render, nada que possa bloquear o processo de renderização.

3.1 - Renderização dos componentes filhos / child components.

4 - `getSnapshotBeforeUpdate(prevProps, prevState)` : Recebe os dados antigos, e você pode salvar um snapshot do componente para usos internos, como por exemplo salvar a posição do scroll do usuário na página antes de uma re-renderização, devolvendo o usuário a posição anterior à nova renderização. -> Melhor prática: Não utilizar nada que possa gerar re-render ou manipulações para não causar nenhum side effect.

5 - `componentDidUpdate()` : Utilizado após a nova renderização, para por exemplo buscar dados via HTTP, mudar LocaStorage e afins. Pois sempre é executado após a renderização do compoente. ** ATENÇÃO **: Nunca alterar dados do estado / state aqui, pois vai re-renderizar os componente, causando Loop infinito.

## Notes

- `componentWillMount` foi removido nos lifeCycle hooks. Utilizar o `static getDerivedStateFromProps(props, state)` ao invés.