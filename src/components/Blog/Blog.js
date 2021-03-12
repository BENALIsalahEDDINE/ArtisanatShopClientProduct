import React, { Component } from "react";
import axios from "axios";
import MyArticle from "./MyArticle";
import "./css/version/garden.css"

class Blog extends Component {
    state = {
        articles: []
      };
    
      fetchArticles = () => {
        axios.get("http://localhost:9092/Article").then(res => {
          const articles = res.data;
          this.setState({ articles });
        });
      };
      componentDidMount = () => {
        this.fetchArticles();
      };
      render() {
        return (
                <div>
                <div class="page-title wb">
                <div class="container">
                <div class="row">
                  <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                     
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                      
                  </div>                    
              </div>
          </div>
          </div>
                <div id="secwrapper">
                  
                </div>
                </div>
        );
}
}
export default Blog;
