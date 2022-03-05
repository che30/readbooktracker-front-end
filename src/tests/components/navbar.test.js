import React from 'react';
import { mount, shallow } from 'enzyme';
import Navbar from '../../components/Navbar';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe("Navabr", () => {
  it("wraps content in a nav with .Navcontent class", ()=>{
    const wrapper = shallow(<Navbar Navcontent="Dashboard"/>);
    expect(wrapper.find(".Navcontent").length).toEqual(1);
    expect(wrapper.find(".Navcontent").text()).toBe("Dashboard");
  })
  it("displays the current Navbar", ()=>{
    const wrapper = shallow(<Navbar Navcontent="Dashboard"/>);
    expect(wrapper.find(".Navcontent").text()).toBe("Dashboard");
  })
  it("Logs out a user", ()=>{
    const wrapper = shallow(<Navbar Navcontent="Dashboard"/>);
    wrapper.find(".sign__out__Btn").simulate("click");
    expect(wrapper.find("nav").hasClass("Navcontent")).toBeFalsy();
    
  })
})