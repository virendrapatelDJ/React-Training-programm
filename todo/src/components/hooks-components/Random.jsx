import { useEffect, useState } from "react"

function Random(){

    const [number , setNumber]  = useState(0)
    const [numbers , setNumbers]  = useState([])

    useEffect(() => {

       const ref =  setInterval(()=>{console.log("I will invoke after 1 sec" , new Date().getTime())} , 1000)
        // console.log("Component Render")

        return ()=>{
            console.log("Interval cleared")
            clearInterval(ref)
        }
    }, [])
    
    function generateRandomNumber(){
        console.log("Generate")

        setNumber(Math.floor(Math.random() * 100000))
    }

    function generateRandomNumbers (){
        const random = Math.floor(Math.random() * 100000)
        setNumbers([ ...numbers , random])
    }


    // return <div>
    //     <h1>Random Number Generator</h1>
    //     <button onClick={generateRandomNumber}>Click to Generate</button>

    //     <div >
    //         <h1>Random Number Is : {number}</h1>
    //     </div>
    // </div>

    return <div>
        <h1>Random Number Generator</h1>
        <button onClick={generateRandomNumbers}>Click to Generate</button>

        <div >
            <ol>{
                 numbers.map((number)=>{
                     return <li>{number}</li>
                 })
                }</ol>
        </div>
    </div>
}


export {Random}