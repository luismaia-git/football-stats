import { UniqueEntityID } from "../unique-entity-id";
import { Optional } from "../types/optional";
import { Entity } from "../entity";
export interface TeamProps {
  name: string;
  city: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Team extends Entity<TeamProps> {
  static create(
    props: Optional<TeamProps, "createdAt" | "updatedAt">,
    id?: UniqueEntityID,
  ) {
    const team = new Team(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
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

  public update(props: Partial<TeamProps>): void {
    if (props.name) this.props.name = props.name;
    if (props.city) this.props.city = props.city;
    this.props.updatedAt = new Date();
  }
}
