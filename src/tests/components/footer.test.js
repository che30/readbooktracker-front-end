import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from '../../components/Footer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('footer', ()=>{
  it('verifies measure class', ()=>{
    const wrapper = shallow(<Footer />)
    expect(wrapper.find(".measure").length).toEqual(1);
   
  })
  it("Redirects a user", ()=>{
    const wrapper = shallow(<Footer/>);
    expect(wrapper.find(".board__top").text()).toBe("Board");
    // wrapper.find(".fa-bar-chart").simulate("click");
    // expect(wrapper.find("measure").hasClass("fa-bar-chart")).toBeTruthy();
    
  })
})