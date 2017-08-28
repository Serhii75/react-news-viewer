import React from 'react';

class SelectNews extends React.Component {
  constructor(props) {
    super(props);
    this.changeSelect = this.changeSelect.bind(this);
  }

  changeSelect(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    let options = this.props.sources.map((source, index) => {
      return <option value={index} key={index}>{source.name}</option>;
    });
    options.unshift(<option value="-1" key="-1">Select A Source</option>);

    return (
      <div>
        <select id="choice" onChange={this.changeSelect} className="form-control">
          {options}
        </select>
      </div>
    );
  }
}

export default SelectNews;
