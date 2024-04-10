import styles from './MatchPage.module.scss'
import {useParams} from "react-router-dom";
import data from "src/shared/allData/data.json";
export const MatchPage = () => {
    const { matchLink } = useParams()

    const matchYear = matchLink?.slice(-4);

    const matchData = data["matches"][matchYear as keyof typeof data.matches].find((match) => match.name === matchLink)
    if (!matchData) {
        return <div>Oops!</div>
    }

    return (
        <div className={styles.MatchPageLayout} style={{ backgroundImage: `url(${require(`src/shared/images/${matchData.stadiumPictureUrl}`)})` }}>
            <div className={styles.MatchPageBackground}>
                <div className={styles.MatchPageContent}>
                    <div className={styles.MatchDateAndConditions}>
                        {matchData.time} {matchData.date} {matchData.temperature} {matchData.weatherConditions}
                    </div>
                    <div className={styles.MatchTitle}>
                        {matchData.homeTeam} {matchData.score} {matchData.awayTeam}
                    </div>
                </div>
            </div>
        </div>
    )
}