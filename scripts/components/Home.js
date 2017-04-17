import React from 'react';
import * as HomeActions from '../actions/HomeActions';
import HomeStore from '../stores/HomeStore';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      bgColor: true
    }
  }
  bgToggle() {
    HomeActions.bgToggle();
  }
  componentWillMount() {
    HomeStore.on('home:bgtoggle', () => {
      this.setState({bgColor: !this.state.bgColor});
    });
  }
  render() {
    const homeStyles = {
      backgroundColor: this.state.bgColor ? this.props.config.home.bgColor.on : this.props.config.home.bgColor.off
    };
    return (
      <div class={[
        "home",
        this.state.bgColor ? "bgColor-on" : "bgColor-off"
      ].join(' ')} style={homeStyles}>
        <h2>{this.props.constants.experienceId}</h2>
        <button onClick={this.bgToggle.bind(this)}>Toggle background (Flux)</button>
      </div>
    );
  }
}
