/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import { deleteProduct,updateCart } from '../../redux/carts/action';
import { useEffect, useState } from 'react';

export default function Cart({item, stt}) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(item.quantity)
  }, [])


  return (
    <tr>
        <td className='text-center'>{stt+1}</td>
        <td>{item.productName}</td>
        <td>{item.price} USD</td>
        <td className='text-center'>
            <input 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)}
                min={0} 
            />
        </td>
        <td>{item.price * quantity} USD</td>
        <td className='w-[180px]'>
            <button 
              onClick={() => dispatch(updateCart(item.productId, quantity))}
              className='
                p-[5px] 
                text-white 
                w-[70px] 
                btn-update 
                mr-[10px] 
                bg-blue-500'
            >
                Update
            </button>
            <button 
              onClick={() => dispatch(deleteProduct(item.productId))}
              className='
                p-[5px] 
                text-white 
                w-[70px] 
                btn-delete 
                bg-red-500'
              >
                Delete
            </button>
        </td>
    </tr>
  )
}
