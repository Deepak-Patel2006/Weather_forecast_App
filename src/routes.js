import express from 'express';
import {call_api} from "./controller.js"

const routes = express.Router();

routes.get('/info_weather',call_api);

export default routes;
