import React, { Component } from 'react';
import Layout from '../Layouts/Layout'
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../../node_modules/react-table/react-table.css";
import ReactTable from "react-table";
import { connect } from 'react-redux';
import Loading from '../Helpers/Loading';
import PropTypes from 'prop-types';
import {Bar, Line, Pie,HorizontalBar} from 'react-chartjs-2';
class VoteResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
         data: [],
         company1: 0,
         company2: 0,
         company3: 0,
         company4: 0,
         company5: 0,
         company6: 0,
         company7: 0,
         company8: 0,
         company9: 0,
         company10: 0,
         company11: 0,
         company12: 0,
         company13: 0,
         company14: 0,
         company15: 0
         
         
    
        };
      }
    componentDidMount(){
        let self = this;
        fetch("https://hypervote.io/api/queries/selectShareByCompany?company=eHub" , {
          method: "GET"
        })
          .then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad Response from server");
            }
            return response.json();
          })
          .then(function(data) {
            self.setState({ data: data });
          })
          .then(function(){
            console.log("This is what is in data") 
          }
            )
            .then(function(){
                // Declare Global var to store acumulator of company tally 
                var c1 = 0; 
                var c2 = 0; 
                var c3 = 0; 
                var c4 = 0; 
                var c5 = 0; 
                var c6 = 0; 
                var c7 = 0; 
                var c8 = 0; 
                var c9 = 0; 
                var c10 = 0; 
                var c11 = 0; 
                var c12 = 0; 
                var c13 = 0; 
                var c14 = 0; 
                var c15 = 0; 
                console.log(c1)


              for(var i = 0; i < (self.state.data).length; i++){
                if(self.state.data[i].voteDecision === "null"){
                    c1 = c1+ 1
                }
                if (self.state.data[i].voteDecision_2 === "null"){
                    c2 = c2+ 1
                }
                if (self.state.data[i].voteDecision_3 === "null"){
                    c3 = c3+ 1
                }
                if (self.state.data[i].voteDecision_4 === "null"){
                    c4 = c4+ 1
                }
                if (self.state.data[i].voteDecision_5 === "null"){
                    c5 = c5+ 1
                }if (self.state.data[i].voteDecision_6 === "null"){
                    c6 = c6+ 1
                }
                if (self.state.data[i].voteDecision_7 === "null"){
                    c7 = c7+ 1
                }
                if (self.state.data[i].voteDecision_8 === "null"){
                    c8 = c8+ 1
                }
                 if (self.state.data[i].voteDecision_9 === "null"){
                    c9 = c9+ 1
                }
                 if (self.state.data[i].voteDecision_10 === "null"){
                    c10 = c10+ 1
                }
                if (self.state.data[i].voteDecision_11 === "null"){
                    c11 = c11+ 1
                }
                if (self.state.data[i].voteDecision_12 === "null"){
                    c12 = c12+ 1
                }
                if (self.state.data[i].voteDecision_13 === "null"){
                    c13 = c13+ 1
                }
                if (self.state.data[i].voteDecision_14 === "null"){
                    c14 = c14+ 1
                }
                if (self.state.data[i].voteDecision_15 === "null"){
                    c15 = c15+ 1
                }

                
              }
              console.log(c2)
              self.setState({company1:c1});
              self.setState({company2:c2});
              self.setState({company3:c3});
              self.setState({company4:c4});
              self.setState({company5:c5});
              self.setState({company6:c6});
              self.setState({company7:c7});
              self.setState({company8:c8});
              self.setState({company9:c9});
              self.setState({company10:c10});
              self.setState({company11:c11});
              self.setState({company12:c12});
              self.setState({company13:c13});
              self.setState({company14:c14});
              self.setState({company15:c15});
             
            //   self.state.company2
              
            })
            .then(function(){
              console.log(self.state.company1)
            })
          .catch(err => {
            console.log(err);
          })
          
    };
    render() {
      var imgStyle={"height":"30px", "margin-left": "50", "padding": "10",}
      const columns = [{
        Header: 'Vote',
        accessor: 'VoteId',
        width: 150,
        filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
                
      },{
        Header: 'Control Number',
        accessor: 'identifier'
      }/* ,{
        Header: 'Company1',
        accessor: 'voteDecision'
      },{
        Header: 'Company2',
        accessor: 'voteDecision_2'
      },{
        Header: 'Company3',
        accessor: 'voteDecision_3'
      },{
        Header: 'Company4',
        accessor: 'voteDecision_4'
      },{
        Header: 'Company5',
        accessor: 'voteDecision_5'
      },{
        Header: 'Company6',
        accessor: 'voteDecision_6'
      },{
        Header: 'Company7',
        accessor: 'voteDecision_7'
      },{
        Header: 'Company8',
        accessor: 'voteDecision_8'
      },{
        Header: 'Company9',
        accessor: 'voteDecision_9'
      },{
        Header: 'Company10',
        accessor: 'voteDecision_10'
      },{
        Header: 'Company11',
        accessor: 'voteDecision_11'
      },{
        Header: 'Company12',
        accessor: 'voteDecision_12'
      },{
        Header: 'Company13',
        accessor: 'voteDecision_13'
      },{
        Header: 'Company14',
        accessor: 'voteDecision_14'
      },{
        Header: 'Company15',
        accessor: 'voteDecision_15'
      } */
    ]
        return (
            this.props.isFetching ? <Layout><div className="content-inner"><Loading /></div></Layout>:
            <Layout>
                <div className= "content-inner-mobilefix">
                <div className="container" style={{marginTop:80}}>
                <h1 style={{margin:60}}><img src={require("../../assets/ehub.png")} style={imgStyle} ></img>   Vote Explorer</h1>
{/*                 <div className="chart">
                               <HorizontalBar s
                            data = 
                               { {
                                   labels: ["Company1", "Company2", "Company3", "Company4", "Company5", "Company6", "Company7","Company8","Company9","Company10","Company11","Company12","Company13","Company14","Company15"],
                                datasets: [{
                                    
                                
                                // backgroundColor: 'rgb(127, 198, 82, 0.5)',
                                // borderColor: 'rgb(127, 198, 82, 0.5)',
                                backgroundColor: ['rgb(127, 198, 82, 0.5)','rgb(254, 160, 180, 0.5)','rgb(254, 200, 154, 0.5)','rgb(50, 206, 205, 0.5)','rgb(142, 206,253, 0.5)','rgb(192, 165, 253, 0.5)','rgb(216, 218, 222, 0.5)',
                                'rgb(254, 223, 161, 0.5)','rgb(16, 114, 181, 0.5)','rgb(252, 84, 78, 0.5)','rgb(254, 205, 83, 0.5)','rgb(46, 181, 218, 0.5)','rgb(35, 190, 173, 0.5)','rgb(218, 212, 0, 0.5)','rgb(48, 89, 121, 0.5)'],

                                borderColor: ['rgb(127, 198, 82, 0.5)','rgb(254, 160, 180, 0.5)','rgb(254, 200, 154, 0.5)','rgb(50, 206, 205, 0.5)','rgb(142, 206,253, 0.5)','rgb(192, 165, 253, 0.5)','rgb(216, 218, 222, 0.5)',
                                'rgb(254, 223, 161, 0.5)','rgb(16, 114, 181, 0.5)','rgb(252, 84, 78, 0.5)','rgb(254, 205, 83, 0.5)','rgb(46, 181, 218, 0.5)','rgb(35, 190, 173, 0.5)','rgb(218, 212, 0, 0.5)','rgb(48, 89, 121, 0.5)'],
                                borderWidth: 3,

                                data: [this.state.company1, this.state.company2, this.state.company3, this.state.company4, this.state.company5, this.state.company6, this.state.company7,this.state.company8,this.state.company9,this.state.company10,this.state.company11,this.state.company12,this.state.company13,this.state.company14,this.state.company15],
                                }],

                                
                              
                                 
                            }
                            }   
                            
                            options = { {
                              //   responsive: true,
                                title: {

                                  display: true,
                                  text:'Ehub Final Vote Results',
                                  position: "top",
                                  fontSize: 15
                                },
                                legend: {
                                  display:false
                                }


                              }}
                            
                            />
                        </div> */}


                <div style={{width: 1000,
                  padding: 10,
                  border: 5,
                  margin: 50}}>
                <ReactTable
                 data={this.state.data}
                 columns={columns}
                 defaultPageSize = {10}
                 className="-striped -highlight"
                 filterable
                 defaultFilterMethod={(filter, row) =>
                  String(row[filter.id]) === filter.value}
                
                
                />
                </div>
                </div>
                </div>
               
            </Layout>
        );
    }
}
VoteResults.propTypes = {
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool.isRequired,
  projects: PropTypes.array.isRequired
};
export default connect((store) => {
  return {
      projects: store.projectState.data,
      pagination: store.projectState.pagination,
      isFetching: store.projectState.isFetching
  };
})(VoteResults)
