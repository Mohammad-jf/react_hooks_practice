import React, { useRef } from 'react'



const UseRefExample = () => {
    const inputRef = useRef();

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(inputRef.current.value);
        inputRef.current.value = 'hello'
        inputRef.current.style.backgroundColor = 'red'
    }


    
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="name">name</label>
            <input type="text" ref={inputRef} id='name' className="form-control mb-2" />
            <button className='btn btn-primary' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UseRefExample