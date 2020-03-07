import React from "react";
import { shallow } from "enzyme";
import DataLists from "../DataLists";

describe("DataLists component", () => {
  // BAD - only snapshot in the test
  it("renders single user without posts and with single_user class", () => {
    const users = ["user1"];
    expect(shallow(<DataLists users={users} />)).toMatchSnapshot();
  });

  // GOOD - test with manual assertions
  it("renders single user without posts and with single_user class", () => {
    const users = ["user1"];
    const wrapper = shallow(<DataLists users={users} />);

    expect(wrapper.find("ul").text()).toContain("user1");
    expect(wrapper.exists(".single_user")).toBe(true);
  });
});
