import React from 'react';

import Card from '../card/card.component';

export class StateClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      searchQuery: 'Bret',
    };
  }

  componentDidMount(){
    this.fetchData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchQuery) {
      this.fetchData(this.state.searchValue);
   }
    this.fetchData()
  }
    
  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(resJson => this.setState({ user: resJson[0]}))
  }

  /* handleChange() function to set a new state for input */
  handleInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      searchQuery: event.target.value
    })
  }

  render() {
    return (
      <Card> 
        <input 
          type='search' 
          value={this.state.searchQuery} 
          onChange={(e) => this.handleInputChange(e)} 
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