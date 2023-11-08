import React, {useContext} from 'react'
import useFetch from '../customHook/UseFetch'
import ClipLoader from "react-spinners/ClipLoader";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../styles/Hero.css'
import { ToastContainer, toast } from 'react-toastify';
import CartContext from '../context/CartContext';


const Hero = () => {
  const {handleAddToCart} = useContext(CartContext)
    const {data:data, loading:loading} = useFetch('https://eggys.onrender.com/jazzyburger/all')
      console.log(data);
      const notify = () =>{ toast("A Burger has been added!",{position:toast.POSITION.TOP_LEFT, className: 'toast-message'});}

  return (
    <div className="container mt-5 hero-container ">
        <h2>{loading && <ClipLoader />}</h2>
            <div className='flex lh-base text-center gap-5'>
            {data.map((datum)=>{
                const {title,price,image,_id} = datum
                return(
                    <div key={_id}>
                        <Card className='card'>
                    <Link>
                    <Card.Img variant="top" src={image} className="w-" />
                    </Link>
                   
                    <Card.Body className=''>
                      <Card.Title>{title.slice(0, 15)}</Card.Title>
                      <Card.Text>${price}</Card.Text>
                      <Button onClick={()=>{handleAddToCart(datum);notify()}} variant="primary" className="btn-sm w-">Add to Cart</Button>
                      <ToastContainer/>
                    </Card.Body>
                  </Card>

                    </div>
                )
            })}
        </div>

     

    </div>
  )
}

export default Hero