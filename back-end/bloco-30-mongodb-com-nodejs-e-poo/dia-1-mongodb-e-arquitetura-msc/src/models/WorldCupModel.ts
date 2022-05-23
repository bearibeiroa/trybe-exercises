import { model as createModel } from 'mongoose';
import { WorldCupSchema, IWorldCup } from '../schemas/WorldCupSchema';

export default class WorldCupModel {
  constructor(
    private worldCupModel = createModel<IWorldCup>('tournaments', WorldCupSchema)
  ) { }

  public async getWorldCups (): Promise<IWorldCup[]> {
    const games = await this.worldCupModel.find();
    return games;
  } 
}
