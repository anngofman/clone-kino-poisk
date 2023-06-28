import styles from './header.module.scss'
import SearchInput from '../SearchInput'
import Logo from "../Logo"

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo}/>
      <SearchInput className={styles.search}/>
      {/* <AboutUser/> */}
    </header>
  )
}

export default Header