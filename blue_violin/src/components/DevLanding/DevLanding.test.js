import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import DevLanding from './DevLanding.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});



  it('should render as expected', () => {
    const component = shallow(<DevLanding />)
	 	expect(component.exists()).toBe(true);
  })
})
