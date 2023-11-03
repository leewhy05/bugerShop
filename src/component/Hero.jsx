import React from 'react'
import useFetch from '../customHook/UseFetch'
import ClipLoader from "react-spinners/ClipLoader";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import '../styles/Hero.css'


const Hero = () => {
    const {data:data, loading:loading} = useFetch('https://eggys.onrender.com/jazzyburger/all')
    const { data: data2, loading: loading2 } = useFetch(
        'https://eggys.onrender.com/jazzyburger/all'
      );
      console.log(data);

  return (
    <div className="container my-5 hero-container ">
        <h2>{loading && <ClipLoader />}</h2>
            <div className='flex lh-base text-center gap-5'>
            {data.map((datum)=>{
                const {title,price,image,_id} = datum
                return(
                    <div key={_id}>
                        <Card className='card'>
                    <Link to={`/SingleBurger/${_id}`}>
                    <Card.Img variant="top" src={image} className="" />
                    </Link>
                   
                    <Card.Body className=''>
                      <Card.Title>{title.slice(0, 15)}</Card.Title>
                      <Card.Text>${price}</Card.Text>
                      <Button variant="primary" className="btn-sm w-">Add to Cart</Button>
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