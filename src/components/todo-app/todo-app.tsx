import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'todo-app',
  styleUrl: 'todo-app.scss',
  shadow: true
})
export class TodoApp {

  @State() todolist = [
    { id: 0, text: 'nothing', done: true },
    { id: 1, text: 'more of nothing', done: false },
    { id: 2, text: 'even more that before of nothing', done: false }
  ];

  toggleState(id) {
    const newlist = this.todolist.map(todo => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.todolist = [...newlist];
  }

  addTodo(e) {
    e.preventDefault();
    if(!e.target.todotext.value) {
      return;
    }
    const newEntry = { id: this.createId(), text: e.target.todotext.value, done: false };
    this.todolist = [...this.todolist, newEntry];
    e.target.todotext.value = '';
  }

  removeTodo(id) {
    const newlist = this.todolist.filter(todo => todo.id !== id);
    this.todolist = [...newlist];
  }

  createId() {
    if(!this.todolist.length) {
      return 0;
    }
    const highest = this.todolist.reduce((prev, current) => (prev.id > current.id) ? prev : current);
    return highest.id + 1;
  }

  render() {
    return (
    <div class="todo">
      <form onSubmit={e => this.addTodo(e)}>
        <input class="todo__new" type="text" name="todotext" placeholder="Todo text" value="" />
        <input class="todo__add" type="submit" value="hinzufügen" />
      </form>
        {this.todolist.length ? (
          <ul class="todo__list">
            {this.todolist.map(todo => (
              <li class={todo.done ? 'todo__entry todo__entry--done' : 'todo__entry'} onClick={this.toggleState.bind(this, todo.id)}>{todo.text} <button class="todo__remove" onClick={() => this.removeTodo(todo.id)}>-</button></li>
            ))}
          </ul>
        ) : (
          <p class="todo__empty">Keine Einträge vorhanden.</p>
        )}

    </div>
    );
  }
}