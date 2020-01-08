import React from 'react'

import './style.css'

export class LanguageItem {
    title: string
    isSelected: boolean

    constructor(title: string, isSelected: boolean) {
        this.title = title
        this.isSelected = isSelected
    }
}

interface TranslateBoxTabItemProps {
    key: number
    language: LanguageItem
    onClick: (language: LanguageItem) => void
}

class TranslateBoxTabItem extends React.Component<TranslateBoxTabItemProps, {}> {
    render(): JSX.Element {
        let className = 'translate-box-tab-element'

        if (this.props.language.isSelected) {
            className += ' translate-box-tab-element-active'
        }

        return (
            <span
                key={this.props.key}
                className={className}
                onClick={(): void => {
                    this.props.onClick(this.props.language)
                }}
            >
                {this.props.language.title}
            </span>
        )
    }
}

export default TranslateBoxTabItem
