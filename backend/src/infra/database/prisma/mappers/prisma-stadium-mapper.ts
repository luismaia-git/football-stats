import { Stadium as StadiumPrisma } from "@prisma/client";
import { Stadium } from "src/core/entities/stadium/stadium";

import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export class PrismaStadiumMapper {
  static toPrisma(stadium: Stadium): StadiumPrisma {
    return {
      id: stadium.id.toValue(),
      name: stadium.name,
      location: stadium.location,
      capacity: stadium.capacity,
      teamId: stadium.teamId,
      createdAt: stadium.createdAt,
      updatedAt: stadium.updatedAt,
    };
  }

  static toDomain(raw: StadiumPrisma): Stadium {
    return Stadium.create(
      {
        name: raw.name,
        location: raw.location,
        capacity: raw.capacity,
        teamId: raw.teamId,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
}
