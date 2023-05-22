export interface ListApiResponse<T> {
  data: T[];
  payload?: {
    pagination?: PaginationResponse;
  };
  items: [];
  categories: [];
  trending_categories: [];
  newest_courses: [];
}

export interface PaginationResponse {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}
