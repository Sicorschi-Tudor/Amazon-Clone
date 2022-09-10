import React from 'react'
import { useStateValue } from '../../Functions/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

function Checkout() {

  const [ {basket, user} , dispatch] = useStateValue();


  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img className="checkout_ad" src='https://2syt8l41furv2dqan6123ah0-wpengine.netdna-ssl.com/wp-content/uploads/2013/08/amazon-banner.png' alt='' />

            <div>
              <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Your Shopping Basket</h2>

                {basket.map(item => (
                  <CheckoutProduct
                   id={item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating}
                   />
                ))}


            </div>
        </div>

        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout