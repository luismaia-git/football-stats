import { Championship } from "src/core/entities/championship/championship";

export class ChampionshipViewModel {
  static toHTTP(championship: Championship) {
    const { id, name, season, createdAt, updatedAt } = championship;
    return {
      id,
      name,
      season,
      createdAt,
      updatedAt,
    };
  }
}
