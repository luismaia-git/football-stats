import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";

export interface InjuredProps {
  description: string;
  playerId: string;
  matchId?: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export class Injured extends Entity<InjuredProps> {
  static create(
    props: Optional<
      InjuredProps,
      "createdAt" | "updatedAt" | "matchId" | "date"
    >,
    id?: UniqueEntityID,
  ) {
    const entity = new Injured(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
        date: props.updatedAt ?? new Date(),
      },
      id,
    );
    return entity;
  }

  // description
  public get description(): string {
    return this.props.description;
  }

  public set description(value: string) {
    this.props.description = value;
  }

  // playerId
  public get playerId(): string {
    return this.props.playerId;
  }

  public set playerId(value: string) {
    this.props.playerId = value;
  }

  // matchId
  public get matchId(): string | undefined {
    return this.props.matchId;
  }

  public set matchId(value: string | undefined) {
    this.props.matchId = value;
  }

  // date
  public get date(): Date {
    return this.props.date;
  }

  public set date(value: Date) {
    this.props.date = value;
  }

  // createdAt
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  // updatedAt
  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public set updatedAt(value: Date) {
    this.props.updatedAt = value;
  }
}
