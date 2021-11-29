import React, { useEffect, useState } from 'react'
import { Random } from './Random'

function Fetch() {

    const [show , setShow] = useState(true)

    

    function init(){
        console.log("Init...")
    }
    function onShowChange(){
        // console.log("show Changed...")
        // setShow(!show) // never do this
    }

    useEffect(init , [])
    useEffect(onShowChange , [show])

    return (
        <div>
            <h1>Fetch STudents</h1>
            <button onClick={ ()=>{ setShow(!show) } }>Toggle</button>
            {
                show ? <Random/> : null 
            }
        </div>
    )
}

export {Fetch}
