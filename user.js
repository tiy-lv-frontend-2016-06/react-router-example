import React from 'react';
import users from './users.json';

export default React.createClass({
  getInitialState: function() {
    return {
      name: ""
    }
  },
  componentWillMount: function () {
    var id = Number(this.props.params.userId);

    // var name = users.reduce(function(a,b){
    //   if (b.id === id) {
    //     return b.name;
    //   } else {
    //     return a;
    //   }
    // }, "");
    
    users.forEach(function(item){
      if (item.id === id) {
        this.setState({
          name: name
        })
      }
    })    
  },
  render: function () {
    return (
      <p>
        Name: {this.state.name}
      </p>
    )
  }
})