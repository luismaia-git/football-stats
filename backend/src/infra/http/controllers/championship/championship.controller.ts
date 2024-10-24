import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateChampionship } from "src/core/use-cases/championship/create-championship";
import { FindChampionship } from "src/core/use-cases/championship/find-championship";
import { ChampionshipViewModel } from "../../view-model/championship-view-model";
import { CreateChampionshipBody } from "../../dtos/championship/create-championship-body";

@Controller("championships")
export class ChampionshipsController {
  constructor(
    private createChampionship: CreateChampionship,
    private findChampionship: FindChampionship,
  ) {}

  @Get(":id")
  async getTeam(@Param("id") id: string) {
    const { championship } = await this.findChampionship.execute({
      id,
    });

    return ChampionshipViewModel.toHTTP(championship);
  }

  @Post()
  async create(@Body() body: CreateChampionshipBody) {
    const { name, season } = body;

    const { championship } = await this.createChampionship.execute({
      name,
      season,
    });

    return {
      championship: ChampionshipViewModel.toHTTP(championship),
    };
  }
}
