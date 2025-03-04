import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * egSquareFull icon from Font Awesome 6
 * @module
 */
export function FaRegSquareFull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 48l0 416L48 464 48 48l416 0zM48 0L0 0 0 48 0 464l0 48 48 0 416 0 48 0 0-48 0-416 0-48L464 0 48 0z"}}]})(props);
}
export default FaRegSquareFull;
