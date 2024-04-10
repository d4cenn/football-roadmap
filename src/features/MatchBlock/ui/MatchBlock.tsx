import styles from './MatchBlock.module.scss'
import {TeamBlock} from "src/entities/TeamBlock";
import {useNavigate} from "react-router-dom";

interface MatchProps {
    match: Match
}

type Match = {
    id: number
    name: string
    score: string
    homeTeam: string
    homeTeamShortName: string
    homeTeamLogoUrl: string
    homeTeamScore: number
    awayTeam: string
    awayTeamShortName: string
    awayTeamLogoUrl: string
    awayTeamScore: number
    stadium: string
    city: string
    attendance: number
    date: string
    time: string
    weatherConditions: string,
    temperature: string,
    tournamentName: string
    stage: string
    description: string
    highlightsLink: string
}

export const MatchBlock = ({ match }: MatchProps) => {
    const navigate = useNavigate()
    return <div className={styles.MatchBlock}>
        <div className={styles.MatchInfoLayout}>
            <div className={styles.MatchInfo} onClick={() => navigate(`/match/${match.name}`)}>
                <TeamBlock teamName={match.homeTeamShortName} teamLogoUrl={match.homeTeamLogoUrl} teamScore={match.homeTeamScore} isHost/>
                —
                <TeamBlock teamName={match.awayTeamShortName} teamLogoUrl={match.awayTeamLogoUrl} teamScore={match.awayTeamScore}/>
            </div>
        </div>
        <div className={styles.DatePoint}>
            <div className={styles.DatePointCircle} />
            <div className={styles.DatePointLabel}>{match.date}</div>
        </div>
    </div>
}