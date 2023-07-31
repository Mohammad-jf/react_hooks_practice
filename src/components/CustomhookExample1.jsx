import React from 'react'
import useFetch from './hooks/useFetch'

const CustomhookExample1 = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts', {});



    if (loading) {
        return <h3>loading....</h3>
    } else {
        return (
            <div>
                {data.map((item)=>(
                    <h6 key={item.id}>{item.title}</h6>
                ))}
            </div>
        )
    }
}

export default CustomhookExample1