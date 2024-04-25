
export type CreateRequest<
  TEntity, TFields extends keyof TEntity
> = Pick<TEntity, TFields>

export type CreateResponse<
  TEntity, TIdentityField extends keyof TEntity
> = Pick<TEntity, TIdentityField>
 
