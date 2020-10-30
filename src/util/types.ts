export interface IOptions<T = any> {
  options: Array<{ data: T; key?: string; label?: string }>;
  keyExtractor(option: T): string;
  labelExtractor(option: T): string;
}
