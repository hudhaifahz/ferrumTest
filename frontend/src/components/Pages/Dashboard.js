import React, { Component } from 'react';
import Layout from '../Layouts/Layout';
import PageHeader from '../Helpers/PageHeader';

export default class Dashboard extends Component {

    submitForm (e) {
        e.preventDefault()
        this.props.history.push('/past');
    }

    render() {
        return (
            <Layout>
                <div className="content-inner no-padding-top no-padding-left no-padding-right">
                    <PageHeader/>

                    <div classes="border-bottom side-margins no-vertical-distance">
                        <div>
                            <div title="Upcoming Vote(s)" subtitle="Assigned vote(s) to you"  value="1" labelClass="raising"/>
                            <div title="Past Vote(s)" subtitle="Vote(s) you have completed"  value="0" labelClass="descreasing"/>
                            <div title="Vote(s) this month" subtitle="Upcoming vote(s) this month"  value="1" labelClass="raising"/>
                            <div title="Total Vote(s)" subtitle="All upcoming and past vote(s)" value="0" />
                        </div>
                    </div>

                    <div title="Association of Canadian Archivists" classes="border-bottom side-margins">
                        <div style={{float: 'left'}}>
                            <a href="/expectations"><img src="https://archivists.ca/sites/default/files/archivists-logo.png" alt="ACA-LOGO" /></a>
                            <p>
                                This year, we will be conducting our first online vote through HyperVote's platform. Votes will be stored on their blockchain, and released to be viewed once the vote closes.
                            </p>

                            <h4>Title: Financial Statement and Strategic Plan Approval Vote</h4>
                            <h4>Date: September 17 - September 26</h4>
                        </div>

                            <form onSubmit={this.submitForm.bind(this)}>
                              <button type="submit" className="submitButton">VOTE COMPLETE - VIEW RESULTS</button>
                          </form>  

                    </div>

                </div>
            </Layout>
        );
    }
}

