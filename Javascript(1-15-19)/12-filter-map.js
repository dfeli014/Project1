let arr = [
    {category: 'fruit', item: {name: 'mango', rating: 9}},
    {category: 'fruit', item: {name: 'apple', rating: 5}},
    {category: 'fruit', item: {name: 'avocado', rating: 10}},
    {category: 'vegetable', item: {name: 'potato', rating: 10}},
    {category: 'vegetable', item: {name: 'green peppers', rating: 8}},
    {category: 'dairy', item: {name: 'milk', rating: 3}},
    {category: 'dairy', item: {name: 'sour cream', rating: 6}},
    {category: 'grain', item: {name: 'wheat bread', rating: 7}},
    {category: 'grain', item: {name: 'white bread', rating: 4}},
    {category: 'grain', item: {name: 'sourdough', rating: 5.5}}
]

let filteredFruit = arr.filter((element) => {
    return element.category === 'fruit'
}).map(ele => {
    return {
        itemName: `${ele['item']['name']}`,
        rating: `${ele['item']['rating']}`
    }
});

console.log(filteredFruit);