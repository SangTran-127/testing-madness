import React from 'react'

const Header = ({ title }) => {
    return (
        <nav>
            <h1>{title}</h1>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>register</li>
            </ul>
        </nav>
    )
}

export default Header