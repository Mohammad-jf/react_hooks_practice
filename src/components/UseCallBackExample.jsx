import React, { useCallback, useState } from 'react'


const UseCallBackExample = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = useCallback(() => {
        setTasks((prev) => [...prev, 'someTasks']);

    }, [setTasks])


    return (
        <div>
            <Button addTask={addTask} />
            {tasks.map((task, index) => <p key={index}>{task}</p>)}
        </div>
    )
}

const Button = React.memo(({ addTask }) => {
    console.log('button rendered');
    return <div>
        <button className='btn btn-primary' onClick={addTask}>add Task</button>
    </div>
});
export default UseCallBackExample