import React from 'react'
import { BiSearch, BiCart } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <Link to="/search"><BiSearch /></Link>
            </div>
            <div className={styles.logo}>
                <Link to="/">
                    <img src="images/logo.png" alt="" />
                </Link>
            </div>
            <div className={styles.cart}>
                <span className="label">
                    0 продукти - 0.00 лв.
                </span>
                <Link to="/cart"><BiCart /></Link>
            </div>
        </div>
    )
}

export default Header