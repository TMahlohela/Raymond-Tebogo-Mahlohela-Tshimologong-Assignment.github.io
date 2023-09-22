import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from './styles'
import { Button } from 'bootstrap';
// import { NavLink } from 'react-router-dom'

// import { logo } from '../assets'

const Header = () => {
  const [active, setActive] = useState('');

  return (
    <>
      <nav className={`${styles.panddingX} fixed items-center w-full flex py-6 top-0 z-20 bg-primary opacity-80`}>
        <div className='relative flex justify-start'>
          <p className='bg-number px-5 text-secondary'>Phone : 068 529 5764</p>
          <p className='bg-number px-5 text-secondary'>Email : sebitjasec7@gmail.com</p>
        </div>
        <div className='relative flex justify-end'>
          <Link 
              to="/"
              className='flex items-center px-5'
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
            <p className='bg-number px-5 text-secondary'>Portal</p>
          </Link>
          {/* < Button/> */}
        </div>
      </nav>
      <header>
        <div className='fixed justify-center pt-20 w-full flex max-w-7xl'>
          <h1 className='justify-between ml-14 mr-2 text-secondary uppercase'>Home</h1>
          <h1 className='justify-between ml-2 text-secondary uppercase'>About</h1>
          <h1 className='justify-between ml-2 text-secondary uppercase'>APS Calculator</h1>
          
          <Link 
            to="/"
            className='flex items-center px-5'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src="../assets/logo.svg" className='ml-2 w-9 h-9 object-contain' alt='LOGO'/>
          </Link>

          <h1 className='justify-between ml-2 text-secondary uppercase'>Gallery</h1>
          <h1 className='justify-between ml-2 text-secondary uppercase'>Contact Us</h1>
          <h1 className='justify-between ml-2 text-secondary uppercase'>Blog</h1>
        </div>
      </header>
    </>
  )
}

export default Header