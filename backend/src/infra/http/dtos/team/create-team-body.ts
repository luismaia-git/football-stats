import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamBody {
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @IsNotEmpty()
  city: string;
}
