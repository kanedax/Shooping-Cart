const productList = [
    {
        id: '1' ,
        title : 'Amplifier' ,
        price : 99 ,
        image : '/images/amplifier.png'
    },
    {
        id: '2' ,
        title : 'Apple watch' ,
        price : 120 ,
        image : '/images/appleawtch.png'
    },
    {
        id: '3' ,
        title : 'Headphone' ,
        price : 150 ,
        image : '/images/headphone.png'
    },
    {
        id: '4' ,
        title : 'iPhone' ,
        price : 199 ,
        image : '/images/iPhone.png'
    },
    {
        id: '5' ,
        title : 'Keyboard' ,
        price : 180 ,
        image : '/images/keyboard.png'
    },
    {
        id: '6' ,
        title : 'Microphone' ,
        price : 220 ,
        image : '/images/microphone.png'
    },
    {
        id: '7' ,
        title : 'Mouse' ,
        price : 250 ,
        image : '/images/mouse.png'
    },
    {
        id: '8' ,
        title : 'Speaker' ,
        price : 300 ,
        image : '/images/speaker.png'
    },
]

const getProductData = (id)=>{
    let productData =  productList.find((item) => item.id === id)
    return productData
}

export { productList, getProductData }