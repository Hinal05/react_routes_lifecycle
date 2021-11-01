// It's same as Lifecycle
import React, { PureComponent } from 'react';

class Life extends PureComponent {
  state = {
    title: 'Life cycles'
  }

  render() { // default method
    console.log('RENDER');
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={
          () => this.setState({
            title: 'Something else'
          })}
        >Click to change</div>  {/* // Change h3 tag text after clicking on this button */}
      </div>
    )
  }

}

export default Life;
