import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.nav}>
                    <div className={styles.linkSection}>
                        <span className={styles.title}>Информация</span>
                        <Link to="/">За нас</Link>
                        <Link to="/">Доставка и плащане</Link>
                        <Link to="/">Замяна и връщане</Link>
                        <Link to="/">Общи условия</Link>
                        <Link to="/">Декларация за поверителност</Link>
                    </div>
                    <div className={styles.linkSection}>
                        <span className={styles.title}>Допълнително</span>
                        <Link to="/">Промоции</Link>
                        <Link to="/">Ваучери</Link>
                        <Link to="/">Информационен бюлетин</Link>
                    </div>
                    <div className={styles.linkSection}>
                        <span className={styles.title}>Моят профил</span>
                        <Link to="/">Вход</Link>
                        <Link to="/">Регистриране</Link>
                        <Link to="/">История на поръчките</Link>
                        <Link to="/">Профил</Link>
                        <Link to="/">Любими</Link>
                    </div>
                </div>
                <div className={styles.logo}>
                    <img src="images/footer-logo.png" alt="" />
                </div>
            </div>

        </div>
    )
}