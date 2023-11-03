import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs';

const NavBar = () => {
  return (
    <div className='sticky-top'>
        <div className='navbar-content bg-success pt-3'>
    <header className='container d-flex justify-content-between align-items-center'>
        <ul>
            <li className='list-unstyled'>
                <Link to='/' className='text-decoration-none'>
                <h2 className='fst-italic text-light'>BugerShop</h2>
                </Link>
            </li>
        </ul>
        <div className="w-50  d-none d-lg-block">
          <form className="">
            <input
              type='search'
              placeholder='search products, brands and categories......................................                                         🔍'
              className="w-100 form-control "
            />
          </form>
          </div>
        {/*nav links*/}
        <nav className='d-flex'>
           <ul className='d-flex gap-3 list-unstyled justify-content-between align-items-center'>
            <li>
                <p className='text-light pt-3 d-none d-lg-block'>✨order now and get within <span className='text-warning'>15mint!</span></p>
            </li>
            <li>
              <Link className='text-decoration-none text-light fs-4'>
              <BsCart4/>
              </Link>
            </li>
            <li>
                 <Link className='text-decoration-none text-light fs-4'>
                 Help
                 </Link>
            </li>
           </ul> 
        </nav>
    </header>
    </div>
    </div>
  )
}

export default NavBar