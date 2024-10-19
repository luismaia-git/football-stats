import { randomUUID } from "node:crypto";
import { Replace } from "src/core/helpers/replace";
import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";
import { Player } from "../player/player";
import { Stadium } from "../stadium/stadium";

export interface TeamProps {
  name:        string   
  city:        string
  players:     Player[]
  createdAt:   Date
  updatedAt:   Date
  stadium:     Stadium[]   
}

export class Team extends Entity<TeamProps> {

  static create(props: Optional<TeamProps, 'createdAt'>, id?: UniqueEntityID) {
    const team = new Team(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    );
    return team;
  }

  public get name(): string {
    return this.props.name;
  }
  
  public set name(name: string) {
    this.props.name = name;
  }
  
  public get city(): string {
    return this.props.city;
  }
  
  public set city(city: string) {
    this.props.city = city;
  }
  
  public get players(): Player[] {
    return this.props.players;
  }
  
  public set players(players: Player[]) {
    this.props.players = players;
  }
  
  public get createdAt(): Date {
    return this.props.createdAt;
  }
  
  // `createdAt` normalmente não possui setter
  
  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
  
  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt;
  }
  
  public get stadium(): Stadium[] {
    return this.props.stadium;
  }
  
  public set stadium(stadium: Stadium[]) {
    this.props.stadium = stadium;
  }
  
}