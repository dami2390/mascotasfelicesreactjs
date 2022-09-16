import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=> {
    const [productCartList, setProductCartList] = useState([]);

    const isInCart = (id) => {
        const elmIndex = productCartList.findIndex(product => product.id == id);
        if(elmIndex>=0) {
            return {exists: true, index:elmIndex};
        } else {
            return {exists: false, index:undefined};
        }
    }

    const addProduct = (product, qty) => {
        const newList = [...productCartList];
        

        const inCartObj = isInCart(product.id);
        if(inCartObj.exists) {
            const productListCopy = [...productCartList];
            productListCopy[inCartObj.index].cantidad = productListCopy[inCartObj.index].cantidad + qty;
            productListCopy[inCartObj.index].totalPrice = productListCopy[inCartObj.index].cantidad * productListCopy[inCartObj.index].price;
            setProductCartList(productListCopy)
        }else{
            const newProduct={...product, cantidad:qty, totalPrice:qty*product.price}
            const newList = [...productCartList];
            newList.push(newProduct);
            setProductCartList(newList);
        }
    }

    const deleteProduct = (idProduct)=>{
        const copyArray = [...productCartList];
        const newArray = copyArray.filter(elm=>elm.id !== idProduct);
        setProductCartList(newArray);
    }
    const clearProductCartList=()=>{
        setProductCartList([])
    }

    const getTotalProducts = ()=>{
        const totalProducts = productCartList.reduce((acc,item)=>acc + item.cantidad,0);
        return totalProducts;
    }



    return (

        <CartContext.Provider value={{productCartList, addProduct, deleteProduct, clearProductCartList, getTotalProducts }}>
            {children}
        </CartContext.Provider>
    )

}