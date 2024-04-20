const phoneList = [
    {
        id:0,
        brand:'Apple',
        model: 'Iphone 15',
        price: 899,
        specs: '8GB + 128GB'
    },
    {
        id:1,
        brand:'Apple',
        model: 'Iphone 13',
        price: 699,
        specs: '8GB + 64GB'
    },
]

const productList = document.querySelector('.productsList')

for(let product of phoneList) {
    productList.innerHTML += `  ${product.model} <br> `
}



