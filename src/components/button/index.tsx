import React from 'react'

import './style.css'

interface ButtonProps {
    text: string
    icon?: string
    isActive: boolean
    onClick: () => void
}

class Button extends React.Component<ButtonProps, {}> {
    render(): JSX.Element {
        let buttonClass = 'button'

        if (this.props.isActive) {
            buttonClass += ' button-active'
        }

        return (
            <span className={buttonClass} onClick={this.props.onClick}>
                <img className="button-icon" src={this.props.icon} alt="icon" />
                {this.props.text}
            </span>
        )
    }
}

export default Button
