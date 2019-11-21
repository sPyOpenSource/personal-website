import React, {Component} from 'react'

class Article extends Component {
  render(){
    return (
      <p>
        {this.props.article}
      </p>
    )
  }
}

export default Article
