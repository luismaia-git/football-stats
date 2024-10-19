import { randomUUID } from "node:crypto";
import { Replace } from "src/core/helpers/replace";
import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";


export interface InjuredProps {
  description: string
  playerId:   string
  date:    Date
  createdAt:   Date
  updatedAt:   Date
}

export class Injured extends Entity<InjuredProps> {

  static create(props: Optional<InjuredProps, 'createdAt'>, id?: UniqueEntityID) {
    const entity = new Injured(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    );
    return entity;
  }

  public get description(): string {
    return this.props.description;
  }
  
  public set description(description: string) {
    this.props.description = description;
  }
  
  public get playerId(): string {
    return this.props.playerId;
  }
  
  public set playerId(playerId: string) {
    this.props.playerId = playerId;
  }
  
  public get date(): Date {
    return this.props.date;
  }
  
  public set date(date: Date) {
    this.props.date = date;
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