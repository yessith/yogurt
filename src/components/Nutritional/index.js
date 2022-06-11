import { TableNutritional } from 'components/TableNutritional'
import styles from './Nutritional.module.scss'

export function Nutritional() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Información nutrimental</h2>
        <p>
          Vitalínea® Bebible Guayaba 217gr Valor promedio por porción de 217gr Porciones por envase:
          1
        </p>
        <p>
          <strong>Ingredientes:</strong> <br /> Leche descremada pasteurizada y/o reconstituida
          pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
          (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos lácticos.
        </p>
      </div>
      <TableNutritional />
    </section>
  )
}
