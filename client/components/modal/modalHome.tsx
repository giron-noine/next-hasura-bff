import Link from "next/link";
import { Modal } from "./modal";

const TodoList = async () => {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todosJson = await todos.json();

  return (
    <ul>
      {todosJson.map((todo: any) => (
        <Link href={`/todos/add/${todo.title.replace(/\s/g, "")}`} key={todo.id}>
          <li>{todo.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export const ModalHome = ({
  open,
  text,
}: {
  open: boolean;
  text: string | string[] | undefined;
}) => {
  return (
    <div>
      <h1>Modal Home</h1>
      <Modal open={open} text={text} />
      <TodoList />
    </div>
  );
};
