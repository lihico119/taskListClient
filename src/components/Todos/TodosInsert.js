import { useState } from 'react';
import './TodosInsert.scss';
import todosApi from '../../api/todosApi';

const TodosInsert = ({ setTodos, todos }) => {
    const [text, setText] = useState('');
    const [file, setFile] = useState([]);

    const onSubmit = function(e) {
        e.preventDefault();
        todosApi.post('insertask',{ TaskName: text, PicturePath: file });
        setTodos([...todos, { TaskName: text, PicturePath: file }]);
        setText('');
        setFile([]);
    }

    const onTextChange = function(e) {
        setText(e.target.value);
    }

    const onChangeFile = function(e) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setFile(reader.result);
    }

    return(
        <div className="insertContainer">
            <div className="formContainer">
                <form onSubmit={onSubmit}>
                    <div>
                        <label>
                            enter task name:
                        </label>
                        <input className="textBox" type="text" value={text} onChange={onTextChange} placeholder="please insert task name" />
                    </div>
                    <div>
                        <label>
                            choose proper picture
                        </label>
                        <input type="file" onChange={onChangeFile} placeholder="please insert proper picture" />
                    </div>
                    <div>
                        <input className="button" type="submit" value="add" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TodosInsert;