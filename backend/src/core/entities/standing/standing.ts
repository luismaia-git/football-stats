import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";


export interface StandingProps {     
  teamId: string
  championshipId: string
  points: number 
  wins: number 
  draws: number 
  loses: number 
  createdAt: Date
  updatedAt: Date
}



export class Standing extends Entity<StandingProps> {
  
  static create(props: Optional<StandingProps, 'createdAt'>, id?: UniqueEntityID) {
    const entity = new Standing(
      { ...props, createdAt: props.createdAt ?? new Date() },
      id,
    );
    return entity;
  }

  public get teamId(): string {
    return this.props.teamId;
  }
  
  public set teamId(teamId: string) {
    this.props.teamId = teamId;
  }
  
  public get championshipId(): string {
    return this.props.championshipId;
  }
  
  public set championshipId(championshipId: string) {
    this.props.championshipId = championshipId;
  }
  
  public get points(): number {
    return this.props.points;
  }
  
  public set points(points: number) {
    this.props.points = points;
  }
  
  public get wins(): number {
    return this.props.wins;
  }
  
  public set wins(wins: number) {
    this.props.wins = wins;
  }
  
  public get draws(): number {
    return this.props.draws;
  }
  
  public set draws(draws: number) {
    this.props.draws = draws;
  }
  
  public get loses(): number {
    return this.props.loses;
  }
  
  public set loses(loses: number) {
    this.props.loses = loses;
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