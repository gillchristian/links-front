import React, {Component} from 'react';

import CategoriesContainer from '../containers/CategoriesContainer'
import FilterCategories from '../containers/FilterCategories'

export default class Main extends Component {
  componentWillMount () {
    this.props.getUser()
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <div className='flxR c-center m-between'>
          <div>
            <h3>{ user.name } - {user.teams[0]}</h3>
          </div>
          <div className='fixPosition'>
            <FilterCategories />
          </div>
        </div>
        <CategoriesContainer />
      </div>
    )
  }
}

