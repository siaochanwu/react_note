import * as actions from '../action/todolist'

const initState = {
    todoList: ['在線急', '喝杯咖啡在做也行'],
  };
  
  const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.ADD_TODO:
        return {
            ...state,
            todoList: [
                ...state.todoList,
                action.payload.todo
            ]
        }
        default:
            return state;
    }
  };
  
  export default todoReducer;