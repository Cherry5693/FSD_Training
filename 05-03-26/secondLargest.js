let arr = [1,2,3,4,5,6]

let fl = Number.MIN_VALUE
let sl = Number.MIN_VALUE

for(let i=0;i<arr.length;i++){
    let ele = arr[i]
    if(ele > fl){
        sl = fl
        fl = ele
    }else if(ele > sl){
        sl = ele;
    }
}


console.log(sl)
