import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export default class Button extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        orange: PropTypes.bool,
        wide: PropTypes.bool,
    };

    handleClick = () => {
        
    }

    render() {
        const className = [
            "component-button",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : "",
        ];

        return (
            <div className={className.join(" ".trim())}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        );
    }
}