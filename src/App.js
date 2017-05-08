import React, { Component } from 'react';
import 'normalize.css'
import './reset.css'
import './App.css'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newTodo:'',
      todoList:[
        // {id:'1',title:'第一个待办',status:'completed',deleted:false },
        // {id:'2',title:'第二个待办',status:'completed',deleted:false },
        // {id:'3',title:'第三个待办',status:'completed',deleted:true }
      ]
    }
  }
  render() {
    let todos  = this.state.todoList.filter((item)=>{return !item.deleted}).map((item,index)=>{
      return <li key={index}>
                <TodoItem todo={item} onToggle = {this.toggle.bind(this)}
                onDelete={this.delete.bind(this)}
                />
             </li>
    })
    return (
      <div className="App">
        <h1>我的代办</h1>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)}
           onChange={this.changeTitle.bind(this)}
           
          />
        </div>
     
        <ol className="todoList">
          {todos}
        </ol>
       </div>
    );
  }

  changeTitle(event){
    this.setState({
      newTodo:event.target.value,
      todoList:this.state.todoList
    })
  }



   addTodo(event){
     this.state.todoList.push({
       id: idMaker(),
       title:event.target.value,
       status:null,
       delete:false
     })
      this.setState({
        newTodo:'',
        todoList:this.state.todoList
     })
   }
    toggle(e, todo){
      todo.status = todo.status === 'completed' ? '' : 'completed'
      this.setState(this.state) 
    }
    delete(e,todo){
      todo.deleted = true;
      this.setState(this.state) 
    }
}
 
export default App;

let id = 0;
function idMaker(){
  id += 1;
  return id;
}