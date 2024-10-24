import { Injectable } from "@nestjs/common";
import { Championship } from "src/core/entities/championship/championship";
import { ChampionshipsRepository } from "src/core/repositories/championship-repository";

interface FindChampionshipRequest {
  id: string;
}
interface FindChampionshipResponse {
  championship: Championship;
}

@Injectable()
export class FindChampionship {
  constructor(private championshipsRepository: ChampionshipsRepository) {}

  async execute(
    request: FindChampionshipRequest,
  ): Promise<FindChampionshipResponse> {
    const { id } = request;

    const championship = await this.championshipsRepository.findById(id);

    return {
      championship,
    };
  }
}
