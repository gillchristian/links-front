import React from 'react';
import Content from './content.jsx';

export default class App extends React.Component {

  render(){
    return (
      <Content src='https://link-bot.herokuapp.com/api' />
    )
  }
}
