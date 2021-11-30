import React, { useCallback, useRef, useState } from 'react'

function Callback() {
    const inputRef = useRef()
    const [ans , setAns] = useState(0)
    const [number , setNumber] =  useState(0)

    function calculate  (){
        
        setAns(inputRef.current.value * 4)
        console.log("Clicked on Button")
    }

    const handleClick = useCallback(()=>calculate(number) , [number])
    const handleChange = ()=>{
        // number
    }

    return (
        <div>
            <p>Call Back Demo</p>

            <input onChange={handleChange} type="number" ref={inputRef} />
           <button onClick={handleClick}>In Side Call Back</button> 

           <h1>Answer : {ans}</h1>
        </div>
    )
}

export {Callback}
