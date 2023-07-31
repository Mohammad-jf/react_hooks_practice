import React, { useEffect, useMemo, useRef, useState } from 'react'



const UseMemoExample = () => {
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);
    const renders = useRef(1);

    // const sqrt = getSqrt(number);
    const sqrt = useMemo(() => {
        getSqrt(number)
    },[number]);

    useEffect(() => {
        renders.current = renders.current + 1
    })

    const onClick = () => {
        setInc((prev) => prev + 1)
    }

    return (
        <div>
            <input type="number" className='form-control w-25' value={number} onChange={(e) => setNumber(e.target.value)} />
            <h2 className='my-3'>sqrt of number is :{sqrt}</h2>
            <button className="btn btn-primary mt-3" onClick={onClick}>ReRender</button>
            <h3 className='mt-4'>Renders: {renders.current}</h3>
        </div>
    )
}

function getSqrt(number) {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
    console.log('expensive function called');
    return Math.sqrt(number)
}

export default UseMemoExample