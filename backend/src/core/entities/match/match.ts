import { UniqueEntityID } from '../unique-entity-id';
import { Optional } from '../types/optional';
import { Entity } from '../entity';
import { Stadium } from '../stadium/stadium';
import { Championship } from '../championship/championship';
import { Team } from '../team/team';
import { Player } from '../player/player';

export interface MatchProps {
  date: Date;
  homeTeam: Team;
  awayTeam: Team;
  stadium: Stadium;
  referee: string;
  championship: Championship;
  homeScore?: number;
  awayScore?: number;
  injuredPlayers: Player[];
  performance: Performance[];
  createdAt: Date;
  updatedAt: Date;
}

export class Match extends Entity<MatchProps> {
  static create(props: Optional<MatchProps, 'createdAt'>, id?: UniqueEntityID) {
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

  public get date(): Date {
    return this.props.date;
  }

  public set date(date: Date) {
    this.props.date = date;
  }

  public get homeTeam(): Team {
    return this.props.homeTeam;
  }

  public set homeTeam(homeTeam: Team) {
    this.props.homeTeam = homeTeam;
  }

  public get awayTeam(): Team {
    return this.props.awayTeam;
  }

  public set awayTeam(awayTeam: Team) {
    this.props.awayTeam = awayTeam;
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

  public get homeScore(): number {
    return this.props.homeScore;
  }

  public set homeScore(score: number) {
    if (score < 0) {
      throw new Error('Score cannot be negative.');
    }
    this.props.homeScore = score;
  }

  public get awayScore(): number {
    return this.props.awayScore;
  }

  public set awayScore(score: number) {
    if (score < 0) {
      throw new Error('Score cannot be negative.');
    }
    this.props.awayScore = score;
  }

  public get injuredPlayers(): Player[] {
    return [...this.props.injuredPlayers];
  }

  public get performance(): Performance[] {
    return [...this.props.performance];
  }

  // Calcula o total de gols
  public get totalGoals(): number {
    return (this.homeScore ?? 0) + (this.awayScore ?? 0);
  }

  // Adiciona um jogador lesionado
  public addInjuredPlayer(player: Player): void {
    this.injuredPlayers.push(player);
  }

  public get winner(): Team | null {
    if (this.homeScore > this.awayScore) return this.homeTeam;
    if (this.awayScore > this.homeScore) return this.awayTeam;
    return null;
  }

  public wasPlayerInjured(player: Player): boolean {
    return this.injuredPlayers.includes(player);
  }
}
