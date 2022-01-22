import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="#collapsibleNavbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            
                            <Link className="nav-link active" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <form className="d-flex mx-2">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> 
                    <form className='d-flex mx-2'>
                        <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
                            <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="switch1" name="example"/>
                            <label className="custom-control-label" htmlFor="switch1">Enable DarkMode</label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };


  
  