
let a = [1,2,3,4,5]

let min = Number.MAX_VALUE
for(let i=0;i<a.length;i++){
    min = Math.min(min, a[i])
}

console.log(min)