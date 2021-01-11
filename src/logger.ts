import * as Winston from "winston";

const logger = Winston.createLogger({
  level: "info",
  format: Winston.format.json(),
  defaultMeta: { service: "api-base" },
  transports: []
});

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new Winston.transports.Console({
      format: Winston.format.simple()
    })
  );
} else {
  // If we are in production, write logs to file instead
  logger.add(
    // - Write all logs with level `error` and below to `error.log`
    new Winston.transports.File({ filename: "logs/error.log", level: "error" })
  );
  logger.add(
    // - Write all logs with level `info` and below to `combined.log`
    new Winston.transports.File({ filename: "combined.log" })
  );
}

export default logger;
