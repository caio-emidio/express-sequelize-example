import { AuthenticationService } from "../auth/auth.service";

export class AuthWrapper {
  public static signIn(req: any, res: any) {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "admin" && password === "admin") {
      const token = AuthenticationService.signIn(username);
      res.json({ access_token: token });
    } else {
      res.status(401).send("Unauthorized");
    }
  }
}
