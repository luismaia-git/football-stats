import { Stadium } from "../entities/stadium/stadium";

export abstract class StadiumRepository {

  abstract create(stadium: Stadium): Promise<void>;

  // Busca um estádio específico pelo ID
  abstract findById(stadiumId: string): Promise<Stadium | null>;

  // Atualiza os dados de um estádio existente
  abstract save(stadium: Stadium): Promise<void>;

  // Deleta um estádio pelo ID
  abstract delete(stadiumId: string): Promise<void>;

  
  abstract findManyByTeamId(teamId: string): Promise<Stadium[]>; // Útil para obter todos os estádios de um time, caso tenha vários


  abstract findAll(): Promise<Stadium[]>; 
}