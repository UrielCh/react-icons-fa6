import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 *  icon from Font Awesome 6
 * @module
 */
export function FaT(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l128 0 0 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352 128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 32 32 32z"}}]})(props);
}
export default FaT;
