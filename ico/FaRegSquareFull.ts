import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function FaRegSquareFull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 48V464H48V48H464zM48 0H0V48 464v48H48 464h48V464 48 0H464 48z"}}]})(props);
}
export default FaRegSquareFull;
