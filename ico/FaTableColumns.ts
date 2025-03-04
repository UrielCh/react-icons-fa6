import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ableColumns icon from Font Awesome 6
 * @module
 */
export function FaTableColumns(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 160 0 0-256L64 160zm384 0l-160 0 0 256 160 0 0-256z"}}]})(props);
}
export default FaTableColumns;
