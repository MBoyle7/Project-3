import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import './MyNavbar.css';

export default class MyNavbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            BoozIt Members Portal
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/Members'>
                  Members
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/wine'>
                  Beer
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/breweries'>
                  Breweries
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

// export default class MyNavbar extends Component {
//     render() {
//         return (
//             <Navbar bg="dark" variant="dark" fixed="top">
//             <Navbar.Brand href="/home">BoozeApp</Navbar.Brand>
//             <Nav className="mr-auto">
//                 <Nav.Link href="/" to="/">Home</Nav.Link>
//                 <Nav.Link href="/beer" to="/beer">Beer</Nav.Link>
//                 <Nav.Link href="/wine" to="/wine">Wine</Nav.Link>
//                 <Nav.Link href="/liquor" to="/liquor">Liquor</Nav.Link>
//                 <Nav.Link href="/breweries" to="/breweries">Breweries</Nav.Link>
//                 <Nav.Link href="/Members" to = "/Members">Members</Nav.Link>
//             </Nav>
//             </Navbar>
//         )
//     }
// }

// export default Navbar;
