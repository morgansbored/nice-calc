import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export default class Button extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        orange: PropTypes.bool,
        brown: PropTypes.bool,
        wide: PropTypes.bool,
        clickHandler: PropTypes.func,
    };

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        const className = [
            "component-button",
            this.props.orange ? "orange" : "",
            this.props.brown ? "brown" : "",
            this.props.wide ? "wide" : "",
        ];

        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        );
    }
}