import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";
import { Player } from "../player/player";

export enum ParticipationType {
  STARTER = "STARTER",
  SUBSTITUTE = "SUBSTITUTE",
  DID_NOT_PLAY = "DID_NOT_PLAY",
}

export interface PerformanceProps {
  playerId: string;
  matchDetailsId: string;
  minutesPlayed: number;
  gols: number;
  assist: number;
  yellowCards: number;
  redCards: number;
  participationType: ParticipationType;
  createdAt:   Date
  updatedAt:   Date
}

export class Performance extends Entity<PerformanceProps> {
  
  static create(props: Optional<PerformanceProps, 'createdAt'>, id?: UniqueEntityID) {
    const entity = new Performance(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    );
    return entity;
  }

  public get playerId(): string {
    return this.props.playerId;
  }

  public set playerId(playerId: string) {
    this.props.playerId = playerId;
  }

  public get matchDetailsId(): string {
    return this.props.matchDetailsId;
  }

  public set matchDetailsId(matchDetailsId: string) {
    this.props.matchDetailsId = matchDetailsId;
  }

  public get minutesPlayed(): number {
    return this.props.minutesPlayed;
  }

  public set minutesPlayed(minutes: number) {
    this.props.minutesPlayed = minutes;
  }

  public get gols(): number {
    return this.props.gols;
  }

  public set gols(gols: number) {
    this.props.gols = gols;
  }

  public get assist(): number {
    return this.props.assist;
  }

  public set assist(assist: number) {
    this.props.assist = assist;
  }

  public get yellowCards(): number {
    return this.props.yellowCards;
  }

  public set yellowCards(cards: number) {
    this.props.yellowCards = cards;
  }

  public get redCards(): number {
    return this.props.redCards;
  }

  public set redCards(cards: number) {
    this.props.redCards = cards;
  }

  public get participationType(): ParticipationType {
    return this.props.participationType;
  }

  public set participationType(type: ParticipationType) {
    this.props.participationType = type;
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

}