import { BiHome, BiDiamond, BiMaleSign, BiHeart, BiStar, BiPhoneCall } from 'react-icons/bi'
import { BsPercent, BsBook } from 'react-icons/bs'

const links = [
    {
        key: 1,
        url: '/',
        label: 'Начало',
        icon: <BiHome />,
        sale: false
    },
    {
        key: 2,
        url: '/products/women',
        label: 'Жени',
        icon: <BiDiamond />,
        sale: false
    },
    {
        key: 3,
        url: '/products/men',
        label: 'Мъже',
        icon: <BiMaleSign />,
        sale: false
    },
    {
        key: 4,
        url: '/latest',
        label: 'Най-нови',
        icon: <BiHeart />,
        sale: false
    },
    {
        key: 5,
        url: '/bestsellers',
        label: 'Най-продавани',
        icon: <BiStar />,
        sale: false
    },
    {
        key: 6,
        url: '/sale',
        label: 'SALE',
        icon: <BsPercent />,
        sale: true
    },
    {
        key: 7,
        url: '/blog',
        label: 'Блог',
        icon: <BsBook />,
        sale: false
    },
    {
        key: 8,
        url: '/contacts',
        label: 'Контакти',
        icon: <BiPhoneCall />,
        sale: false
    }
];

export default links;