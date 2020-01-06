import React from 'react'
import AppBar from '../../components/appBar'
import Button from '../../components/button'
import translateIcon from '../../assets/baseline_translate_black_48dp.png'
import documentIcon from '../../assets/icons8-file-48.png'

import './style.css'

interface HomeState {
    isTextButtonActive: boolean
    isDocumentsButtonActive: boolean
}

class Home extends React.Component<{}, HomeState> {
    state: HomeState = {
        isTextButtonActive: true,
        isDocumentsButtonActive: false,
    }

    constructor(props: {}) {
        super(props)

        this.onButtonClicked = this.onButtonClicked.bind(this)
    }

    onButtonClicked(): void {
        this.setState({
            isTextButtonActive: !this.state.isTextButtonActive,
            isDocumentsButtonActive: !this.state.isDocumentsButtonActive,
        })
    }

    render(): JSX.Element {
        return (
            <div>
                <AppBar />

                <div className="container">
                    <div className="button-container">
                        <Button
                            text="Text"
                            icon={translateIcon}
                            isActive={this.state.isTextButtonActive}
                            onClick={this.onButtonClicked}
                        />
                        <Button
                            text="Documents"
                            icon={documentIcon}
                            isActive={this.state.isDocumentsButtonActive}
                            onClick={this.onButtonClicked}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
