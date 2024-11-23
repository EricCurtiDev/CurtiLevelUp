const productos= [
    {
        id:'1',
        name:'Dead By Daylight',
        stock: 10,
        price: 20,
        genre: 'Horror',
        img: '/p1.jpg',
        category:'sales'
    },
    {
        id:'2',
        name:'GTA 5 : Premium Edition',
        stock: 10,
        price: 40,
        genre: 'Adventure',
        img: '/p2.jpg',
        category:'sales'
    },
    {
        id:'3',
        name:'Elden Ring',
        stock: 10,
        price: 60,
        genre: 'Adventure',
        img: '/p3.jpg',
        category:'new products'
    },
    {
        id:'4',
        name:'EA FC 24',
        stock: 10,
        price: 30,
        genre: 'Sports',
        img: '/p4.jpg',
        category:'sales'
    },
    {
        id:'5',
        name:'Ghost Of Tsushima',
        stock: 10,
        price: 70,
        genre: 'Adventure',
        img: '/p5.avif',
        category:'new products'
    },
    {
        id:'6',
        name:'Call Of Duty',
        stock: 10,
        price: 30,
        genre: 'Shooter',
        img: '/p6.jpg',
        category:'sales'
    },
    {
        id:'7',
        name:'Alan Wake 2',
        stock: 10,
        price: 60,
        genre: 'Adventure',
        img: '/p7.avif',
        category:'new products'
    },
    {
        id:'8',
        name:'Red Dead Redemption 2',
        stock: 10,
        price: 30,
        genre: 'Adventure',
        img: '/p8.jpg',
        category:'sales'
    },
    {
        id:'9',
        name:'Fortnite : Starter Pack Edition',
        stock: 10,
        price: 40,
        genre: 'Shooter',
        img: '/p9.avif',
        category:'new products'
    },
    {
        id:'10',
        name:'Destiny 2',
        stock: 10,
        price: 50,
        genre: 'Shooter',
        img: '/p10.jpg',
        category:'new products'
    },
    {
        id:'11',
        name:'The Callisto Protocol',
        stock: 10,
        price: 60,
        genre: 'Horror',
        img: '/p11.jpg',
        category:'new products'
    },
    {
        id:'12',
        name:'Rocket League : Starter Pack Edition',
        stock: 10,
        price: 30,
        genre: 'Sports',
        img: '/p12.webp',
        category:'sales'
    },
    {
        id:'13',
        name:'NHL 24',
        stock: 10,
        price: 30,
        genre: 'Sports',
        img: '/p13.jpg',
        category:'sales'
    }
]

export const getProducts = () =>{
    let error = false
    
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('There was an error, please try again later')
            }else{
                resolve(productos)
            }
        },2000)
    })
}

export const getOneProduct = (id) => {
    let error = false
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Error')
            }else{
                let onProduct = productos.find((item)=> item.id === id)
                resolve(onProduct)
            }
        },2000)
    })
}