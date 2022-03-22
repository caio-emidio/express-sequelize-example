import { DatabaseService } from 'database/database.service';
import * as express from 'express';
import internalRouter from "./router/router";
const app = express();

const PORT = 8000;

app.get('/auth', (req, res) => {
  res.send('Authenticated');
})

app.use(internalRouter)

DatabaseService.authenticate().then(() => {
  app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})});
