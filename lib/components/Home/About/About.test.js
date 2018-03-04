import React from 'react';
import About from './';

describe('About testing', () => {
  const wrapper = mount(<About />);

  it('should have h2.heading with title of <About me />', () => {
    expect(wrapper.find('h2.heading').text()).toEqual('<About me />');
  });

  // it('renders correctly', () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

});