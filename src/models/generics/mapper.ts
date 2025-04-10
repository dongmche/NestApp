export interface IMapper<Entity, ResponseDto, RequestDto> {
  toDto(entity: Entity): ResponseDto; // Converts Entity → DTO
  toEntity(dto: RequestDto): Partial<Entity>; // Converts DTO → Entity (partial for creation/update)
}
