exports.logPath = function logPath(req, res, next) {
    const { category } = req.params;
    res.locals.category = category;

    next();
  }