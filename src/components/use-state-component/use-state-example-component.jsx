import React from 'react';

import Card from '../card/card.component';

// const UseStateExample = () => {
//   const [name, setName] = useState('Toti');

//   return (
//     <Card>
//       <h1> {name} </h1>
//       <button onClick={(e) => setName(name === 'Fulano' ? 'Beltrano' : 'Fulano')}>Mudar</button>
//     </Card>
//   );
// };

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      searchQuery: 'Bret',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => this.setState({ user: data}))
    }

  render() {
    return (
      <Card> 
        <input type='search' 
        value={this.state.searchQuery} 
        onChange={event => this.state.searchQuery(event.target.value)} 
      /> 
      {this.state.user ? ( 
        <div> 
          <h3>{this.state.user.name}</h3> 
          <h3>{this.state.user.username}</h3> 
          <h3>{this.state.user.email}</h3> 
          </div> 
          ) : ( 
          <p>Usuário não encontrado</p> 
        )}
      </Card>
    );
  }
}

export default StateClassComponent;