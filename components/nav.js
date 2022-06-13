import {useState} from 'react';
import Link from 'next/link'

const Nav = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <nav className="nav">
            <Link href="/" className='link'><a className="active">home</a></Link>
            <Link href="/about" className='link'><a className="">about</a></Link>
            <Link href="/contact" className='link'><a className="">contact</a></Link>
        </nav>
    )
}

const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

export default Nav;