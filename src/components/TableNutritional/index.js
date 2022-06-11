import styles from './TableNutritional.module.scss'
import { data } from 'data/Nutritional'

export function TableNutritional() {
  return (
    <ul className={styles.info}>
      {data.map(item => (
        <li key={item.id}>
          <span>{item.type}</span>
          <span>{item.value}</span>
        </li>
      ))}
    </ul>
  )
}
