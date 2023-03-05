import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Copyrights.module.css'

export default function Copyrights() {
  return (
    <div className={styles.container}>
        <span>VSFashion.bg&#32;|&#32;</span>
        <Link to="/" className={styles.link}>Изработка на онлайн магазин</Link>
        <span>&#32;-&#32;Elenkov.net</span>
    </div>
  )
}