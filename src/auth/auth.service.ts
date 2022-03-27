const jwt = require('jsonwebtoken');

const secretToken = process.env.TOKEN_SECRET || "secret";

export class AuthenticationService {
  public static signIn(param: string) {
    try {
      return jwt.sign({param}, secretToken, { expiresIn: '1h'});
    } catch (error) {
      throw new Error(error);
    }
  }

  private static verify(token: string) {
    return jwt.verify(token, secretToken);
  }

  public static authenticateToken(authorizationHeader: string) {
    const token = authorizationHeader && authorizationHeader.split(" ")[1];

    if (token == null) {
      throw new Error("No token, authorization denied");
    }
    return this.verify(token);
  }
}
