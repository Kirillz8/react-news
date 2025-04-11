import { Skeleton } from "../../Skeleton/Skeleton.tsx";

// @ts-ignore
export function withSkeleton(Component, type, count, direction) {
  // @ts-ignore
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }
    return <Component {...restProps} />;
  };
}
