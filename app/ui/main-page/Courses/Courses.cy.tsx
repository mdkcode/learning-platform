import React from 'react'
import Courses from './Courses'

describe('<Courses />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Courses />)
  })
})