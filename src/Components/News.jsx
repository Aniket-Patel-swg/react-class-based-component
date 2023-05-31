import React,{Component} from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    render() {
        return(
            <>
                <h1>News</h1>
                <NewsItem />
        </>
        )
    }
}