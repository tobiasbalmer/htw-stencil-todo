import { Component, h } from '@stencil/core';

@Component({
  tag: 'your-todo',
  styleUrl: 'your-todo.scss',
  shadow: true
})
export class YourTodo {

  render() {
    return (
    <div class="todo">
      <form>
        <input class="todo__new" type="text" name="todotext" placeholder="Todo text" value="" />
        <input class="todo__add" type="submit" value="hinzufügen" />
      </form>
          <ul class="todo__list">
              <li class="todo__entry">Todo text <button class="todo__remove">-</button></li>
              <li class="todo__entry todo__entry--done">Todo done <button class="todo__remove">-</button></li>
          </ul>
          <p class="todo__empty">Keine Einträge vorhanden.</p>
    </div>
    );
  }
}