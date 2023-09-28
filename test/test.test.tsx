import React from "react";
import { testingFunction } from "../src";
import { Testing } from "../src/testComponent";
import renderer from "react-test-renderer";

test("defualt Test", () => {
  expect(testingFunction()).toBe(0);
});

test("snapshot", () => {
  const tree = renderer.create(<Testing />).toJSON();
  expect(tree).toMatchSnapshot();
});
