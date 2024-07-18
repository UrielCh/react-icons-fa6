import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * loudsmith icon from Font Awesome 6
 * @module
 */
export function FaCloudsmith(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 227.6v56.9L284.4 512H227.6L0 284.4V227.6L227.6 0h56.9L512 227.6zm-256 162a133.6 133.6 0 1 0 0-267.1 133.6 133.6 0 1 0 0 267.1z"}}]})(props);
}
export default FaCloudsmith;
