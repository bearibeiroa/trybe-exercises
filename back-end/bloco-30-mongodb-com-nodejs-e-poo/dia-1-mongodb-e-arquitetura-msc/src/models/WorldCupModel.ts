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

  public async getWorldCupsByYear (year:number): Promise<IWorldCup[]> {
    const games = await this.worldCupModel.find({ year });
    return games;
  } 

  public async createGame (gameData:object): Promise<IWorldCup> {
    const games = await this.worldCupModel.create(gameData);
    return games;
  }

  async editGame(id: string, bookData: object): Promise<IWorldCup | null> {
    const data = await this.worldCupModel.findOneAndUpdate(
      { _id: id },
      { ...bookData },
      { new: true }
    );
    return data;
  }

  public async deleteGame(champions: string): Promise<IWorldCup | null> {
    const game = await this.worldCupModel.findOneAndDelete({champions});
    return game;
  }
}
