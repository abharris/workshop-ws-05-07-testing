/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../components/search_bar';
import VideoDetail from '../components/video_detail';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  it('Check for proper class name', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.hasClass('searchBar'));
  });
});
