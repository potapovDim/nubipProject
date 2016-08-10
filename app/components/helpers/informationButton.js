import React, {Component} from 'react'
import{Popover} from 'react-bootstrap'

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
        <button onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
          {this.props.name}
        </button>
        {this.state.show?<p className="info"><h3>{this.props.header}</h3><div>{this.props.message}</div></p>:null}
      </div>

    );
  }
}

export default InfoButton

