import { Team as TeamPrisma } from "@prisma/client";

import { Team } from "src/core/entities/team/team";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export class PrismaTeamMapper {
  static toPrisma(team: Team): TeamPrisma {
    return {
      id: team.id.toValue(),
      name: team.name,
      city: team.city,
      createdAt: team.createdAt,
      updatedAt: team.updatedAt,
    };
  }

  static toDomain(raw: TeamPrisma): Team {
    return Team.create(
      {
        name: raw.name,
        city: raw.city,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
}
