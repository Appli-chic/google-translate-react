import React from 'react'
import bottomArrow from '../../assets/icons8-expand-arrow-24.png'
import switchImage from '../../assets/switch.png'

import './style.css'
import TranslateBoxTabItem, { LanguageItem } from '../translateBoxTabItem'

interface TranslateBoxTabState {
    activeFirstLanguages: [LanguageItem, LanguageItem, LanguageItem, LanguageItem]
    activeSecondLanguages: [LanguageItem, LanguageItem, LanguageItem]
}

class TranslateBoxTab extends React.Component<{}, TranslateBoxTabState> {
    state: TranslateBoxTabState = {
        activeFirstLanguages: [
            new LanguageItem('DETECT LANGUAGE', false),
            new LanguageItem('ENGLISH', true),
            new LanguageItem('SPANISH', false),
            new LanguageItem('FRENCH', false),
        ],

        activeSecondLanguages: [
            new LanguageItem('ENGLISH', false),
            new LanguageItem('SPANISH', false),
            new LanguageItem('FRENCH', true),
        ],
    }

    onFirstItemClicked = (language: LanguageItem): void => {
        this.state.activeFirstLanguages.forEach((l: LanguageItem) => {
            l.isSelected = false
        })

        const languages = this.state.activeFirstLanguages.filter((l: LanguageItem) => language === l)

        if (languages.length > 0) {
            languages[0].isSelected = true
        }

        this.setState({})
    }

    onSecondItemClicked = (language: LanguageItem): void => {
        this.state.activeSecondLanguages.forEach((l: LanguageItem) => {
            l.isSelected = false
        })

        const languages = this.state.activeSecondLanguages.filter((l: LanguageItem) => language === l)

        if (languages.length > 0) {
            languages[0].isSelected = true
        }

        this.setState({})
    }

    displaysFirstActiveLanguages = (): JSX.Element[] => {
        return this.state.activeFirstLanguages.map((language: LanguageItem, index: number) => (
            <TranslateBoxTabItem key={index} language={language} onClick={this.onFirstItemClicked} />
        ))
    }

    displaysSecondActiveLanguages = (): JSX.Element[] => {
        return this.state.activeSecondLanguages.map((language: LanguageItem, index: number) => (
            <TranslateBoxTabItem key={index} language={language} onClick={this.onSecondItemClicked} />
        ))
    }

    render(): JSX.Element {
        return (
            <div className="translate-box-tabs">
                {this.displaysFirstActiveLanguages()}
                <span className="translate-box-tab-arrow-spacing" />
                <img className="translate-box-tab-bottom-arrow" src={bottomArrow} alt="bottom arrow" />

                <img className="translate-box-tab-switch" src={switchImage} alt="bottom arrow" />

                {this.displaysSecondActiveLanguages()}
                <span className="translate-box-tab-arrow-spacing" />
                <img className="translate-box-tab-bottom-arrow" src={bottomArrow} alt="bottom arrow" />
            </div>
        )
    }
}

export default TranslateBoxTab
