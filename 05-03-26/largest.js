let arr = [1,2,3,4,5]
let max = Number.MIN_VALUE

for(let i=0;i<arr.length;i++){
    max = Math.max(max, arr[i])
}

console.log(max)