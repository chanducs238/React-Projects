import { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Clock from './Clock';


class App extends Component {

  state = {
    characters: []
  }

  removeCharacter = (key) => {
    this.setState({characters: this.state.characters.filter((row, index) => {
      return index !== key;
    })});
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character]})
  }
render(){
  return (
    // <div className="container">
    //   <Table data={this.state.characters} removeCharacter={this.removeCharacter}/>
    //   <Form handleSubmit={this.handleSubmit} />
    // </div>
    <Clock />
  );
}
}

export default App;
