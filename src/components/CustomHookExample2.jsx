import React from 'react'
import useLocalStorage from './hooks/useLocalStorage';



const CustomHookExample2 = () => {
    const [task, setTask] = useLocalStorage('task', '');
    const [tasks, setTasks] = useLocalStorage('tasks', []);

    const onsubmit = (e)=>{
        e.preventDefault();
        const taskObj = {
            task,
            completed:false,
            date:new Date().toLocaleDateString(),

        }

        setTasks([...tasks,taskObj]);

    }

    return (
        <>
        <form className='w-50' onSubmit={onsubmit}>
            <div className="mb-3">
                <label htmlFor="task" className="form-label">Task</label>
                <input type="text" className='form-control w'
                    value={task} onChange={(e) => setTask(e.target.value)} />
            </div>
                    <button type='submit' className='btn btn-primary'>submit</button>
        </form>
        <hr/>
        {tasks.map((item)=>(
            <h3 key={item.date}>{item.task}</h3>
        ))}
        </>
    )


}

export default CustomHookExample2