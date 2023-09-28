import React, { createContext, useContext, useEffect } from "react";
import { ClientLoggerConfig, DBClientLogger } from "@jabz/client-db-logger";

export interface LoggerContextType {
  logger: DBClientLogger;
}
const LoggerContext = createContext({} as LoggerContextType);

export function useLogger() {
  const context = useContext(LoggerContext);
  useEffect(() => {}, [context]);
  return context.logger;
}

export function LoggerProvider(props: {
  children?: any;
  config: ClientLoggerConfig;
}) {
  const { children, config } = props;
  useEffect(() => {}, [config]);
  const logger = new DBClientLogger(config);
  const context: LoggerContextType = { logger };

  return (
    <LoggerContext.Provider value={context}>{children}</LoggerContext.Provider>
  );
}
