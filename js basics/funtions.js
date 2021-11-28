
// function doSum(a , b){
//     var c = a + b 
//     return c
// }

// var sum = doSum

// console.log(sum(12, 23))
function returnFunction(){
    console.log('I Am return funtion')
}

function doWork(work){
    console.log("In Param" , work)
    work()
    return returnFunction
}

function sayHello()
{
    console.log("Hello ")
}


const value = doWork(sayHello)
value()


function doThisAfter1000ms(){
    console.log("I am running after 1000 ms")
}

setTimeout(doThisAfter1000ms , 1000)