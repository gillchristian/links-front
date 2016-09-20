import test from 'ava'
import sino from 'sinon'

import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { render } from 'react-dom'
import { Simulate } from 'react-addons-test-utils'

import AssetsList from './AssetsList'

test('does not show an spinner if loading == false', t => {
  const div = renderToDiv({ assets: [], loading: false, error: false, category: 'tests' })
  t.false(div.innerHTML.includes('centerItem'))
})

test('does not show errors if erros == false', t => {
  const div = renderToDiv({ assets: [], loading: false, error: false, category: 'tests' })
  t.false(div.innerHTML.includes('centerItem'))
})

test('does show an error message if erros == true', t => {
  const div = renderToDiv({ assets: [], loading: false, error: true, category: 'tests' })
  t.true(div.innerHTML.includes('Sorry, there was an error, please try again!'))
})

/**
 * Render the <AssetsList /> component to a div with the given props
 * @param {Object} props - the props to apply to the <AssetsList /> element
 * @returns {Element} - the div that contains the element
 */
function renderToDiv(props) {
  const div = document.createElement('div')
  render(
    <AssetsList {...props}>
      { props.children || 'hello world' }
    </AssetsList>,
    div )
  return div
}
