import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iamond icon from Font Awesome 6
 * @module
 */
export function FaDiamond(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M284.3 11.7c-15.6-15.6-40.9-15.6-56.6 0l-216 216c-15.6 15.6-15.6 40.9 0 56.6l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216z"}}]})(props);
}
export default FaDiamond;
