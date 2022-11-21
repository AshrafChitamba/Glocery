import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import NavBar from "./Components/NavBar"
import Categories from "./Components/Categories"
import CustomerReviews from "./Components/CustomerReviews"
import Features from "./Components/Features"
import Products from "./Components/Products"
import Blogs from "./Components/Blogs"
import Footer from "./Components/Footer"
import './Style.css'
import Home from './Components/Home'
import "react-multi-carousel/lib/styles.css";


const App = ()  => {
  return (
    <div className='container-fluid position-relative p-0 overflow-hidden'>
      <NavBar />
      <Home />
      <Features />
      <Products />
      <Categories />
      <CustomerReviews />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App
