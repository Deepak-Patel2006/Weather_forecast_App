import express from 'express';
import routes from './routes.js';
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname,'../public')));
app.use(express.json());

app.use('/weather',routes);

export default app;
  