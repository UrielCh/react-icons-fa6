import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * hieldDog icon from Font Awesome 6
 * @module
 */
export function FaShieldDog(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64l0-64 44.2 0c12.1 0 23.2 6.8 28.6 17.7L320 192l64 0c8.8 0 16 7.2 16 16l0 32c0 44.2-35.8 80-80 80l-48 0 0 50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8 .6-5.5 1.9-8l15-30zM160 160l40 0 8 0 0 32 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"}}]})(props);
}
export default FaShieldDog;
