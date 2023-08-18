import './yourcart.css'
import Cart from './Cart'
import { useSelector } from 'react-redux'
import EmptyCart from './EmptyCart'

export default function YourCart() {
    const carts = useSelector(state => state.carts)
    const notify = useSelector(state => state.notify)
 
  return (
    <div>
        <div className='py-[10px] text-[20px] mb-[20px]  bg-[#f2dede] text-[#bb6a69]'>
            <p className='font-semibold mx-[20px]'>YourCart</p>
        </div>
        <div className='px-[20px]'>
            <table className='w-100'> 
                <tr>
                    <th className='w-[5px]'>#</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td colSpan={6}><hr className='border-solid border-[1px] border-[#8b8a8a]'/></td>
                </tr>
                {
                    carts.length > 0 ? 
                    carts.map((item, index) => (<Cart key={item.productId} item={item} stt={index}/>)):
                    <EmptyCart />
                }
            </table>
            <div >
                {carts.length > 0 ? 
                    <div className='my-[5px]'>
                        <span className='mx-[10px]'>There are {carts.length} items in your shopping cart</span>
                        <span className='text-red-700 font-semibold ml-[50px]'>
                            {carts.reduce((accum, item) => (accum + item.price * item.quantity), 0)} USD 
                        </span>
                    </div> : 
                    <hr className='border-solid border-[1px] mx-[10px] border-[#8b8a8a]'/>
                }
            </div>
        </div>  
        <div className='bg-[#dff0d8] mt-[20px]'>
            <p className='flex items-center px-[30px] mt-[20px] h-[50px]'>{notify}</p>
        </div>
    </div>
  )
}
