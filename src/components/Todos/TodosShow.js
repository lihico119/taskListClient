import { useEffect } from 'react';
import './TodosShow.scss';
import todosApi from '../../api/todosApi';

const TodosShow = ({ todos, setTodos }) => {
    useEffect(() => {
        loadTasks();
    },[]);

    const loadTasks = () => todosApi.get('getasks').then(({ data }) => {
        data.isSuccess && setTodos(Object.values(data.ModelBo.Tasks));
    });

    const renderTasks = () => todos.map((task, index) => (
            <div className="taskBoxContainer" key={index}>
                <div className="taskBoxName">
                    <p>{task.TaskName}</p>
                </div>
                <div className="taskBoxPicture">
                    <img src={task.PicturePath} alt="no image to show" />
                </div>
            </div>
        ));

    
    return(
    <div className="showContainer">
        <div className="showTasks">
        {todos.length ? renderTasks() : <div> nothing to show</div>}
        </div>
        <div className="showButtonContainer">
            <input className="button" type="button" value="load all" onClick={() => loadTasks()} />
        </div>
    </div>
    )
}

export default TodosShow;