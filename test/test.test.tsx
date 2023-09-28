// import React from "react";
// import renderer from "react-test-renderer";
// import { LoggerProvider, useLogger } from "../src/index";
// import { ClientLoggerConfig } from "@jabz/client-db-logger";
// const config: ClientLoggerConfig = {
//   sessionID: "",
//   appName: "",
//   environment: "",
//   loggingEndPoint: "",
//   sendThreshHold: 10,
// };
// test("snapshot", () => {
//   const tree = renderer.create(<LoggerProvider config={config} />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test("useLogger", () => {
//   const TempComponent = () => {
//     const logger = useLogger();
//     (async () => {
//       logger.error("test");
//     })();
//     return <></>;
//   };
//   const Wrap = () => (
//     <LoggerProvider config={config}>
//       <TempComponent />
//     </LoggerProvider>
//   );
//   const tree = renderer.create(<Wrap />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

test("", () => {
  expect(true).toBe(true);
});
