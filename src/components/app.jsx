import React from 'react';
import LinksList from './linksList.jsx';

export default class App extends React.Component {

  render(){
    return (
      <div className='container'>
        <LinksList src='https://link-bot.herokuapp.com/api' heading='random'/>
        <LinksList src='https://link-bot.herokuapp.com/api'heading='important'/>
      </div>
    )
  }
}
