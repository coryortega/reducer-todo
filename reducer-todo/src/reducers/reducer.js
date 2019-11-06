
export const initialState = {
    counter: 2,
    todos: [{
      id: 3892987589,
      completed: false,
      name: 'Learn about reducers',
    }],
  };
  
  export const reducer = (state, action) => {
      console.log(action)
      
    switch (action.type) {
      case "add":
        {
          const newCounter = state.counter + 1;
          const newTodo = {
            name: action.name,
            id: newCounter,
            completed: false
          };
          return {
            counter: newCounter,
            todos: [...state.todos, newTodo],
          };
        }
        case "remove":
      {
        const idx = state.todos.findIndex(t => t.id === action.id);
        const todos = Object.assign([], state.todos);
        todos.splice(idx, 1);
        // todos.map( item => {})
        return {
          counter: state.counter,
          todos: todos,
        };
      }
      default:
        return state;
    }
  };
    


