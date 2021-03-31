import React from 'react'
import "./Loading.css"

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading">
                <span id="spin1"></span>
                <span id="spin2"></span>
                <span id="spin3"></span>
                <span id="spin4"></span>
            </div>
        </div>
    )
}

export default Loading
