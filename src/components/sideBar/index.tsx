import React from 'react'

import './style.css'

interface SideBarProps {
    isOpen?: boolean
    onClose?: () => void
}

class SideBar extends React.Component<SideBarProps> {
    displaysSideBarContent(): JSX.Element {
        return (
            <div className="content">
                <span className="title">
                    <span className="google-title" />
                    <span className="translate-title">Translate</span>
                </span>

                <span className="side-bar-item">About Google Translate</span>
                <span className="side-bar-item">Community</span>

                <span className="divider">
                    <svg height="1">
                        <g fill="none">
                            <path stroke="black" d="M0 0 l300 0" />
                        </g>
                    </svg>
                </span>

                <span className="side-bar-item">Privacy & Terms</span>
                <span className="side-bar-item">Help</span>
                <span className="side-bar-item">Send feedback</span>
                <span className="side-bar-item">About Google</span>
            </div>
        )
    }

    displaysSideBarDefault(): JSX.Element {
        return <div className="side-bar default" />
    }

    displaysSideBarOpened(): JSX.Element {
        return (
            <div className="side-bar-container" onClick={this.props.onClose}>
                <div
                    className="side-bar open"
                    onClick={e => {
                        e.stopPropagation()
                    }}
                >
                    {this.displaysSideBarContent()}
                </div>
            </div>
        )
    }

    displaysSideBarClosed(): JSX.Element {
        return <div className="side-bar closed">{this.displaysSideBarContent()}</div>
    }

    render(): JSX.Element {
        if (this.props.isOpen === undefined || this.props.isOpen === null) {
            return this.displaysSideBarDefault()
        } else if (this.props.isOpen) {
            return this.displaysSideBarOpened()
        } else {
            return this.displaysSideBarClosed()
        }
    }
}

export default SideBar
