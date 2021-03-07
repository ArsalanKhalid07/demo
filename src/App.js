import React from 'react';
import Config from './utils/umair'
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props)
  
  this.state = {
    persons: [],
    get:''
  }
  }
  componentDidMount() {
    this.setState({get:Config.data1()})
    console.log('this is umair',Config.data1())
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      // this.setState({get:umair})
      <div>
        {this.state.get}
        {this.state.persons.map(person =>
        <div>
       Name :{person.name}
        <hr/>
        Email: {person.email}
        </div>
        )}
      
      </div>
    )
  }
}