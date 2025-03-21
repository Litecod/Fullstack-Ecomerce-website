import { useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {

    const {navigate, backendUrl, token, setCartItems} = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null
            }

            const response = await axios.post(backendUrl + "/api/order/verifyStripe", {success, orderId}, {headers:{token}})

            if (response.data.success) {
                navigate("/orders")
                setCartItems({})
            }else {
                navigate("/cart")
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const verifyPaymentPaystack = async () => {
        try {
            if (!token) {
                return null
            }

            const response = await axios.post(backendUrl + "/api/order/verifyPaystack", {success, orderId}, {headers:{token}})

            if (response.data.success) {
                navigate("/orders")
                setCartItems({})
            }else {
                navigate("/cart")
            }

            console.log(response.data.success)
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifyPayment()
        verifyPaymentPaystack()
    }, [token])
  return (
    <div>
        verify
    </div>
  )
}

export default Verify