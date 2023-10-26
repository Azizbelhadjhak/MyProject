import './App.css';
import Search from "./components/Search";
import ProductsList from './components/ProductsList';
import { useState } from 'react'
import CartList from './components/CartList';
import ProductDetails from './components/ProductDetails';
const App = () => {
const [menuView, setMenuView] = useState(false);
const [view,setView] = useState("productList");
const [category,setCategory] = useState("")
const [productName,setProductName] = useState("")
const [productDetails,setProductDetails] = useState({})
const toggleMenu = ()=> {
  setMenuView(!menuView)
}
const switchView = (x,y) => {
  setView(x)
  setProductDetails(y)
}
const handleChange = (x) => {
  setProductName(x)
}

  return (
    <div className="App">
        <div className="nav">
          <span className="logo" onClick={()=>switchView ("productList")}>TEK STORE</span>
          { view ==="productList" &&<Search handleChange={handleChange}/>}
        { view ==="productList" && <span className="items" onClick={ ()=> {
toggleMenu ();
setCategory("")
        }
          
          }>
          &#9660;
            CATEGORIES
            &#9660;
          </span>}
          <span className="items" onClick={()=>switchView ("cart")}>
            🛒
            CART
          </span>
        </div>
       {menuView && <div className="menu">
            <span className='menu-item' onClick = {
              (event) => setCategory (event.target.innerText)
            }>computers</span>
            <span className='menu-item' onClick = {
              (event) => setCategory (event.target.innerText)
            }>phones</span>
            <span className='menu-item' onClick = {
               (event) => setCategory (event.target.innerText)
            }>electronics</span>
          </div>}
          {view ==="productList" && <ProductsList category = {category} productName = {productName} switchView = {switchView} />}
          {view ==="cart"&&<CartList/>}   
          {view ==="details"&&<ProductDetails  productDetails ={productDetails}/>}   
    </div>
  );
}

export default App;
