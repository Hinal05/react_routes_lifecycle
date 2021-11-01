import React, { Component } from 'react';

class Life extends Component {
  // 1 get default props
  // 2 set default state
  state = {
    title: 'Life cycles'
  }
  // 3 before render
  componentWillMount() {
    console.log('3 before render');
    // document.querySelector('h3').style.color = 'red' // It will not execute because this component with render before render command
  }

  // This method run before we get update something
  componentWillUpdate() {
    console.log('Before update');
  }

  // 4 render jsx
  render() { // default method
    console.log('RENDER');
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={
          ()=> this.setState({
            title:'Something elsew'
            })}
        >Click to change</div>  {/* // Change h3 tag text after clicking on this button */}
      </div>
    )
  }

  // 5 after render
  componentDidMount() {
    console.log('4 after render');
    document.querySelector('h3').style.color = 'red' // It will execute and change h3 text color
  }

  // This method run after we get update something
  componentDidUpdate() {
    console.log('After update');
  }

  // Should component update - Run this component after all the updates
  shouldComponentUpdate(NextProps, NextState) {
    console.log(NextState);
    console.log(this.state.title);
    console.log(NextState.title);
    if (NextState.title === 'Something else') {
      return false;
    }
    return true; // It will change the h3 text and it will call render component
    // return false; // It will not change the h3 text and it will not call render component
  }

  // It will call before receiving props
  componentWillReceiveProps() {
    console.log('Before Receive Props');
  }

  // If you go out to the component it will call unmount
  componentWillUnmount() {
    console.log('Unmount');
  }

}

export default Life;
