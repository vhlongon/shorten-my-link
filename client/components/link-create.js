import React, {Component} from 'react';

class LinkCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {error: ''};
  }

  handleSubmit(e) {
    e.preventDefault();
    let link = this.refs.link.value;
    // call accepts a third par a callback that receives error if there is any
    Meteor.call('links.insert', link, (error) => {
      if(error) {
        this.setState({error: 'Enter a valid url'});
      }else {
        this.setState({error: ''});
        this.refs.link.value = '';
      }
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Link to shorten</label>
          <input ref="link" className="form-control" />
        </div>
        <div className="text-danger">{this.state.error}</div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    );
  }
}

export default LinkCreate;
