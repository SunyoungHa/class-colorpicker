import React from 'react';


class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            someValueThatTheUserChanges: 7,
            abc: 'a'
        };
        this.state = this.initialState;
    }
    onResetClick(e) {
        e.preventDefault();
        this.setState(this.initialState);
    }
}