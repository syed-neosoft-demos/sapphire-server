import winston from "winston";
const { combine, timestamp, printf, colorize, align } = winston.format;

const customFormat = printf(({ timestamp, level, message, ...metadata }) => {
  let log = `${timestamp} ${level}: ${message}`;
  if (metadata) log += ` | ${JSON.stringify(metadata?.[0])}`;
  return log;
});

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    align(),
    customFormat
  ),
  transports: [new winston.transports.Console()],
  silent: process.env.LOG_SILENT_KEY === "true",
});

export const INFO_LOG = (requestId, ...all) => {
  logger.info(requestId, all);
};

export const ERROR_LOG = (requestId, ...all) => {
  logger.error(requestId, all);
};
