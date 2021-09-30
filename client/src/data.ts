
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
        {
            "name": "Water Repellent Hat",
            "category": "Accessories",
            "image": "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550344888124_org_928x928.jpg?v=1629233603",
            "price": 25,
            "countInStock": 12,
            "rating": 3.5,
            "numReviews": 11,
            "description": "This is water repellent hat"
        }
    ]
}

export default data

const postmanDate = {
    "products": [
        {
            "_id": "61533255fee38c0c7868ef2a",
            "name": "Comfortable Shoes",
            "category": "Shoes",
            "image": "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550182667158_org_1078x1078.jpg?v=1625688453",
            "price": 50,
            "countInStock": 12,
            "rating": 4.5,
            "numReviews": 16,
            "description": "This is a pair of very comfortable shoes.",
            "createdAt": "2021-09-28T15:18:45.982Z",
            "updatedAt": "2021-09-28T15:18:45.982Z",
            "__v": 0
        },
        {
            "_id": "615339cf680e560d2a0272ab",
            "name": "Comfortable Cotton Hoodie",
            "category": "Tops",
            "image": "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550344758861_org_810x810.jpg?v=1631114576",
            "price": 80,
            "countInStock": 20,
            "rating": 4,
            "numReviews": 9,
            "description": "This is a very comfortable hoodie made with organic cotton.",
            "createdAt": "2021-09-28T15:50:39.914Z",
            "updatedAt": "2021-09-28T15:50:39.914Z",
            "__v": 0
        },
        {
            "_id": "61533a0d680e560d2a0272ad",
            "name": "Denim Wide Pants",
            "category": "Bottoms",
            "image": "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550182771923_01_org_810x810.jpg?v=1626969963",
            "price": 73,
            "countInStock": 15,
            "rating": 4.5,
            "numReviews": 21,
            "description": "This is a denim wide pants made with organic cotton",
            "createdAt": "2021-09-28T15:51:41.416Z",
            "updatedAt": "2021-09-28T15:51:41.416Z",
            "__v": 0
        },
        {
            "_id": "61533a39680e560d2a0272af",
            "name": "Stand Collar Dress",
            "category": "Dresses",
            "image": "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550182837513_01_org_810x810.jpg?v=1628862267",
            "price": 68,
            "countInStock": 8,
            "rating": 3,
            "numReviews": 4,
            "description": "This is stand collar dress made with organic cotton",
            "createdAt": "2021-09-28T15:52:25.215Z",
            "updatedAt": "2021-09-28T15:52:25.215Z",
            "__v": 0
        },
        {
            "_id": "61553b2c5d2ed358f956668b",
            "name": "Mock Neck Long Sleeve T-Shirt",
            "category": "Top",
            "image": "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550344780268_06_org_928x928.jpg?v=1631637061",
            "price": 28,
            "countInStock": 32,
            "rating": 4,
            "numReviews": 19,
            "description": "This is a mock neck long sleeve t-shirt that's ribbed for soft and better fit",
            "createdAt": "2021-09-30T04:21:00.223Z",
            "updatedAt": "2021-09-30T04:21:00.223Z",
            "__v": 0
        },
        {
            "_id": "61553c5c5d2ed358f956668d",
            "name": "Water Repellent Hat",
            "category": "Accessories",
            "image": "https://cdn.shopify.com/s/files/1/0556/8066/3742/products/4550344888124_org_928x928.jpg?v=1629233603",
            "price": 25,
            "countInStock": 12,
            "rating": 3.5,
            "numReviews": 11,
            "description": "This is water repellent hat",
            "createdAt": "2021-09-30T04:26:04.128Z",
            "updatedAt": "2021-09-30T04:26:04.128Z",
            "__v": 0
        }
    ]
}
