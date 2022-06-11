import { useShowMenu } from 'hooks/useShowMenu'

import styles from './NavMenu.module.scss'
import facebook from 'assets/img-social-facebook@2x.png'
import instagram from 'assets/img-social-instagram@2x.png'
import youtube from 'assets/img-social-youtube@2x.png'

export function NavMenu() {
  const { active, showMenu } = useShowMenu()

  return (
    <>
      <nav className={`${styles.container} ${active ? styles.show : ''}`}>
        <ul className={styles.list}>
          <li>
            <a href='/#'>Nuestros productos</a>
          </li>
          <li>
            <a href='/#'>Disfruta cuidarte</a>
          </li>
          <li>
            <a href='/#'>Blog</a>
          </li>
        </ul>
        <div className={styles.socialMedia}>
          <img src={facebook} alt='facebook logo' />
          <img src={instagram} alt='instagram logo' />
          <img src={youtube} alt='youtube logo' />
        </div>
      </nav>
      <button onClick={showMenu} className={styles.dropdown}>
        <div className={styles.burger}>
          <span className={`${styles['burger--line']} ${active ? styles.active : ''}`}></span>
        </div>
      </button>
    </>
  )
}
