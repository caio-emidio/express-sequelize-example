const jwt = require('jsonwebtoken');

const secretToken = process.env.TOKEN_SECRET || "secret";

export class AuthenticationService {
  public static signIn(username: string) {
    return jwt.sign(username, secretToken, { expiresIn: "1800s" });
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
