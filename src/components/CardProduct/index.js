import styles from './CardProduct.module.scss'

export function CardProduct({ yogurt }) {
  return (
    <article className={styles.card}>
      <figure>
        <img src={yogurt.image} alt={yogurt.name} />
      </figure>
      <h3>{yogurt.name} </h3>
    </article>
  )
}
