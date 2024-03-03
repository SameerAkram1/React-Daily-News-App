import React, { Component } from 'react';
import NewsItem from './NewsItem';
import './navbar.css';
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0
    }

  }

  async updateNews() {
    let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=34537885ea664324bfb832bbfaca9145&page=1&category=${this.props.category}&page=${this.state.page}`);
    let data = await response.json();
    console.log(data.articles);
    this.setState({
      articles: data.articles,
      page: this.state.page,
      totalResults: data.totalResults
    })
  }

  //This will run after render func
  async componentDidMount() {
    this.updateNews();
  }



  ///////////
  // handlePrevious = async () => {

  //   let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=34537885ea664324bfb832bbfaca9145&page=${this.state.page - 1}&category=${this.props.category}`);
  //   let data = await response.json();
  //   console.log(data.articles);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: data.articles
  //   })
  // }

  // handleNext = async () => {

  //   let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=34537885ea664324bfb832bbfaca9145&page=${this.state.page + 1}&category=${this.props.category}`);
  //   let data = await response.json();
  //   console.log(data.articles);
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: data.articles
  //   })
  // }





  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=34537885ea664324bfb832bbfaca9145&page=1&category=${this.props.category}&page=${this.state.page}`);
    let data = await response.json()

    this.setState({
      articles: this.state.articles.concat(data.articles),
      page: this.state.page,
      totalResults: data.totalResults,
    })
  };

  render() {
    return (
      <div className='container'>
        <h2 className='h2margin'>Today Top Headlines</h2>
        <div className='row'>

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            

          />
          {this.state.articles.map((element) => {
            return <div className='col-md-3 m-3' key={element.url}>
              <NewsItem key={element.url} title={element.title} description={element.description} img={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>

      </div>
    )
  }
}
