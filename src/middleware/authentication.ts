import { AuthenticationService } from "../auth/auth.service";

export function auth (req, res, next) {
    const authorizationHeader = req.headers.authorization;
    const isValid = AuthenticationService.authenticateToken(authorizationHeader);
    if (isValid) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }