import styles from './MatchBlock.module.scss'
import {TeamBlock} from "src/entities/TeamBlock";
import {useNavigate} from "react-router-dom";

export const MatchBlock = () => {
    const navigate = useNavigate()
    return <div className={styles.MatchBlock}>
        <div className={styles.MatchInfoLayout}>
            <div className={styles.MatchInfo} onClick={() => navigate('/match')}>
                <TeamBlock isHost/>
                —
                <TeamBlock/>
            </div>
        </div>
        <div className={styles.DatePoint}>
            <div className={styles.DatePointCircle} />
            <div className={styles.DatePointLabel}>01.10.2023</div>
        </div>
    </div>
}