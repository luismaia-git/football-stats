import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";


export interface RefereeProps {     
  name: string
  nationality: string
  createdAt: Date
  updatedAt: Date
}


export class Referee extends Entity<RefereeProps> {
  
  static create(props: Optional<RefereeProps, 'createdAt'>, id?: UniqueEntityID) {
    const entity = new Referee(
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

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get nationality(): string {
    return this.props.nationality;
  }

  public set nationality(nationality: string) {
    this.props.nationality = nationality;
  }
  

}