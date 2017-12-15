import React, { Component } from 'react';

export default class ChangeScreen extends Component {
    render () {
        return (
            <div>
                <label>Change the test value</label>
                <input placeholder={this.props.testValue ? this.props.testValue : 'Yeah! Change me'} onChange={(event) => {this.props.changeTestValue(event.target.value)}}/>
            </div>
        );
    }
}