import React, { Component } from 'react';

export default class SidebarTitle extends Component {
    toggleBodyClass() {
        document.body.classList.toggle('sidebar-title-content-open');
    }

    

    render() {
        return (
            <h1 className="sidebar-title-wrapper">
                <div className="sidebar-title-inner" onClick={this.toggleBodyClass.bind(this)} style={{flex: 1}}>
                    <a href="/"><img src={require('../../assets/logo.png')} alt="HyperVote_logo" style={{height: 60, marginLeft: 20}}/></a>
                </div>
            </h1>
        );
    }
}
