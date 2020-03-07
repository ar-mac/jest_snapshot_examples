import React from "react";
import { shallow } from "enzyme";
import DataLists from "./DataLists";

describe("DataLists component", () => {
  it("renders data list correctly", () => {
    const users = ["user1"];
    expect(shallow(<DataLists users={users} />)).toMatchSnapshot();
  });

  it("renders single user without posts and single_user class", () => {
    const users = ["user1"];
    expect(shallow(<DataLists users={users} />)).toMatchSnapshot();
  });
});
