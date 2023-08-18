/* eslint-disable react/prop-types */
import {useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/carts/action'

const Card = ({item}) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
 
  return (
    <div>
        <div className='flex justify-between  my-[20px] px-[20px]'>
          <div>
              <img className='w-[300px]' src={item.image} alt="pizza" />
          </div>
          <div className='mx-[15px]'>
              <p>{item.productName}</p>
              <p>{item.title}</p>
          </div>
          <div className='flex flex-col justify-between'>
              <input 
                className='
                  w-[60px] 
                  text-center 
                  border-solid 
                  border-2 
                  border-black' 
                  type="number"  
                  min={1} 
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
              <label
                onClick={() => dispatch(addToCart(item.productId, quantity))}
                className='
                  cursor-pointer 
                  select-none 
                  w-[60px] 
                  bg-orange-600 
                  text-white 
                  text-center 
                  py-[5px]'
                >
                  {item.price} USD
                </label>
          </div>
      </div>
      <hr className='mx-[20px] border-1 border-blue-500'/>
    </div>
  
  )
}
export default Card;