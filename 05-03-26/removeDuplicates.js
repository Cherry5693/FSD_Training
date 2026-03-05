let arr = [1,1,2,3,4,4]

let map = new Map()

for(let i=0;i<arr.length;i++){
    let ele = arr[i]
    if(map.has(ele)){
        map.set(ele, map.get(ele) + 1)
    }else{
        map.set(ele, 1)
    }
}

let a = []
for(let ele of map.keys()){
    a.push(ele)
}

console.log(a)