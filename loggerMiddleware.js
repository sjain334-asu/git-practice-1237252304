// loggerMiddleware.js - logs each request (Samyak Jain, 1237252304)
function loggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
}

module.exports = loggerMiddleware;
