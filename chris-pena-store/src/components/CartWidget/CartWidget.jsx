import cartIcon from "../../assets/cart-icon.png"
import "./CartWidget.css"

function CartWidget() {
  return (
    <div className="carrito">
      <img src={cartIcon} alt="Cart" className="cart-icon"/>
      <span className="badge">3</span>
    </div>
  )
}

export default CartWidget

