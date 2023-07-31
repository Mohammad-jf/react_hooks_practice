import React, { useEffect, useRef, useState } from 'react'


  

const UseRefExample2 = () => {
 const renders = useRef(1);
 const prevName = useRef('');
 const [name,setName] = useState('');

 useEffect(()=>{
  renders.current = renders.current +1;
  prevName.current = name;
 },[name])

  return (
    <div className='mt-5'>
        <h1>Renders:{renders.current}</h1>
        <h2>
            prevNameState:{prevName.current}
        </h2>
        <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value);
        }} className="forn-control mb-3" />
    </div>
  )
}

export default UseRefExample2