import React from 'react'
import { UserGreeting } from './UserGreeting'

describe('<UserGreeting />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserGreeting />)
  })
})