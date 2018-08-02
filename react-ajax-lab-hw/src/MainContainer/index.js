import React, {Component} from 'react';
import NewsList from "../Newslist/index.js";
class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            news: [], 
        }

    }
    getNews = async () => {
        try {
          const news = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ed700b8ab2594b76bb9e15b19ecbc28f");
          const newsJson = await news.json();
          return newsJson;
        return news
        } catch(err) {
          console.log(err);
          return err;
        }
      }
      componentDidMount(data) {
        this.getNews().then((data) => {
          this.setState({news: data.articles});
        });
      }
    render() {
        return (
            <div>
                <h1>Main Container</h1>
                <NewsList news={this.state.news}/>
            </div>
        )
    }
}
export default MainContainer;