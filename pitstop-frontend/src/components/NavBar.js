import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'> Home Page </Link>
                </li>
                <li>
                    <Link to='/trips'> All Trips </Link>
                </li>
                <li>
                    <Link to='/trips/new'> New Trip </Link>
                </li>
                <li>
                    <Link to='/stops'> All Stops </Link>
                </li>
            </ul>
        </div>
    )
}
