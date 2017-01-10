import React, {Component} from 'react'

class InfoButton extends Component {

  state = {show: false};

  handleEnter = ()=> {
    this.setState({show: !this.state.show});
  };
  handleLeave = ()=> {
    this.setState({show: !this.state.show});
  }
  
  render() {
    return (
      <div className="info-field">
        <button className="btn btn-warning" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
          {this.props.name}
        </button>
        {this.state.show ? <p className="info">
          {this.props.children}
        </p> : null}
      </div>

    );
  }
}

export default InfoButton

