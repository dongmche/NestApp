// base-service.interface.ts
export interface BaseService<T> {
  create(data: Partial<T>): Promise<T>;
  findAll(): Promise<T[]>;
  findOne(id: number): Promise<T>;
  update(id: number, data: Partial<T>): Promise<T>;
  delete(id: number): Promise<void>;
}
