import TodoApp from "../components/TodoApp.jsx";

function TodoPage() {
  return (
    <div className="page-container">
      <h1>To-Do App</h1>
      <p>Add and delete tasks below. This state lives in the TodoApp component.</p>
      <TodoApp />
    </div>
  );
}

export default TodoPage;
