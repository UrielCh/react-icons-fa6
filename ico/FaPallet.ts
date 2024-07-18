import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * allet icon from Font Awesome 6
 * @module
 */
export function FaPallet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H64v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 320 544h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H576V384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H544 320 96 32zm96 64H288v64H128V384zm224 0H512v64H352V384z"}}]})(props);
}
export default FaPallet;
