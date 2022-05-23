import { Router } from 'express';
import WordlCupController from './controllers/WordlCupController';

const routes = Router();

const worldCupController = new WordlCupController();

routes.get('/wordlcups', worldCupController.getGames);

export default routes;

