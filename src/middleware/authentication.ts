export function auth (req, res, next) {
    const isValid = true;
    if (isValid) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }