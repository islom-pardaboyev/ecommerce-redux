import { SlBasket } from "react-icons/sl";
import Logo from "../assets/images/logo.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {ACTIONS} from '../redux/actions'

function Navbar() {
    const dispatch = useDispatch()
    const savedProducts = useSelector((state) => state.savedProducts);
    console.log(savedProducts);
    
  return (
    <header className="shadow-2xl sticky top-0 z-10 bg-white">
      <div className="container flex items-center justify-between py-5">
        <a href="">
          <img src={Logo} width={200} alt="" />
        </a>
        <nav className="flex items-center font-medium text-xl space-x-4">
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <div className="relative cursor-pointer" onClick={() => dispatch({type:ACTIONS.TOGGLE_SIDEBAR})}>
            <SlBasket className="scale-125"/>
            <div className="absolute -top-3 scale-90 -right-3 size-5 text-white rounded-full flex items-center justify-center bg-red-500 text-xs font-bold">{savedProducts.length}</div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
