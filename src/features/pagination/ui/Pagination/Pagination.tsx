import type { IPaginationProps } from "@/features/pagination/model/types.ts";
import type { ReactNode } from "react";
import { PaginationButtons } from "@/features/pagination/ui/PaginationButtons/PaginationButtons.tsx";

interface Props {
  children: ReactNode;
  top?: boolean;
  bottom?: boolean;
}

export const Pagination = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
};
