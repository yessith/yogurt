import danone from 'assets/img-logo-danone.png'
import vitalinea from 'assets/img-logo-footer@2x.png'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.container}>
      <figure>
        <img src={danone} alt='logo danone' />
      </figure>

      <div>
        <p>Términos y condiciones| Políticas de privacidad | Aviso de privacidad</p>
        <p>Danone de México 2017 ©. Todos los derechos reservados 2017</p>
      </div>

      <figure>
        <img src={vitalinea} alt='logo vitalinea' />
      </figure>
    </footer>
  )
}
