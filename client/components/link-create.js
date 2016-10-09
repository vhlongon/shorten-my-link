import React, {Component} from 'react';

class LinkCreate extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input ref="input" className="form-control" />
        </div>
        <button className="btn btn-primary">Shorten url</button>
      </form>
    );
  }
}

export default LinkCreate;
