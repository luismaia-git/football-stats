import { PlayerTeam as PlayerTeamPrisma } from "@prisma/client";
import { PlayerTeam } from "src/core/entities/player-team/player-team";

import { UniqueEntityID } from "src/core/entities/unique-entity-id";
export class PrismaPlayerTeamMapper {
  static toPrisma(playerTeam: PlayerTeam): PlayerTeamPrisma {
    return {
      id: playerTeam.id.toValue(),
      playerId: playerTeam.playerId,
      teamId: playerTeam.teamId,
      from: playerTeam.from,
      until: playerTeam.until,
      createdAt: playerTeam.createdAt,
      updatedAt: playerTeam.updatedAt,
    };
  }

  static toDomain(raw: PlayerTeamPrisma): PlayerTeam {
    return PlayerTeam.create(
      {
        playerId: raw.playerId,
        teamId: raw.teamId,
        from: raw.from,
        until: raw.until,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
}
