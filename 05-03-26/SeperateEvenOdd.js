let arr = [1,1,2,3,4,4]

let even = []
let odd = []

for(let e of arr){
    if(e % 2 === 0) even.push(e)
    else odd.push(e)
}

console.log(even)
console.log(odd)