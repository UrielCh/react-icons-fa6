import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * readSlice icon from Font Awesome 6
 * @module
 */
export function FaBreadSlice(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C192 32 0 64 0 192c0 35.3 28.7 64 64 64V432c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V256c35.3 0 64-28.7 64-64C512 64 320 32 256 32z"}}]})(props);
}
export default FaBreadSlice;
