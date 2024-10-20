import { Championship as ChampionshipPrisma } from "@prisma/client";
import { Championship } from "src/core/entities/championship/championship";
import { UniqueEntityID } from "src/core/entities/unique-entity-id";

export class PrismaChampionshipMapper {
  static toPrisma(championship: Championship): ChampionshipPrisma {
    return {
      id: championship.id.toValue(),
      name: championship.name,
      season: championship.season,
      createdAt: championship.createdAt,
      updatedAt: championship.updatedAt,
    };
  }

  static toDomain(raw: ChampionshipPrisma): Championship {
    return Championship.create(
      {
        name: raw.name,
        season: raw.season,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityID(raw.id),
    );
  }
}
