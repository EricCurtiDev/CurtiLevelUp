import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../services/firebase'

const Checkout = () => {
        const [user, setUser] = useState({})
        const [validate, setValidate] = useState('')
        const [orderId, setOrderId] = useState('')
        const {cart, getTotalPrice, clear}= useContext(CartContext)
        const userData = (e)=>{
            setUser(
                {
                    ...user,
                    [e.target.name]: e.target.value
                }
            )
        }
        const completePurchase = (e)=>{
            e.preventDefault()
            if(!user.name || !user.lastname || !user.email || !user.address){
                alert('Fields are required')
            }else if(user.email !== validate){
                alert('Emails must match')
            }else{
                let order = {
                    buyer: user,
                    cart: cart,
                    total: getTotalPrice(),
                    date: serverTimestamp()
                }
                const ventas = collection(db, "orders")
                addDoc(ventas,order)
                .then((res)=>{
                    setOrderId(res.id)
                    clear()
                })
                .catch((error)=> console.log(error))
            }
                
        }

    return(
        <div>
            {orderId !== '' ? <div>
                <h4>All info is collected!</h4>
                <h5>Order Id is : {orderId}</h5>
                <Link to ='/'>Go Home</Link>
            </div>
            :
            <div>
            <h4>Fill your info</h4>
            <form onSubmit={completePurchase}>
                <input type="text" name='name' placeholder='Your Name' onChange={userData}/>
                <input type="text" name='lastname' placeholder='Your Last Name' onChange={userData}/>
                <input type="text" name='address' placeholder='Your Address' onChange={userData}/>
                <input type="text" name='email' placeholder='Your Email' onChange={userData}/>
                <input type="text" name='second-email' placeholder='Confirm Your Email' onChange={(e)=> setValidate(e.target.value)}/>
                <button type='submit'>Send</button>
            </form>
        </div>}
        </div>
    )
}

export default Checkout