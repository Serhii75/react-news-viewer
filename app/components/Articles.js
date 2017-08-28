import React from 'react';

class Articles extends React.Component {
  truncate(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
  }

  render() {
    const { articles } = this.props;
    return (
      <div className="row">
        <h2 className="text-center">{this.props.title}</h2>
        {articles.map((article, index) => {
          return (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="card">
                <div className="card-img">
                  <img src={article.urlToImage} className="img-responsive card-img-top" />
                </div>
                <div className="card-body">
                  <h4 className="card-title"><a href={article.url} target="_blank">{article.title}</a></h4>
                  <p className="card-text">{this.truncate(article.description, 100)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
