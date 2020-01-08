import React from 'react'
import AppBar from '../../components/appBar'
import Button from '../../components/button'
import translateIcon from '../../assets/baseline_translate_black_48dp.png'
import documentIcon from '../../assets/icons8-file-48.png'

import './style.css'
import TranslateBox from '../../components/translateBox'

interface HomeState {
    isTextButtonActive: boolean
    isDocumentsButtonActive: boolean
}

class Home extends React.Component<{}, HomeState> {
    state: HomeState = {
        isTextButtonActive: true,
        isDocumentsButtonActive: false,
    }

    onTextButtonClicked = (): void => {
        if (!this.state.isTextButtonActive) {
            this.setState({
                isTextButtonActive: !this.state.isTextButtonActive,
                isDocumentsButtonActive: !this.state.isDocumentsButtonActive,
            })
        }
    }

    onDocumentsButtonClicked = (): void => {
        if (!this.state.isDocumentsButtonActive) {
            this.setState({
                isTextButtonActive: !this.state.isTextButtonActive,
                isDocumentsButtonActive: !this.state.isDocumentsButtonActive,
            })
        }
    }

    render(): JSX.Element {
        return (
            <div>
                <AppBar />

                <div className="container">
                    <div className="container-fixed-size">
                        <div className="button-container">
                            <Button
                                text="Text"
                                icon={translateIcon}
                                isActive={this.state.isTextButtonActive}
                                onClick={this.onTextButtonClicked}
                            />
                            <Button
                                text="Documents"
                                icon={documentIcon}
                                isActive={this.state.isDocumentsButtonActive}
                                onClick={this.onDocumentsButtonClicked}
                            />
                        </div>

                        <TranslateBox />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
