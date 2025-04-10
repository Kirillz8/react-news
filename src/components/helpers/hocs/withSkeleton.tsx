import { Skeleton } from "../../Skeleton/Skeleton.tsx";

// @ts-ignore
export function withSkeleton(Component, type, count) {
  // @ts-ignore
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }
    return <Component {...restProps} />;
  };
}
