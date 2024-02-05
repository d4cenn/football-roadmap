import styles from "./TeamBlock.module.scss";
import spaMsk from "src/shared/images/spamsk_logo.png";
import dinMos from "src/shared/images/dinmos_logo.png";

interface TeamBlockPropsType {
    isHost?: boolean
}

export const TeamBlock = ({ isHost = false }: TeamBlockPropsType) => {
    return (
        <>
            {isHost ? (
                <div className={styles.HomeTeam}>
                    <div className={styles.TeamInfoLayout}>
                        <div className={styles.TeamLogoContainer}>
                            <img className={styles.TeamLogo} src={spaMsk} alt="spartak-moscow-logo"/>
                        </div>
                        <div>SPA</div>
                    </div>
                    <div className={styles.HomeTeamScore}>
                        2
                    </div>
                </div>
            ) : (
                <div className={styles.AwayTeam}>
                    <div className={styles.AwayTeamScore}>
                        1
                    </div>
                    <div className={styles.TeamInfoLayout}>
                        <div className={styles.TeamLogoContainer}>
                            <img className={styles.TeamLogo} src={dinMos} alt="dinamo-moscow-logo"/>
                        </div>
                        <div>DIN</div>
                    </div>
                </div>
            )}
        </>
    )
}