import React from 'react'

import hamburger from '../../assets/icons8-menu-24.png'
import circledMenu from '../../assets/icons8-circled-menu-24.png'
import './style.css'
import SideBar from '../sideBar'

interface AppBarState {
    isDrawerOpen?: boolean
}

class AppBar extends React.Component<{}, AppBarState> {
    state: AppBarState = {}

    constructor(props: {}) {
        super(props)

        this.onHamburgerClicked = this.onHamburgerClicked.bind(this)
        this.onCloseSideBar = this.onCloseSideBar.bind(this)
    }

    onHamburgerClicked(): void {
        this.setState({
            isDrawerOpen: true,
        })
    }

    onCloseSideBar(): void {
        this.setState({
            isDrawerOpen: false,
        })
    }

    render(): JSX.Element {
        return (
            <div>
                <div className="app-bar">
                    <div className="app-bar-item-title">
                        <span className="app-bar-icon" onClick={this.onHamburgerClicked}>
                            <img className="icon" src={hamburger} alt="Hamburger" />
                        </span>

                        <span className="google-title" />
                        <span className="translate-title">Translate</span>
                    </div>

                    <div className="app-bar-right-items">
                        <span className="app-bar-icon">
                            <img className="icon" src={circledMenu} alt="Menu" />
                        </span>

                        <div className="user-icon">
                            <div className="user-icon-image">GB</div>
                        </div>
                    </div>
                </div>

                <SideBar isOpen={this.state.isDrawerOpen} onClose={this.onCloseSideBar} />
            </div>
        )
    }
}

export default AppBar
