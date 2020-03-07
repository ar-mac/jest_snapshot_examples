import React from "react";
import { shallow } from "enzyme";
import DataLists from "../DataLists";

describe("DataLists component", () => {
  // BAD - generic and not helpful test name
  it("renders data list correctly", () => {
    const users = ["user1"];
    expect(shallow(<DataLists users={users} />)).toMatchSnapshot();
  });

  // LITTLE BETTER - test name at least suggests what is the reason of the test
  it("renders single user without posts and with single_user class", () => {
    const users = ["user1"];
    expect(shallow(<DataLists users={users} />)).toMatchSnapshot();
  });
});
