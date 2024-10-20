import { Optional } from "../types/optional";
import { Entity } from "../entity";

import { UniqueEntityID } from "../unique-entity-id";

export interface MatchStatisticsProps {
  matchId: string;
  teamId: string;
  possessionPercentage: number; // Percentual de posse de bola
  goals: number;
  yellowCards: number;
  redCards: number;
  formation: string;
  captain: string;
  result: string;

  createdAt: Date;
  updatedAt: Date;
}

export class MatchStatistics extends Entity<MatchStatisticsProps> {
  static create(
    props: Optional<MatchStatisticsProps, "createdAt">,
    id?: UniqueEntityID,
  ) {
    const entity = new MatchStatistics(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    );
    return entity;
  }

  // matchId
  public get matchId(): string {
    return this.props.matchId;
  }

  public set matchId(value: string) {
    this.props.matchId = value;
  }

  // teamId
  public get teamId(): string {
    return this.props.teamId;
  }

  public set teamId(value: string) {
    this.props.teamId = value;
  }

  // possessionPercentage
  public get possessionPercentage(): number {
    return this.props.possessionPercentage;
  }

  public set possessionPercentage(value: number) {
    this.props.possessionPercentage = value;
  }

  // goals
  public get goals(): number {
    return this.props.goals;
  }

  public set goals(value: number) {
    this.props.goals = value;
  }

  // yellowCards
  public get yellowCards(): number {
    return this.props.yellowCards;
  }

  public set yellowCards(value: number) {
    this.props.yellowCards = value;
  }

  // redCards
  public get redCards(): number {
    return this.props.redCards;
  }

  public set redCards(value: number) {
    this.props.redCards = value;
  }

  // formation
  public get formation(): string {
    return this.props.formation;
  }

  public set formation(value: string) {
    this.props.formation = value;
  }

  // captain
  public get captain(): string {
    return this.props.captain;
  }

  public set captain(value: string) {
    this.props.captain = value;
  }

  // result
  public get result(): string {
    return this.props.result;
  }

  public set result(value: string) {
    this.props.result = value;
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
