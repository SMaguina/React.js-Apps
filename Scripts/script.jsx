var Greetings = React.createClass({
  getInitialState: function() {
    return {
      names: ["Cade", "Nick", "James"]
    };
  },
  componentDidMount: function() {
    var component = this;
    setTimeout(function() { 
      component.setState({
        names: component.state.names.concat("AJ")
      })
    }, 4000);

  },
  render: function() {
    var greetings = this.state.names.map(
                      function(p) {
                        return <Hello name={p} />
                      });
    return (
      <div>
        {greetings}
      </div>
    );
  }
});

var Hello = React.createClass({
  render: function() {
    return (
      <div className="green">
        Hello {this.props.name}
      </div>
    );
  }
});

ReactDOM.render(
  <Greetings />, 
  $("#mountNode")[0]
);