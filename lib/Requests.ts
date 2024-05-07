
/**
 * Represents a type for creating a request.
 * @template TEntity The entity type.
 * @template TFields The fields of the entity type.
 */
export type CreateRequest<
  TEntity, TFields extends keyof TEntity
> = Pick<TEntity, TFields>

export type CreateResponse<
  TEntity, TIdentityField extends keyof TEntity
> = Pick<TEntity, TIdentityField>

