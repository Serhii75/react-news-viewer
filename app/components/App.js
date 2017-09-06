import React from 'react';
import SelectNews from './SelectNews';
import Articles from './Articles';

const SOURCES = [
  { name: 'Bloomberg', sortedBy: 'top' },
  { name: 'The New York Times', sortedBy: 'top' },
  { name: 'BBC News', sortedBy: 'top' },
  { name: 'The Wall Street Journal', sortedBy: 'top' },
  { name: 'Google News', sortedBy: 'top' },
];

const BASE_URL = 'https://newsapi.org/v1/articles';
// Here should be your https://newsapi.org/ API Key
const API_KEY = '332d00016ea64d3d938c0c7a70590da6';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsName: '',
      articles: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  hyphenated(name) {
    return name.trim().toLowerCase().replace(/\s/g, '-');
  }

  handleChange(num) {
    const URL = `${BASE_URL}?source=${this.hyphenated(SOURCES[num].name)}&sortedBy=${SOURCES[num].sortedBy}&apiKey=${API_KEY}`;

    fetch(URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const { articles } = json;
      this.setState({
        newsName: SOURCES[num].name,
        articles
      });
      console.log('this.state', this.state);
    });
  }

  render() {
    const articles = this.state.articles.length > 0
          ? <Articles articles={this.state.articles} title={this.state.newsName} />
          : <div></div>;
    return (
      <div className="app container">
        <h1>Top News Viewer</h1>
        <SelectNews sources={SOURCES} onChange={this.handleChange} />
        {articles}
      </div>
    );
  }
}

export default App;
