import { Request, Response } from 'express';
import { IWorldCup } from '../schemas/WorldCupSchema';
import WordlCupService from '../services/WordlCupService';

export default class WolrdCupController {
  constructor(private worldCupService = new WordlCupService()) { }
  
  NOT_FOUND = 'Game not found';

  INTERNAL_ERROR = 'Internal server error';

  public getGames = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const games = await this.worldCupService.getWorldCups();
      return res.status(200).send(games);
    } catch (err) {
      return res.status(500).send({ message: this.NOT_FOUND });
    }
  };

  public getGamesByYear = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { year } = req.params;
      const games = await this.worldCupService.getWorldCupsByYear(Number(year));
      if (games?.length === 0) {
        return res.status(404).send({ message: 'Não houve Copa do Mundo neste ano' });
      }
      return res.status(200).send(games);
    } catch (err) {
      return res.status(500).send({ message: this.INTERNAL_ERROR });
    }
  };

  public createGame = async (req: Request, res: Response): Promise<Response> => {
    try {
      const game = await this.worldCupService.createGame(req.body);
      return res.status(201).send(game);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.NOT_FOUND });
    }
  };
}
