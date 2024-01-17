import {YearBlock} from "src/features/YearBlock";
import styles from './YearsPage.module.scss'
import background from 'src/shared/images/background-stadium.jpeg'

export const YearsPage = () => {
    const years = [
        {
            yearValue: 2023,
            background: background
        }, {
            yearValue: 2024,
            background: background
        }
    ]

    return (
        <div className={styles.YearsPage}>
            {years.map((year) => (
                <YearBlock key={year.yearValue} year={year.yearValue} backgroundUrl={year.background} />
            ))}
        </div>
    )
}