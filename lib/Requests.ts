
export type CreateRequest<
  TEntity, TFields extends keyof TEntity
> = Pick<TEntity, TFields>;
 
