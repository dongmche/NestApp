// base-service.interface.ts
export interface BaseService<T, R> {
  create(data: Partial<T>): Promise<R>;
  findAll(): Promise<T[]>;
  findOne(id: number): Promise<R>;
  update(id: number, data: Partial<T>): Promise<R>;
  delete(id: number): Promise<void>;
}
