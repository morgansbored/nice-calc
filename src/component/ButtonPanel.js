import React from "react";
import Button from "./Button";
import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                </div>
            </div>
        );
    }
}