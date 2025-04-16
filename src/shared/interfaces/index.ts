import type { CategoriesType } from "@/entities/category";

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export interface IFilters {
  pageNumber: number;
  pageSize: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

// export interface IBanner {
//   description: string;
//   id: NewsId;
//   image: string;
//   title: string;
//   url: UrlType;
// }

// export type ItemType = INews & IBanner;
