import { Injectable } from "@nestjs/common";
import { Championship } from "src/core/entities/championship/championship";
import { ChampionshipsRepository } from "src/core/repositories/championship-repository";

interface CreateChampionshipRequest {
  name: string;
  season: string;
}

interface CreateChampionshipResponse {
  championship: Championship;
}

@Injectable()
export class CreateChampionship {
  constructor(private championshipsRepository: ChampionshipsRepository) {}

  async execute(
    request: CreateChampionshipRequest,
  ): Promise<CreateChampionshipResponse> {
    const { name, season } = request;

    const championship = Championship.create({
      name,
      season,
    });

    await this.championshipsRepository.create(championship);

    return {
      championship,
    };
  }
}
