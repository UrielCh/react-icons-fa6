import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * quareFull icon from Font Awesome 6
 * @module
 */
export function FaSquareFull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 0H512V512H0V0z"}}]})(props);
}
export default FaSquareFull;
