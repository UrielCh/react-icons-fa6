import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * omputerMouse icon from Font Awesome 6
 * @module
 */
export function FaComputerMouse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 192l176 0L176 0 160 0C71.6 0 0 71.6 0 160l0 32zm0 32L0 352c0 88.4 71.6 160 160 160l64 0c88.4 0 160-71.6 160-160l0-128-192 0L0 224zm384-32l0-32C384 71.6 312.4 0 224 0L208 0l0 192 176 0z"}}]})(props);
}
export default FaComputerMouse;
