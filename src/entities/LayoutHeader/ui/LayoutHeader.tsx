import styles from './LayoutHeader.module.scss'
import logo from '../../../shared/images/logo-rpl.png'

export const LayoutHeader = () => {
    return (
        <div className={styles.Header}>
            <a href="/" className={styles.HeaderContent}>
                <img className={styles.Logo} src={logo} alt="logo" />
                <div className={styles.Title}>FOOTBALL HISTORY</div>
            </a>
        </div>
    )
}