import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

function CartItem({item, itemIndex, isLast}) {

    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(item.id));
        toast.error("Item Removed From Cart")
    }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5" >
        
        <div className='flex flex-col'>

            <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>
                <div className="w-[30%]">
                    <img className="object-cover w-full h-full" src={item.image} alt="" />
                </div>

                <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                    <h1 className="text-2xl text-slate-800 font-semibold">{item.title}</h1>
                    <h1 className="text-lg font- text-slate-700 ">{item.description.split(' ').slice(0,15).join(' ') + "..."}</h1>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-lg text-green-600">${item.price}</p>
                        <div  className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                            onClick={removeFromCart}>
                            <AiFillDelete />
                        </div>                    
                    </div>

                </div>
            </div>

            {
                !isLast && 
                <div className='h-[2px] w-full bg-gray-500 mt-4 '></div>
            }

        </div>
    </div>
  )
}

export default CartItem

