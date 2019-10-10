import React ,{Component} from 'react';
import Header from './components/layout/Header';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

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
        completed: false

      },
      {
        
        id: 3,
        title:'Study',
        completed: false

      },
//to access state this.state.whatever
    ]
  }
  markComplete = (id) =>{
//to test console.log
this.setState({todos: this.state.todos.map(todo =>{
  if(todo.id === id){
    todo.completed = !todo.completed //whatever the opposite is
  }
  return todo;
})})
  }
  deleteTodo = (id) =>{
    //to test 
    //console.log(id)
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id )]})
  }
  render(){
   // console.log(this.state.todos);
   //pass array as property 
   return (
      <div className="App">
        <Header/>
        <AddTodo/>
        <Todos todos = {this.state.todos} markComplete={this.markComplete}
        deleteTodo = {this.deleteTodo}/>
      </div>
    )
  }
}

export default App;
