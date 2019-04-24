import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Menu>
            <Link to='/'>
                <Menu.Item>
                    Home
                 </Menu.Item>
            </Link>
            <Link to='/people'>
                <Menu.Item>
                    People
                </Menu.Item>
            </Link>
            <Link to='/planets'>
                <Menu.Item>
                    Planets
                </Menu.Item>
            </Link>
        </Menu>
    )
}

export default Navbar