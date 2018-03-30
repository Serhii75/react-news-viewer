import React from 'react';

class Articles extends React.Component {
  truncate(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        <h2 className="text-center mt-4">{this.props.title}</h2>
        <div className="row">
          {articles.map((article, index) => {
            return (
              <div className="col-md-6" key={index}>
                <div className="card">
                  <div className="card-img">
                    <img src={article.urlToImage} className="img-responsive card-img-top" />
                  </div>
                  <div>
                    <h4><a href={article.url} target="_blank">{article.title}</a></h4>
                    <p>{this.truncate(article.description, 100)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Articles;
