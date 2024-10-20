import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";
import { Stadium } from "../stadium/stadium";
import { Championship } from "../championship/championship";
import { MatchStatistics } from "../match-statistics/match-statistics";
import { Injured } from "./injured";
import { Performance } from "../performance/performance";

export interface MatchProps {
  date: Date;
  round: string;
  homeTeamId: string;
  awayTeamId: string;
  referee: string;
  championship: Championship;
  statistics: MatchStatistics[];
  performance: Performance[];
  injuredPlayers: Injured[];
  stadium: Stadium;
  createdAt: Date;
  updatedAt: Date;
}

export class Match extends Entity<MatchProps> {
  static create(props: Optional<MatchProps, "createdAt">, id?: UniqueEntityID) {
    const entity = new Match(
      { ...props, createdAt: props.createdAt ?? new Date() },
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

  public get round(): string {
    return this.props.round;
  }

  public set round(round: string) {
    this.props.round = round;
  }

  public get date(): Date {
    return this.props.date;
  }

  public set date(date: Date) {
    this.props.date = date;
  }

  public get homeTeamId(): string {
    return this.props.homeTeamId;
  }

  public set homeTeamId(homeTeamId: string) {
    this.props.homeTeamId = homeTeamId;
  }

  public get awayTeamId(): string {
    return this.props.awayTeamId;
  }

  public set awayTeamId(awayTeamId: string) {
    this.props.awayTeamId = awayTeamId;
  }

  public get stadium(): Stadium {
    return this.props.stadium;
  }

  public set stadium(stadium: Stadium) {
    this.props.stadium = stadium;
  }

  public get referee(): string {
    return this.props.referee;
  }

  public set referee(referee: string) {
    this.props.referee = referee;
  }

  public get championship(): Championship {
    return this.props.championship;
  }

  public set championship(championship: Championship) {
    this.props.championship = championship;
  }

  public get injuredPlayers(): Injured[] {
    return [...this.props.injuredPlayers];
  }

  public get performance(): Performance[] {
    return [...this.props.performance];
  }

  // Calcula o total de gols
  public get totalGoals(): number {
    return (this.statistics[0]?.goals ?? 0) + (this.statistics[1]?.goals ?? 0);
  }

  // Adiciona um jogador lesionado
  public addInjuredPlayer(injured: Injured): void {
    this.injuredPlayers.push(injured);
  }

  public get winner(): string | null {
    if (this.statistics[0]?.goals > this.statistics[1]?.goals)
      return this.homeTeamId;
    if (this.statistics[1]?.goals > this.statistics[0]?.goals)
      return this.awayTeamId;
    return null;
  }

  public wasPlayerInjured(playerId: string): boolean {
    const wasPlayerInjured = this.injuredPlayers.find(
      (injured) => injured.playerId === playerId,
    );
    if (wasPlayerInjured) return true;

    return false;
  }

  public get statistics() {
    return this.props.statistics;
  }
}
