import {
  Player as PlayerPrisma,
  PlayerTeam as PlayerTeamPrisma,
} from "@prisma/client";
import { PlayerTeam } from "src/core/entities/player-team/player-team";
import { Player } from "src/core/entities/player/player";

import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export class PrismaPlayerMapper {
  static toPrisma(player: Player): PlayerPrisma {
    return {
      id: player.id.toValue(),
      name: player.name,
      teamId: player.teams.reduce(
        (max, playerTeams) => (playerTeams.from > max.from ? playerTeams : max),
        player.teams[0],
      ).teamId,
      position: player.position,
      createdAt: player.createdAt,
      updatedAt: player.updatedAt,
    };
  }

  static toDomain(raw: RawPrisma): Player {
    return Player.create(
      {
        name: raw.name,
        teams: raw.teams.map((playerTeam) =>
          PlayerTeam.create(playerTeam, new UniqueEntityID(playerTeam.id)),
        ),
        position: raw.position,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
}

type RawPrisma = PlayerPrisma & { teams: PlayerTeamPrisma[] };
