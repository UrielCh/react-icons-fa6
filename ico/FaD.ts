import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 *  icon from Font Awesome 6
 * @module
 */
export function FaD(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 96C0 60.7 28.7 32 64 32l96 0c123.7 0 224 100.3 224 224s-100.3 224-224 224l-96 0c-35.3 0-64-28.7-64-64L0 96zm160 0L64 96l0 320 96 0c88.4 0 160-71.6 160-160s-71.6-160-160-160z"}}]})(props);
}
export default FaD;
