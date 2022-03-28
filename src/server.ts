import { DatabaseService } from "./database/database.service";
import * as express from "express";
import internalRouter from "./router/router";
const app = express();

const PORT = 8000;
app.use(express.json());
app.use(internalRouter);
Promise.all([DatabaseService.init()]).then(() => {
  DatabaseService.authenticate().then(() => {
    DatabaseService.defineModels();
    DatabaseService.applyExtraSetup();
    app.listen(PORT, () => {
      console.log(`Example app listening on PORT ${PORT}`);
    });
  });
});
