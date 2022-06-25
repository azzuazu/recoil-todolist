import { useRecoilValue } from "recoil";
import { todoListState } from "./store/TodoListState";
import { TodoItemCreator } from "../components/TodoItemCreator";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      {/* <TodoListStats/> */}
      {/* <TodoListFilters/> */}
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
