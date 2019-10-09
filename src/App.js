import React ,{Component} from 'react';
import './App.css';
import Todos from './components/Todos'
class App extends Component{
  //states
  state = {
    todos : [ //array of objects
      {
        //have id since most of the time you need a unique id for ressources
        id: 1,
        title:'Take out the trash',
        completed: false

      },
      {
        
        id: 2,
        title:'Dinner',
        completed: true

      },
      {
        
        id: 3,
        title:'Study',
        completed: false

      },
//to access state this.state.whatever
    ]
  }
  markComplete = () =>{
//to test console.log
  
  }
  render(){
   // console.log(this.state.todos);
   //pass array as property 
   return (
      <div className="App">
        
        <Todos todos = {this.state.todos} markCompelete={this.markCompelete}/>
      </div>
    )
  }
}

export default App;
