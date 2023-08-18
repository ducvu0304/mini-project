import Card from './Card'
import { useSelector } from 'react-redux'

export default function ListProduct() {
  const products = useSelector(state => state.products)
  
  return (
    <div className='container mx-auto '>
        <div className='container mx-auto py-[10px] text-[20px] bg-blue-800'>
            <div className='row'></div>
            <p className='text-white px-[20px]'>ListProduct</p>
        </div>
        <div className='container mx-auto'>
            {products.map(item => (
               <Card key={item.productId} item={item}/>
            ))}
           
        </div>
    </div>
  )
}
