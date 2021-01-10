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
      name: 'Fulano'
    };
  }

  render() {
    return (
      <Card>
        <h1> {this.state.name} </h1>
        <button onClick={(e) => this.setState({ 
          name: this.state.name === 'Fulano' ? 'Beltrano' : 'Fulano'
          })}>
          Mudar
        </button>
      </Card>
    );
  }
}

export default StateClassComponent;