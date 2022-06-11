import { NavMenu } from 'components/NavMenu'
import styles from './Header.module.scss'
import logo from 'assets/img-logo-vitalinea.png'

export function Header() {
  return (
    <header className={styles.vitalineaHead}>
      <div className={styles.container}>
        <figure className={styles.logo}>
          <img src={logo} alt='logo-vitalinea' />
        </figure>
        <NavMenu />
      </div>
    </header>
  )
}
