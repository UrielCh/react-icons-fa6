import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * rescriptionBottle icon from Font Awesome 6
 * @module
 */
export function FaPrescriptionBottle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32C0 14.3 14.3 0 32 0H352c17.7 0 32 14.3 32 32V64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64V32zm32 96H352V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V416H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V320H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V224H144c8.8 0 16-7.2 16-16s-7.2-16-16-16H32V128z"}}]})(props);
}
export default FaPrescriptionBottle;
