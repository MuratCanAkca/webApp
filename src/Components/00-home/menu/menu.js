import React from 'react'
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/hello-world">Hello World</Link></li>
            
            <li>JSX
                <ul>
                  <li><Link to = "/03-jsx">JSX1 </Link></li>
                  <li><Link to = "/jsx2">JSX2 </Link></li>
                  <li><Link to = "/jsx3">JSX3 </Link></li>
                  <li><Link to = "/jsx4">JSX4 </Link></li>
                  <li><Link to = "/jsx5">JSX5 </Link></li>
             
                </ul>
            </li>
            <li>
                <Link to="/">Styles</Link>
                <ul>
                    <li><Link to="/">styles1</Link></li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default Menu