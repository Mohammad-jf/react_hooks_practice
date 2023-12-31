import React, { useEffect, useRef, useState } from 'react'




const Todo = () => {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});
  const isMounted = useRef(true);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
            setTodo(data)
            setLoading(false);
        }, 3000)
      });


    return () => {
      isMounted.current = false;
    }
  }, [])


  return (
    loading ? <h3>lodaing .....</h3> : <h1>{todo.title}</h1>
  )
}

export default Todo