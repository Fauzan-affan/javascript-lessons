const datas = [
    {name: "sansan1", age: 15},
    {name: "sansan2", age: 25},
    {name: "sansan3", age: 17},
]

const resultLists = datas.map(item => item) // Melooping data
const resultFilter = datas.filter(item => item.age === 25 && item.name === "sansan2")

console.log(resultFilter)