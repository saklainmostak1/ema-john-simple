import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () =>{
    const productsData = await fetch('products.json')
    const products = await productsData.json();

    const savedCart = getStoredCart()
    const initialCart = []

    for(const id in savedCart){
        const addProducts = products.find(product => product.id === id )
        if(addProducts){
           const quantity = savedCart[id]
            addProducts.quantity = quantity
            initialCart.push(addProducts)

        }
    }

    return{ products , initialCart}
}