import { createContext, useState } from "react";
import { getProductData } from "../data/Items";


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteFromCart: () => { },
    getTotalAmount: () => { },
})

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([])

    const getProductQuantity = (id) => {
        const productQuantity = cartProducts.find((item) => item.id === id)?.quantity
        if (productQuantity === undefined) {
            return 0
        }
        return productQuantity
    }

    const addItemToCart = (id) => {
        const quantity = getProductQuantity(id)
        if (quantity === 0) {
            setCartProducts([...cartProducts, { id: id, quantity: 1 }])
        } else {
            setCartProducts(
                cartProducts.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
            )
        }
    }

    const deleteFromCart = (id) => {
        setCartProducts((cartProducts) =>
            cartProducts.filter((item) => {
                return item.id != id
            })
        )
    }

    const removeItemFromCart = (id) =>{
        const quantity = getProductQuantity(id)
        if(quantity === 1){
            deleteFromCart(id)
        }else{
            setCartProducts(
                cartProducts.map((item) => item.id === id ? {...item, quantity: item.quantity -1}: item)
            )
        }
    }

    const getTotalAmount = ()=>{
        let totalAmount = 0
        cartProducts.map((item)=> {
            const productData = getProductData(item.id)
            totalAmount += productData.price * item.quantity
        })
        return totalAmount
    }

    const ContextValue = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount
    }
    return (
        <CartContext.Provider value={ContextValue} >{children}</CartContext.Provider>
    )
}