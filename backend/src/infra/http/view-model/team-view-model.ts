import { Team } from "src/core/entities/team/team";

export class TeamViewModel {
  static toHTTP(team: Team) {
    const { id, city, name, createdAt, updatedAt } = team;
    return {
      id,
      city,
      name,
      createdAt,
      updatedAt,
    };
  }
}
