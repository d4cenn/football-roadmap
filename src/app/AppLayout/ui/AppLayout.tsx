import React from 'react'
import './AppLayout.css'
import {LayoutHeader} from "src/entities/LayoutHeader/ui/LayoutHeader";

export const AppLayout = () => {
    return (
        <div className="AppLayout">
            <LayoutHeader />
            <div>Content</div>
        </div>
    )
}