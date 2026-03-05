
function divide(arr, low, high){
    if(low < high){
        let mid = (low + high) >> 1
        divide(arr, low, mid)
        divide(arr, mid + 1, high)
        merge(arr, low , mid, high)
    }
}

function merge(arr, low, mid, high){
    let i = low
    let j = mid + 1
    let temp = []
    while(i <= mid && j <= high){
        if(arr[i] <= arr[j]){
            temp.push(arr[i])
            i++;
        }else{
            temp.push(arr[j])
            j++;
        }
    }

    while(i <= mid){
        temp.push(arr[i])
        i++
    }
    while(j <= mid){
        temp.push(arr[j])
        j++
    }

    for(let i=low;i<=high;i++){
        arr[i] = temp[i-low]
    }
}


let arr = [5,4,3,2,1]

divide(arr, 0, arr.length - 1)

console.log(arr)