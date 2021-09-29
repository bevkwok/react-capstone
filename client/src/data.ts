
const data = {
    products: [
        {
            _id: "1",
            name: "Comfortable Shoes",
            category: "Shoes",
            image: "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550182667158_org_1078x1078.jpg?v=1625688453",
            price: 50,
            countInStock: Math.floor(Math.random() * 10),
            rating: 4.5,
            numReviews: Math.floor(Math.random() * 300) + 1 ,
            description: "This is a pair of very comfortable shoes."
        },
        {
            _id: "2",
            name: "Comfortable Cotton Hoodie",
            category: "Tops",
            image: "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550344758861_org_810x810.jpg?v=1631114576",
            price: 80,
            countInStock: Math.floor(Math.random() * 10),
            rating: 4,
            numReviews: Math.floor(Math.random() * 300) + 1 ,
            description: "This is a very comfortable hoodie made with organic cotton."
        },
        {
            _id: "3",
            name: "Denim Wide Pants",
            category: "Bottoms",
            image: "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550182771923_01_org_810x810.jpg?v=1626969963",
            price: 70,
            countInStock: Math.floor(Math.random() * 10),
            rating: 5,
            numReviews: Math.floor(Math.random() * 300) + 1 ,
            description: "This is a denim wide pants made with organic cotton"
        },
        {
            _id: "4",
            name: "Stand Collar Dress",
            category: "Dresses",
            image: "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550182837513_01_org_810x810.jpg?v=1628862267",
            price: 60,
            countInStock: Math.floor(Math.random() * 10),
            rating: 3,
            numReviews: Math.floor(Math.random() * 300) + 1 ,
            description: "This is stand collar dress made with organic cotton."
        },
        {
            _id: "5",
            name: "Pocketable Coat",
            category: "Outerwear",
            image: "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550182360127_09_org_810x810.jpg?v=1626901943",
            price: 120,
            countInStock: Math.floor(Math.random() * 10),
            rating: 2.5,
            numReviews: Math.floor(Math.random() * 300) + 1 ,
            description: "This is light weight collarless pocketable coat"
        },
    ]
}

export default data
