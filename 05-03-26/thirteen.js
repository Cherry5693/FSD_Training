let users = [
  {
    id: 1,
    name: "Amit Sharma",
    age: 28,
    department: "IT",
    salary: 60000
  },
  {
    id: 2,
    name: "Priya Verma",
    age: 22,
    department: "HR",
    salary: 40000
  },
  {
    id: 3,
    name: "Rahul Singh",
    age: 30,
    department: "Finance",
    salary: 75000
  },
  {
    id: 4,
    name: "Sneha Reddy",
    age: 26,
    department: "IT",
    salary: 65000
  }
]

let departments = {}

for(let e of users){
    let dept = e.department
    if(departments[dept]){
        departments[dept]++
    }else{
        departments[dept] = 1
    }
}

console.log(departments)
