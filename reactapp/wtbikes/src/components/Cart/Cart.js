import { useState, useContext } from "react"
import CartContext from "../cartContext/cartContext"
import CartItemList from "../CartItemList/CartItemList"



import { collection, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'
import { db } from '../services/firebase/index'

const Cart = () => {
    const [loading, setLoading] = useState(false)
    const { cart, totalQuantity, getTotal, clearCart } = useContext(CartContext)
    
    const total = getTotal()


    const CreateCart = () => {
        setLoading(true)

        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)

        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()

                    const prod = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = prod.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).catch(error => {
                if(error.type === 'out_of_stock') {

                } else {
                    console.log(error)
                }
            }).finally(() => {
                setLoading(false)
            })

    }

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if(totalQuantity === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    return (
        <>
            <h1>Cart</h1>
            <CartItemList productsAdded={cart}/>
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>

        </>
    )
}

export default Cart