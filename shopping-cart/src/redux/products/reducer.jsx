const initialState = [
    {
      productId: "P001",
      productName: "Pizza",
      image: "https://img.dominos.vn/cach-lam-pizza-chay-0.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 12,
      quantity: 1,
    },
    {
      productId: "P002",
      productName: "Hamburger",
      image: "https://parami.vn/wp-content/uploads/Hamburger-with-Sesame-Seeds-Cheese-and-Veggies.png",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 16,
      quantity: 1,
    },
    {
      productId: "P003",
      productName: "Bread",
      image: "https://cdn.tgdd.vn/Files/2021/09/06/1380700/cach-lam-banh-mi-heo-quay-thom-ngon-cho-bua-sang-dinh-duong-202201041047079624.jpg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 13,
      quantity: 1,
    },
    {
      productId: "P004",
      productName: "Cake",
      image: "https://img.taste.com.au/9isesBer/taste/2016/11/caramello-cake-105070-1.jpeg",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 14,
      quantity: 1,
    },
  ];


const productsReducer = (products = initialState, action) => {
    switch(action.type) {
        default : 
            localStorage.setItem('products',JSON.stringify(products))
            return products
    }
}

export default productsReducer;