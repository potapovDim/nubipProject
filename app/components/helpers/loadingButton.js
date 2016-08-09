import React, {Component} from 'react'
import {Button} from 'react-bootstrap'

class LoadingButton extends Component {
  state = {
    isLoading: false
  }
  handleClick = ()=> {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.props.action()
      this.setState({isLoading: false});
    }, 1000);
  }

  render = ()=> {
    let isLoading = this.state.isLoading;
    return (
        <Button
          bsStyle="primary"
          disabled={isLoading}
          onClick={!isLoading ? this.handleClick : null}>
          {isLoading ? 'Додається...' : 'Додати'}
        </Button>
    );
  }
}

export default LoadingButton