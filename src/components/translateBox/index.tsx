import React from 'react'
import deleteIcon from '../../assets/icons8-delete-24.png'

import './style.css'
import TranslateBoxTab from '../translateBoxTab'

interface TranslateBoxState {
    textToTranslate: string
}

class TranslateBox extends React.Component<{}, TranslateBoxState> {
    state: TranslateBoxState = {
        textToTranslate: 'Hello',
    }

    displaysDeleteIcon = (): JSX.Element => {
        if (this.state.textToTranslate.length > 0) {
            return (
                <img
                    src={deleteIcon}
                    alt="delete"
                    className="translate-box-delete"
                    onClick={(): void => {
                        this.setState({
                            textToTranslate: '',
                        })
                    }}
                />
            )
        } else {
            return <div />
        }
    }

    render(): JSX.Element {
        return (
            <div className="translate-box-container">
                <TranslateBoxTab />

                <div className="translate-box-first-half">
                    <div className="translate-box-input-container">
                        <textarea
                            className="translate-box-input"
                            value={this.state.textToTranslate}
                            onChange={(event): void => {
                                this.setState({
                                    textToTranslate: event.target.value,
                                })
                            }}
                        />

                        {this.displaysDeleteIcon()}
                    </div>
                </div>

                <div></div>
            </div>
        )
    }
}

export default TranslateBox
