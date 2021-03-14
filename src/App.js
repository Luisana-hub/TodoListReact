import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {
    let [tasks, setTasks] = useState([]);
    let [task, setTask] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("se ejecuta el enter");

        const newTask = {
            id: new Date().getTime(),
            text: task,
        }
        setTasks([...tasks].concat(newTask))
        setTask('')

    }
    function deleteTask(id) {
        const updatedTasks = [...tasks].filter((task) => task.id !== id)

        setTasks(updatedTasks)
        console.log(updatedTasks.length)
    }


    return (
        <div className="App">
            <h1>Todos</h1>
            <div className="text-center mt-5">
                <div className="form">
                    <form onSubmit={onSubmit}>
                        <input type="text" onChange={e => setTask(e.target.value)} value={task} />
                    </form>
                    {tasks.map((task) => <div className= "contenedorTask" key={task.id}>
                        <div className="row tasklist">
                            <div className="col-10 taskText">{task.text}</div>
                            <div className="col-2 delete">
                                <button onClick={() => deleteTask(task.id)}>x</button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className="row justify-content-start">
                <div className="col-8 contador">
                    {tasks.length} Item Left
                </div>
            </div>
        </div>
    );
}

export default App;
