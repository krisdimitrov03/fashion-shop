import React from 'react'
import links from '../../constants/navbarLinks'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.container}>
            {
                links.map(l =>
                    <Link id={l.sale && styles.sale} key={l.key} className={styles.link} to={l.url}>
                        {l.icon}
                        <span>{l.label}</span>
                    </Link>)
            }
        </div>
    )
}

export default Navbar