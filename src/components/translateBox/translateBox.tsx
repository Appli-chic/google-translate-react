import React from 'react'

import './style.css'
import TranslateBoxTab from '../translateBoxTab/translateBoxTab'

class TranslateBox extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div className="translate-box-container">
                <TranslateBoxTab />
            </div>
        )
    }
}

export default TranslateBox
