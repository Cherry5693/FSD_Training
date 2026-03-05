let users = [
    {
        "name" : "Josh Gates",
        "age" : 1000
    },
    {
        "name" : "Venu Bhai",
        "age" : 20
    }
]


for(let ele of users){
    if(ele.age > 25){
        console.log(ele)
        return
    }
}