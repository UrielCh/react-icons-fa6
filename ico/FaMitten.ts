import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * itten icon from Font Awesome 6
 * @module
 */
export function FaMitten(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M352 384L64 384 5.4 178.9C1.8 166.4 0 153.4 0 140.3C0 62.8 62.8 0 140.3 0l3.4 0c66 0 123.5 44.9 139.5 108.9l31.4 125.8 17.6-20.1C344.8 200.2 362.9 192 382 192l2.8 0c34.9 0 63.3 28.3 63.3 63.3c0 15.9-6 31.2-16.8 42.9L352 384zM32 448c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-32z"}}]})(props);
}
export default FaMitten;
