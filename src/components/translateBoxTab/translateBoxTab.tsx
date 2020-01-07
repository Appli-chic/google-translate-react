import React, { ReactElement } from 'react'
import bottomArrow from '../../assets/icons8-expand-arrow-24.png'

import './style.css'

interface TranslateBoxTabState {
    firstLanguage: string
    secondLanguage: string
    activeLanguages: [string, string, string]
}

class TranslateBoxTab extends React.Component<{}, TranslateBoxTabState> {
    state: TranslateBoxTabState = {
        firstLanguage: 'ENGLISH',
        secondLanguage: 'FRENCH',
        activeLanguages: ['ENGLISH', 'SPANISH', 'FRENCH'],
    }

    displaysActiveLanguages = (): JSX.Element[] => {
        return this.state.activeLanguages.map((language: string, index: number) => (
            <span key={index} className="translate-box-tab-element">
                {language}
            </span>
        ))
    }

    render(): JSX.Element {
        return (
            <div className="translate-box-tabs">
                <span className="translate-box-tab-element">DETECT LANGUAGE</span>
                {this.displaysActiveLanguages()}
                <span className="translate-box-tab-arrow-spacing" />
                <img className="translate-box-tab-bottom-arrow" src={bottomArrow} alt="bottom arrow" />
            </div>
        )
    }
}

export default TranslateBoxTab
