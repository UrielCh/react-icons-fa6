import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * rchway icon from Font Awesome 6
 * @module
 */
export function FaArchway(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32H96h64V352c0-53 43-96 96-96s96 43 96 96V480h64 64c17.7 0 32-14.3 32-32s-14.3-32-32-32V128H32V416z"}}]})(props);
}
export default FaArchway;
