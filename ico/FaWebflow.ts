import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ebflow icon from Font Awesome 6
 * @module
 */
export function FaWebflow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 64L435.8 463.2H244l85.5-165.5h-3.8C255.1 389.3 149.9 449.5 0 463.2V300.1s95.9-5.7 152.3-64.9H0V64H171.1V204.8l3.8 0L244.9 64H374.3V203.9l3.8 0L450.7 64H640z"}}]})(props);
}
export default FaWebflow;
