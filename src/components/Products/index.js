import { CardProduct } from 'components/CardProduct'
import { products } from 'data/Products'
import styles from './Products.module.scss'

export function Products() {
  return (
    <section className={styles.box}>
      <div className={styles.container}>
        <h2>LA FAMILIA VITALÍNEA</h2>
        <div className={styles.grid}>
          {products.map(item => (
            <CardProduct key={item.id} yogurt={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
