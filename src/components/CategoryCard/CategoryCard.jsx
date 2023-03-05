import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CategoryCard.module.css'

function Category({ category }) {
    return (
        <div className={styles.container}>
            <Link to={category.url}>
                <p className={styles.label}>{category.label}</p>
                <img src={category.imageUrl} alt="" />
            </Link>
        </div>
    )
}

export default Category