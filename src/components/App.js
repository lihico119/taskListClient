import { react, useState } from 'react';
import TodosInsert from './Todos/TodosInsert';
import TodosShow from './Todos/TodosShow';
import './App.scss';

const App = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div className="appContainer">
            <TodosInsert setTodos={setTodos} todos={todos} />
            <TodosShow setTodos={setTodos} todos={todos} />
        </div>
    )
}

export default App;