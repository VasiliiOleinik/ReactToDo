import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";

import "./app.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Cofee", important: false, id: 1 },
      { label: "Drink Beer", important: true, id: 2 },
      { label: "Drink Whiskey", important: true, id: 3 }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      // Неизменность стейта. Перезапись массива без изменения изначального состояния
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}
