import type { ReactNode } from "react";
import type { IPaginationProps } from "../../interfaces";
import { Pagination } from "../Pagination/Pagination.tsx";

interface Props {
  children: ReactNode;
  top?: boolean;
  bottom?: boolean;
}

export const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};
