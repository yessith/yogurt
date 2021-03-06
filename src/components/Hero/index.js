import yogurt from 'assets/img-bote-fresa@2x.png'
import kcal from 'assets/img-100-kcal.png'
import sello from 'assets/img-sello-avalado@2x.png'
import arrow from 'assets/flecha@3x.png'
import fresaLeft from 'assets/img-fresas-4@2x.png'
import fresaRight from 'assets/img-fresas-3@2x.png'
import styles from './Hero.module.scss'

export function Hero() {
  return (
    <section className={styles.hero}>
      <img className={styles.fresaLeft} src={fresaLeft} alt='fresa' />
      <div className={styles.container}>
        <div className={styles.yogurt}>
          <figure>
            <img src={yogurt} alt='yogurt de fresa' />
          </figure>
        </div>

        <article className={styles.content}>
          <div className={styles.head}>
            <div className={styles.select}>
              <span>Sabor:</span>
              <span>Fresa</span>
              <span>Guayaba</span>
              <span>Toronja</span>
            </div>
            <h1>Vitalínea® Bebible Fresa 217 gr.</h1>
          </div>
          <div className={styles.description}>
            <p>
              ¡La presentación ideal para llevar contigo! Vitalínea bebible es la opción si eres de
              las personas que siempre están activas y quieren probar algo sano, rico y práctico.
            </p>
            <button>Comprar en Walmart</button>
          </div>
          <div className={styles.stamp}>
            <img src={sello} alt='sello-avalado' />
            <img src={kcal} alt='Kcal' />
          </div>
        </article>
      </div>
      <div className={styles.arrow}>
        <img src={arrow} alt='flecha' />
      </div>
      <img className={styles.fresaRight} src={fresaRight} alt='fresa' />
    </section>
  )
}
