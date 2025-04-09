export interface IMapper<T, D> {
  toDto(entity: T): D; // Converts Entity → DTO
  toEntity(dto: D): Partial<T>; // Converts DTO → Entity (partial for creation/update)
}
