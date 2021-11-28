

const pure = (a)=>{
    let ans = 1
    for(let i = 2 ; i <= a ; i++){
        ans*=i
    }
    return ans
}