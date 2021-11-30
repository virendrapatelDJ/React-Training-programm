import React, { useEffect, useRef, useState } from 'react'

 function Ref() {   

    const inputRef = useRef()
    const [inputValue , setValue] = useState()

    useEffect(()=>{
        console.log("REF USE EFFECT" , inputRef , inputRef.current)
    } , [])

    function readValue (){
        console.log("Value is" , inputRef.current.value)
    }

    return (
        <div>
           <h1 >Use Ref Demo</h1> 
           <input ref={inputRef}  type="text" name="" id="" />

           <button onClick={readValue}>Read value</button>
        </div>
    )
}

export {Ref}
