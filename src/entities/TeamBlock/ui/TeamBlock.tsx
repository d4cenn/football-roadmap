import styles from "./TeamBlock.module.scss";

interface TeamBlockPropsType {
    teamName: string
    teamScore: number
    teamLogoUrl: string
    isHost?: boolean
}

export const TeamBlock = ({ teamName, teamLogoUrl, teamScore, isHost = false }: TeamBlockPropsType) => {
    return (
        <>
            {isHost ? (
                <div className={styles.HomeTeam}>
                    <div className={styles.TeamInfoLayout}>
                        <div className={styles.TeamLogoContainer}>
                            <img className={styles.TeamLogo} src={require(`src/shared/images/${teamLogoUrl}`)} alt="spartak-moscow-logo"/>
                        </div>
                        <div>{teamName}</div>
                    </div>
                    <div className={styles.HomeTeamScore}>
                        {teamScore}
                    </div>
                </div>
            ) : (
                <div className={styles.AwayTeam}>
                    <div className={styles.AwayTeamScore}>
                        {teamScore}
                    </div>
                    <div className={styles.TeamInfoLayout}>
                        <div className={styles.TeamLogoContainer}>
                            <img className={styles.TeamLogo} src={require(`src/shared/images/${teamLogoUrl}`)} alt="dinamo-moscow-logo"/>
                        </div>
                        <div>{teamName}</div>
                    </div>
                </div>
            )}
        </>
    )
}