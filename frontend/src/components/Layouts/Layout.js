import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from '../Helpers/Footer';
import PageTitle from '../Helpers/PageTitle';
import Sidebar from '../Helpers/Sidebar';
import Toolbar from '../Helpers/Toolbar';

export default class Layout extends Component {
    render() {
        return(
          <div className="page-inner">
              {/* <Toolbar /> */}
              <Sidebar />

              <div className="main">
                <PageTitle />

                <div className="content">
                  {this.props.children}
                </div>

                <Footer />
              </div>

                <div className="content-side-wrapper">
                    <div className="content-side-overlay" />

                    <div className="content-side">

                </div>
            </div>
          </div>
        );
    }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

