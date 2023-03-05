import React from 'react'
import categories from '../../mock/categories'
import { latest, sales } from '../../mock/products'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import styles from './Home.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        {
          categories.map(c => <CategoryCard key={c.key} category={c} />)
        }
      </div>
      {/* <div className={styles.latest}>
        <p className={styles.title}>Нови продукти</p>
        {
          latest.map(p => <ProductCard key={p.key} product={p} />)
        }
      </div>
      <div className={styles.sales}>
        <p className={styles.title}>Промоции</p>
        {
          sales.map(p => <ProductCard key={p.key} product={p} />)
        }
      </div> */}
    </div>
  )
}