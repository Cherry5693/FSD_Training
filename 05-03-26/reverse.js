let a = [1,2,3,4,5]
let n = a.length
for(let i = 0;i<n/2;i++){
    let temp = a[i]
    a[i] = a[n-i-1]
    a[n-i-1] = temp;
}

console.log(a)