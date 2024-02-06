import styles from './MatchPage.module.scss'
import backgroundUrl from 'src/shared/images/background-stadium.jpeg'
export const MatchPage = () => {
    return (
        <div className={styles.MatchPageLayout} style={{ backgroundImage: `url(${backgroundUrl})` }}>
            <div className={styles.MatchPageBackground}>
                <div className={styles.MatchPageContent}>
                    <div className={styles.MatchDateAndConditions}>
                        17:00 29.02.2002 +17
                    </div>
                    <div className={styles.MatchTitle}>
                        SPARTAK MOSCOW 2 - 1 DINAMO MOSCOW
                    </div>
                </div>
            </div>
        </div>
    )
}