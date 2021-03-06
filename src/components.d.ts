/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { JSX } from '@stencil/core';


export namespace Components {
  interface TodoApp {}
  interface YourTodo {}
}

declare namespace LocalJSX {
  interface TodoApp extends JSXBase.HTMLAttributes {}
  interface YourTodo extends JSXBase.HTMLAttributes {}

  interface IntrinsicElements {
    'todo-app': TodoApp;
    'your-todo': YourTodo;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


declare global {



  interface HTMLTodoAppElement extends Components.TodoApp, HTMLStencilElement {}
  var HTMLTodoAppElement: {
    prototype: HTMLTodoAppElement;
    new (): HTMLTodoAppElement;
  };

  interface HTMLYourTodoElement extends Components.YourTodo, HTMLStencilElement {}
  var HTMLYourTodoElement: {
    prototype: HTMLYourTodoElement;
    new (): HTMLYourTodoElement;
  };

  interface HTMLElementTagNameMap {
    'todo-app': HTMLTodoAppElement;
    'your-todo': HTMLYourTodoElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

