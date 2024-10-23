import { Player } from "src/core/entities/player/player";

export class PlayerViewModel {
  static toHTTP(player: Player) {
    const { id, age, name, position, createdAt, updatedAt, teams } = player;
    return {
      id,
      age,
      name,
      position,
      createdAt,
      updatedAt,
      teams,
    };
  }
}
