import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * iacoin icon from Font Awesome 6
 * @module
 */
export function FaViacoin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M384 32h-64l-80.7 192h-94.5L64 32H0l48 112H0v48h68.5l13.8 32H0v48h102.8L192 480l89.2-208H384v-48h-82.3l13.8-32H384v-48h-48l48-112zM192 336l-27-64h54l-27 64z"}}]})(props);
}
export default FaViacoin;
