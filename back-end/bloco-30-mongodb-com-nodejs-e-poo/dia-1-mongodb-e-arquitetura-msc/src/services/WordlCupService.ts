import WorldCupModel from '../models/WorldCupModel';
import { IWorldCup } from '../schemas/WorldCupSchema';

export default class WordlCupService {
  constructor(private worldCupModel = new WorldCupModel()) { }
  
  public async getWorldCups (): Promise<IWorldCup[]> {
    const games = await this.worldCupModel.getWorldCups();
    return games;
  }
}
