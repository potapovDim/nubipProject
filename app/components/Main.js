import React from 'react'

class Main extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>THIS IS MAIN</div>
        {this.props.children}
      </div>
    )
  }
}

export default Main