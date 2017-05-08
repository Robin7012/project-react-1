import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo:'test',
      todoList:[
        {id:'1',title:'第一个待办',status:'completed',deleted:false },
        {id:'2',title:'第二个待办',status:'completed',deleted:false },
        {id:'3',title:'第三个待办',status:'completed',deleted:true }
      ]
    }
  }
  render() {
    let todos  = this.state.todoList.map((item,index)=>{
      return <li>{item.title}</li>
    })

    return (
      <div className="App">
        <h1>我的代办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo}/>
        </div>
     
        <ol>
          {todos}
        </ol>
       </div>
    );
  }
}

export default App;
