import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ouzz icon from Font Awesome 6
 * @module
 */
export function FaHouzz(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z"}}]})(props);
}
export default FaHouzz;
