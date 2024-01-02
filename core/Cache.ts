export interface Cache<
  TModel,
  TQuery,
> {
  get(query: TQuery): Promise<TModel[]>
  save(model: TModel[]): void
  hash(query: TQuery): string
  invalidate(): void
}