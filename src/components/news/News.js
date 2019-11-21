import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import Article from '../news/Article'

class News extends Component {
  state = {
    dates: [],
    length: 0,
    news: []
  }
  constructor(){
    super()
    this.webSocket = new WebSocket('ws://' + window.location.host + '/ai/')
    this.SetStateDates  = this.SetStateDates.bind(this)
    this.SetStateNews  = this.SetStateNews.bind(this)
    this.GetState  = this.GetState.bind(this)
  }

  componentDidMount(){
    let webSocket = this.webSocket
    let SetStateDates  = this.SetStateDates
    let SetStateNews  = this.SetStateNews
    let GetState  = this.GetState

    webSocket.onopen = function(event){
      webSocket.send("the news")
    }

    webSocket.onmessage = function(event){
      console.log(event.data)
      let dates = event.data.split(",")
      if (GetState().dates.length === 0){
        dates.forEach(function(element) {
          console.log(element)
          webSocket.send(element)
        })
        SetStateDates(dates)
      } else {
        if (GetState().length !== GetState().dates.length){
          SetStateNews(GetState().dates[GetState().length] + ': ' + event.data)
        } else {
          webSocket.close()
        }
      }
    }
  }

  SetStateDates(dates){
    this.setState({dates: dates})
  }

  SetStateNews(newelement){
    this.setState({
      news: [...this.state.news, newelement]
    })
    this.setState({length: this.state.length + 1})
  }

  GetState(){
    return this.state
  }

  render() {
    return (
      <div>
          {this.state.news.map(item => (
            <Article key = {item} article = {item} />
          ))}
      </div>
    );
  }
}

export default News;
