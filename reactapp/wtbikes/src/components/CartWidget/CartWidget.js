import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../cartContext/cartContext';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)


    return(
        <div className="CartWidget">
            <p>Carrito=</p>
            { totalQuantity }
        </div>
    );
}

export default CartWidget