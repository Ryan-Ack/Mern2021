import { Link } from '@reach/router'
import React from 'react'


const NavBar = () => {
    return (
        <div>
            These links do not work
            <br />
            <Link to="/details"> Details </Link> |
            <Link to="/planets"> Planets </Link> |
            <Link to="/people"> People </Link> |
            <Link to="/starships"> Star Ships </Link> |
            <Link to="/vehicles"> Vehicles </Link> |
            <Link to="/species"> Species </Link>
            <Link to="/films"> Films </Link>
            <br />
            These links do not work

        </div>
    )
}

export default NavBar
