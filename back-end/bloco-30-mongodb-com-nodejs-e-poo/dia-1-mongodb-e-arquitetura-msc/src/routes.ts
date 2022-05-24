import { Router } from 'express';
import WordlCupController from './controllers/WordlCupController';

const routes = Router();

const worldCupController = new WordlCupController();

routes.get('/worldcups', worldCupController.getGames);
routes.get('/worldcups/:year', worldCupController.getGamesByYear);
routes.post('/worldcups', worldCupController.createGame);
routes.put('/worldcups/:id', worldCupController.updateGame);

export default routes;

