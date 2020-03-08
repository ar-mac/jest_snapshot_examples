import React from "react";
import { shallow } from "enzyme";
import DataLists from "../DataLists";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("DataLists component", () => {
  // GOOD - test with manual assertions and snapshot to check for regressions
  it("renders single user without posts and with single_user class", () => {
    const users = ["user1"];
    const wrapper = shallow(<DataLists users={users} />);

    expect(wrapper.find("ul").text()).toContain("user1");
    expect(wrapper.exists(".single_user")).toBe(true);

    expect(wrapper).toMatchSnapshot();
  });
});
