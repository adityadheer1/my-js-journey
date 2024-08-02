// Reduce Method
const cart = [
    {
        course: "Javascript",
        price: 999
    },
    {
        course: "Python",
        price: 599
    },
    {
        course: "Data Science",
        price: 12999
    }
]

const total = cart.reduce( (acc, item) => acc + item.price, 0 )
console.log(total);