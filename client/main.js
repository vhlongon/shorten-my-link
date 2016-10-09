import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header />
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('.react-root')
  );
});
