import { combineReducers } from 'redux'
import links from './links'
import categories from './categories'

const rootReducer = combineReducers({ links, categories })

export default rootReducer


/*
TODO: categories / links by categories reducers
    color: '#b52e31',
    heading: 'angular',
    <LinksList links={this.state.links} heading='important'/>
    <LinksList links={this.state.links} heading='random' color='#33b8b8'/>
    <LinksList links={this.state.links} heading='js' color='#efe06f'/>
    <LinksList links={this.state.links} heading='react' color='#00d8ff'/>
*/

  /*
  import axios from 'axios';
  // TODO: move state handling to redux
	componentDidMount(){
    axios.get(this.props.src)
      .then(response => {
        this.setState({links: response.data});
      })
	}
  */
