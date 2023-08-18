import ListProduct from "./components/list-products/ListProduct"
import YourCart from "./components/your-cart/YourCart"

function App() {
  
  return (
    <div>
      <div className="container mx-auto">
        <div className="mb-[20px]">
          <span className="text-3xl font-bold">MiniProject - Shopping Cart </span>
          <span className="text-xl">ReactJs</span>
        </div>
        <div className="grid gap-[30px] grid-cols-2">
            <ListProduct />
            <YourCart />
        </div>
      </div>
    </div>
  )
}

export default App
