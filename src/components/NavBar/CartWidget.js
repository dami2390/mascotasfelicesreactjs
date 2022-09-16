import { TbShoppingCart } from 'react-icons/tb';
import './CartWidget.css'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'


function Carrito () {
    const {getTotalProducts, productCartList} = useContext(CartContext);
    return (
        <div>
            {
                productCartList.length>0 &&
                <>
                    <Link to="/cart">
                        <TbShoppingCart/>
                    </Link>
                    <span style={{textDecoration: 'none',width:"50px", heigth:"50px", fontSize:"20px", color:"white"}}>
                        {getTotalProducts()}
                    </span>
                </>
            }
        </div>
    )
} 

export default Carrito

