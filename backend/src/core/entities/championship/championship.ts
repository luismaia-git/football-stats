import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";

export interface ChampionshipProps {
  name: string;
  season: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Championship extends Entity<ChampionshipProps> {
  static create(
    props: Optional<ChampionshipProps, "createdAt" | "updatedAt">,
    id?: UniqueEntityID,
  ) {
    const entity = new Championship(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id,
    );
    return entity;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(payload: string) {
    this.props.name = payload;
  }

  public get season(): string {
    return this.props.season;
  }

  public set season(payload: string) {
    this.props.season = payload;
  }
}
