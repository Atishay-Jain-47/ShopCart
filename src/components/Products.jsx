import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-hot-toast'
import {add, remove} from '../redux/slices/CartSlice'

function Products({post}) {
    console.log("Printing Post....")
    console.log(post);

    const {cart} = useSelector((state) => state);
    // console.log("Printing Cart");
    // console.log(cart);
    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("Item removed from cart")
    }

    function addToCart(){
        dispatch(add(post));
        toast.success("Item added to cart!")
    }

  return (
    <div className='group h-[395px] flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[-20px_-20px_60px_25px_rgba(0,0,0,0.2),20px_20px_60px_25px_rgba(45,78,255,0.15)]'>
        <div>
            <p className='text-gray-700 font-bold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
        </div>

        <div>
            <p className='w-40 text-gray-400 font-normal text-[11px] text-left'>{post.description.split(' ').slice(0,10).join(' ') + "..."}</p>
        </div>

        <div className='h-[180px]'>
            <img src={post.image} className='w-full h-full object-cover' />
        </div>

        <div className='flex justify-between gap-12 w-full mt-5'>
            <div>
                <p className='text-green-600 font-semibold '>${post.price}</p>
            </div>

            {
                cart.some((p) => p.id === post.id) ?
                (<button onClick={removeFromCart}
                    className='text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 font-semibold px-3 uppercase group-hover:bg-gray-700 group-hover:text-white cursor-pointer transition duration-300 ease-in'
                >
                    Remove Item
                </button>) :

                (<button onClick={addToCart}
                    className='text-gray-700 border-2 border-gray-700 rounded-full text-[12px] p-1 font-semibold px-3 uppercase group-hover:bg-gray-700 group-hover:text-white cursor-pointer transition duration-300 ease-in'
                >
                    Add to cart
                </button>)

            }
        </div>

    </div>
  )
}

export default Products

