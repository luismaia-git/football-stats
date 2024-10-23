import { Injured } from "../entities/match/injured";

export abstract class InjuredsRepository {
  abstract create(injured: Injured): Promise<void>;

  abstract findById(injuredId: string): Promise<Injured | null>;

  abstract findByPlayerId(player: string): Promise<Injured[]>;

  abstract save(injured: Injured): Promise<void>;

  abstract delete(injuredId: string): Promise<void>;
}
