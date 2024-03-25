import React, { memo, useCallback, useEffect, useState } from 'react';
// import axios from 'axios';
// import { fetchProducts,ProductsStateType } from '../reduxstore/productsSlice';
// import { fetchUsers,UsersStateType } from '../reduxstore/usersSlice';
import {useDispatch,useSelector } from 'react-redux';
import { RootState } from '../reduxstore/store';
import { useNavigate } from 'react-router-dom';
// import { fetchCartItems } from '../reduxstore/cartSlice';
// import { updateCartItems ,UpdateCartStateType} from '../reduxstore/updatecartSlice';
import Hero from './Banner/Hero';


const Home = memo(() => {
  const navigate=useNavigate()
  const user = useSelector((state: RootState) => state.userDetails.userDetails)
    
  useEffect(() => {
      if (user) {
          navigate('/products')
        } else {
          navigate('/')
        }

  }, [user])
  // const dispatch=useDispatch()
  // const users=useSelector((state:RootState)=> state.cart.cartItems)
  // const Items=[{"_id":"65cc84a4a897e49b4c752f23","id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"_id":"65cc84a4a897e49b4c752f24","id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"_id":"65cc84a4a897e49b4c752f25","id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}}]

  // const testDispatch=useCallback(()=>{
  //   console.log(users)
  //   dispatch(updateCartItems({userId:"Prashanth",updateCartlist:Items}))
  // },[users])

  // useEffect(() => {
  //   dispatch(fetchUsers());
  //   dispatch(fetchProducts());
  //   dispatch(fetchCartItems("bhanu"))
  // }, []);

    return (
        <div>
          <Hero/>
        </div>
    );
});

export default Home;