export interface PaginationLimit {
  limit: number;
  page: number;
}

export interface PaginationLinks {
  first: PaginationLimit;
  last: PaginationLimit;
  prev: PaginationLimit | null;
  next: PaginationLimit | null;
}

export interface PaginationMeta {
  totalCount: number;
}
