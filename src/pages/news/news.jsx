import React from "react";
import "./news.scss";

class news extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    fetch("https://coronavirus-smartable.p.rapidapi.com/news/v1/US/", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
        "x-rapidapi-key": "18fcc2be05msh21e7634735c5f37p19284ejsnf104d8139402",
      },
    })
      .then((response) => response.json())
      .then((result) => this.setState({ news: result.news }));
  }

  render() {
    console.log(this.state.news);
    return (
      <div className="about">
        <h1 className="headline">HEADLINES</h1>

        {this.state.news.map(({ path, webUrl, title }) => (
          <h4 className="headline">
            <a
              key={path}
              href={webUrl}
              target="_blank"
              rel="noreferrer nofollow"
            >
              {title}
            </a>
          </h4>
        ))}
      </div>
    );
  }
}
export default news;
