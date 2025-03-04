import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * arpDroplet icon from Font Awesome 6
 * @module
 */
export function FaTarpDroplet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 160c-35.3 0-64-26.9-64-60c0-24 33.7-70.1 52.2-93.5c6.1-7.7 17.5-7.7 23.6 0C318.3 29.9 352 76 352 100c0 33.1-28.7 60-64 60zM64 128l133.5 0c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64L512 128c35.3 0 64 28.7 64 64l0 160-128 0c-17.7 0-32 14.3-32 32l0 128L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64zM448 512l0-128 128 0L448 512zM96 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"}}]})(props);
}
export default FaTarpDroplet;
