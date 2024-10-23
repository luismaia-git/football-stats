import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";

import { PlayerTeam } from "../player-team/player-team";

export interface PlayerProps {
  name: string;
  age?: number;
  position: string;
  createdAt: Date;
  updatedAt: Date;
  teams: PlayerTeam[];
}

export class Player extends Entity<PlayerProps> {
  static create(
    props: Optional<PlayerProps, "createdAt" | "updatedAt" | "teams">,
    id?: UniqueEntityID,
  ) {
    const entity = new Player(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
        teams: props.teams ?? [],
      },
      id,
    );
    return entity;
  }
  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get position(): string {
    return this.props.position;
  }

  public set position(position: string) {
    this.props.position = position;
  }

  public get age(): number {
    return this.props.age;
  }

  public set age(age: number) {
    this.props.age = age;
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

  public get teams(): PlayerTeam[] {
    return this.props.teams;
  }

  public set teams(playerTeam: PlayerTeam[]) {
    this.props.teams = playerTeam;
  }
}
