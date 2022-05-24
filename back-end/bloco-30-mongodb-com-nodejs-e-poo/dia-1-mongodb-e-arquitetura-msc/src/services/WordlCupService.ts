import WorldCupModel from '../models/WorldCupModel';
import { IWorldCup } from '../schemas/WorldCupSchema';

export default class WordlCupService {
  constructor(private worldCupModel = new WorldCupModel()) { }
  
  public async getWorldCups (): Promise<IWorldCup[]> {
    const games = await this.worldCupModel.getWorldCups();
    return games;
  }

  public async getWorldCupsByYear (year : number): Promise<IWorldCup[] | null > {
    const games = await this.worldCupModel.getWorldCupsByYear(year);
    return games;
  }
}
