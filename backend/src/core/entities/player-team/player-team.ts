import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";

export interface PlayerTeamProps {
  playerId: string,
  teamId: string,
  from: Date,
  until?: Date,
  createdAt:   Date
  updatedAt:   Date
}

export class PlayerTeam extends Entity<PlayerTeamProps> {

  static create(props: Optional<PlayerTeamProps, 'createdAt'>, id?: UniqueEntityID) {
    const entity = new PlayerTeam(
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

  public get teamId(): string {
    return this.props.teamId;
  }

  public set teamId(teamId: string) {
    this.props.teamId = teamId;
  }

  public get from(): Date {
    return this.props.from;
  }

  public set from(from: Date) {
    this.props.from = from;
  }

  public get until(): Date | undefined {
    return this.props.until;
  }

  public set until(until: Date | undefined) {
    this.props.until = until;
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