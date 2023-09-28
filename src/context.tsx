import React, { createContext, useContext, useEffect } from "react";
import {
  ClientLoggerConfig as Config,
  DBClientLogger as DCL,
} from "@jabz/client-db-logger";
export type DBClientLogger = DCL;
export type ClientLoggerConfig = Config;
export interface LoggerContextType {
  logger: DBClientLogger;
}
const LoggerContext = createContext({} as LoggerContextType);
const nullFunc = () => {
  2;
};
export function useLogger() {
  const context = useContext(LoggerContext);
  useEffect(nullFunc, [context]);
  return context.logger;
}

export function LoggerProvider(props: { children?: any; config: Config }) {
  const { children, config } = props;
  useEffect(nullFunc, [config]);
  const logger = new DCL(config);
  const context: LoggerContextType = { logger };

  return (
    <LoggerContext.Provider value={context}>{children}</LoggerContext.Provider>
  );
}
