import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * arp icon from Font Awesome 6
 * @module
 */
export function FaTarp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M576 128c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l352 0 0-128c0-17.7 14.3-32 32-32l128 0 0-160zM448 448L576 320l-128 0 0 128zM96 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"}}]})(props);
}
export default FaTarp;
