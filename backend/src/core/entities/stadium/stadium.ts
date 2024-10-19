import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";


export interface StadiumProps {     
  name:      string
  location:  string
  capacity:  number
  teamId:   string
  createdAt: Date
  updatedAt: Date
}



export class Stadium extends Entity<StadiumProps> {
  
  static create(props: Optional<StadiumProps, 'createdAt'>, id?: UniqueEntityID) {
    const entity = new Stadium(
      { ...props, createdAt: props.createdAt ?? new Date() },
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
  
  public get location(): string {
    return this.props.location;
  }
  
  public set location(location: string) {
    this.props.location = location;
  }
  
  public get capacity(): number {
    return this.props.capacity;
  }
  
  public set capacity(capacity: number) {
    this.props.capacity = capacity;
  }
  
  public get teamId(): string {
    return this.props.teamId;
  }
  
  public set teamId(teamId: string) {
    this.props.teamId = teamId;
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