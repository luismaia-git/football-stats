import {
  ParticipationType,
  Performance,
} from "../entities/performance/performance";

export abstract class PerformancesRepository {
  abstract create(performance: Performance): Promise<void>;

  abstract findById(performanceId: string): Promise<Performance | null>;

  abstract save(performance: Performance): Promise<void>;

  abstract delete(performanceId: string): Promise<void>;

  // Busca todos os desempenhos de um jogador específico
  abstract findManyByPlayerId(playerId: string): Promise<Performance[]>; //Recuperar o desempenho de um jogador

  // Busca todos os desempenhos em uma partida específica
  abstract findManyByMatchId(matchId: string): Promise<Performance[]>; // Obter todas as performances em uma partida

  // Busca todos os desempenhos de um time específico
  abstract findManyByTeamId(teamId: string): Promise<Performance[]>; // Obter o desempenho de um time em várias partidas

  // Busca desempenhos dentro de um intervalo de datas (por exemplo, para análise de desempenho em um período específico)
  abstract findManyByDateRange(
    startDate: Date,
    endDate: Date,
  ): Promise<Performance[]>; // Para análises mais avançadas

  // Busca desempenhos filtrados por tipo de participação (starter, substitute, did not play)
  abstract findManyByParticipationType(
    participationType: ParticipationType,
  ): Promise<Performance[]>; // Para análises específicas de participação
}
