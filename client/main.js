import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/link-create';
import {Links} from '../imports/collections/links';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <LinkCreate />
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(
    <App />,
    document.querySelector('.react-root')
  );
});
