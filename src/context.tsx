import React, { createContext, useContext, useEffect } from "react";
import { ClientLoggerConfig, DBClientLogger } from "@jabz/client-db-logger";
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

export function LoggerProvider(props: {
  children?: any;
  config: ClientLoggerConfig;
}) {
  const { children, config } = props;
  useEffect(nullFunc, [config]);
  const logger = new DBClientLogger(config);
  const context: LoggerContextType = { logger };

  return (
    <LoggerContext.Provider value={context}>{children}</LoggerContext.Provider>
  );
}
