import styles from "./Endpoint.module.scss";
import {FC} from "react";

interface EndpointPropsType {
    label: string
    size?: 'small' | 'medium'
}

export const Endpoint: FC<EndpointPropsType> = ({ label, size = 'medium' }) => {
    return (
        <div className={styles.EndpointLayout}>
            <div className={size === 'medium' ? styles.EndpointCircle : styles.EndpointCircleSmall}></div>
            {label}
        </div>
    )
}