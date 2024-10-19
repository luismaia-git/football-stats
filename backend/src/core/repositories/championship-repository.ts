import { Championship } from "../entities/championship/championship";

export abstract class ChampionshipsRepository {
  abstract create(championship: Championship): Promise<void>;
  abstract findById(championshipId: string): Promise<Championship | null>;
  abstract save(championship: Championship): Promise<void>;
  abstract findManyBySeason(season: string): Promise<Championship[]>;
  abstract delete(championshipId: string): Promise<void>;
}