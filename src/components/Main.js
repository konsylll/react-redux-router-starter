import React, { Component } from 'react';
import TestContainer from '../containers/TestContainer';
import ChangeContainer from '../containers/ChangeContainer';
import { Switch, Route } from 'react-router-dom';

export default class MainScreen extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route path = '/show' component={TestContainer} />
                    <Route path = '/change' component={ChangeContainer} />
                </Switch>
            </main>
        )
    }
}
