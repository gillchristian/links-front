import React from 'react';

import { connect } from 'react-redux';

import Categories from './categories.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    categoriesWithLinks: state.categoriesWithLinks,
  }
}

const Content = connect(mapStateToProps)(Categories)

export default Content
