import { IsNotEmpty, Length } from "class-validator";

export class CreatePlayerBody {
  @IsNotEmpty()
  @Length(2, 100)
  name: string;

  @IsNotEmpty()
  position: string;

  @IsNotEmpty()
  age: string;
}
