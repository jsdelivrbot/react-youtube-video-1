import React, { Component } from 'react';

class ThemeSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        };
    }
    render() {
        return (
            <div className="col-md-4 list-group switch-container">
               <button
                onClick={event => this.themeSwitcher(this.state.theme)}
                type="button" 
                className="btn btn-primary btn-block">{this.state.theme}</button>
            </div>
        );
    }

    themeSwitcher(theme) {
        if (theme === 'light'){
            this.setState({theme: 'dark'})
        }
        else {
            this.setState({theme: 'light'})
        }
        setTimeout(function(){ 
            this.props.onThemeSwitch(this.state.theme);
            }.bind(this),30)
    }
}

export default ThemeSwitch;