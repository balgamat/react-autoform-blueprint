export interface IOptions<T extends { data: unknown; key?: string; label?: string }> {
  options: T[];
  keyExtractor(option: T['data']): string;
  labelExtractor(option: T['data']): string;
}
