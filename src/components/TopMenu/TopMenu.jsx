import React from 'react'
import { BiHeart, BiPhoneCall, BiCart } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { RiArrowGoForwardFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import styles from './TopMenu.module.css'

function TopMenu() {
    const linksData = [
        {
            key: 1,
            url: '/favorites',
            icon: <BiHeart />,
            label: 'Любими'
        },
        {
            key: 2,
            url: '/profile',
            icon: <BsFillPersonFill />,
            label: 'Профил'
        },
        {
            key: 3,
            url: 'tel:0896269296',
            icon: <BiPhoneCall />,
            label: '0896269296'
        },
        {
            key: 4,
            url: '/cart',
            icon: <BiCart />,
            label: 'Кошница'
        },
        {
            key: 5,
            url: '/payment',
            icon: <RiArrowGoForwardFill />,
            label: 'Плащане'
        }
    ]

    return (
        <div className={styles.container}>
            {
                linksData.map(l =>
                    <Link key={l.key} className={styles.link} to={l.url}>
                        {l.icon}
                        <span className={styles.label}>
                            {l.label}
                        </span>
                    </Link>)
            }
        </div>
    )
}

export default TopMenu