import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import LandingNavbar from './LandingNavbar.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('LandingNavbar component', () => {

  it('should render as expected', () => {
    const component = shallow(<LandingNavbar />)
	 	expect(component.exists()).toBe(true);
  })
})