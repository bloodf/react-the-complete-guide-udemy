# Importante notes on class

## Handlers e Métodos

Todos os métodos dentro da classe do React, sofrem com o problema do bind do this.

Assim é mais seguro ao fazer um método que irá chamar alguem internamente, utilizar ele como arrow function.

```JS
import React, { Component } from 'react';

class App extends Component {
  state = {
    aula: 1,
  }

  changeAulaHandler = (aula) => {
    this.setState({aula});
  }
}
```

## Execução de função dentro do render

Dentro do JSX você pode cair em problemas com o bind do this também. Assim para circular este problema você pode trabalhar de duas formas.

### Utilizando o bind

```JS
import React, { Component } from 'react';

class App extends Component {
  state = {
    aula: 1,
  }

  changeAulaHandler = (aula) => {
    this.setState({aula});
  }

  render(){
    return (
      <button onClick={this.changeAulaHandler.bind(this, 2)}>Mudar Aula</button>
    )
  }
}
```

### Utilizando o arrow function

```JS
import React, { Component } from 'react';

class App extends Component {
  state = {
    aula: 1,
  }

  changeAulaHandler = (aula) => {
    this.setState({aula});
  }

  render(){
    return (
      <button onClick={() => this.changeAulaHandler(2)}>Mudar Aula</button>
    )
  }
}
```