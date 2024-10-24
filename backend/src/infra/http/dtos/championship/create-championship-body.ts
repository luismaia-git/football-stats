import { IsNotEmpty, Length } from "class-validator";

export class CreateChampionshipBody {
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @IsNotEmpty()
  season: string;
}
