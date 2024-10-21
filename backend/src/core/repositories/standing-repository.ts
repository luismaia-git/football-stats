import { Standing } from "../entities/standing/standing";

export abstract class StandingsRepository {
  abstract create(standing: Standing): Promise<void>;
  abstract findById(standingId: string): Promise<Standing | null>;
  abstract save(standing: Standing): Promise<void>;
  abstract findByTeamId(teamId: string): Promise<Standing | null>;
  abstract findByChampionshipId(
    championshipId: string,
  ): Promise<Standing | null>;
  abstract findManyByPoints(points: number): Promise<Standing[]>;

  // Busca a classificação de um time específico em um campeonato
  abstract findByTeamIdAndChampionshipId(
    teamId: string,
    championshipId: string,
  ): Promise<Standing | null>; // Para verificar a posição de um time em um campeonato específico

  abstract delete(standingId: string): Promise<void>;
}
