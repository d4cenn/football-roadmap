import styles from "./Endpoint.module.scss";
import React, {FC} from "react";

interface EndpointPropsType {
    label: string
    style?: React.CSSProperties
}

export const Endpoint: FC<EndpointPropsType> = ({ label, style}) => {
    return (
        <div className={styles.EndpointLayout} style={style}>
            <div className={styles.EndpointCircle}></div>
            {label}
        </div>
    )
}