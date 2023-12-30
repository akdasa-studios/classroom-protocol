export interface Cache<
  TKeyType,
  TItemType
> {
  add(key: TKeyType, item: TItemType): void;
  get(key: TKeyType): TItemType | undefined;
  invalidate(): void;
}
