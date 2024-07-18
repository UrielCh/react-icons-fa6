import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ickstarter icon from Font Awesome 6
 * @module
 */
export function FaKickstarter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM320.8 233l-23.3 23.1L320.8 279c24.1 23.9 24.1 63 0 86.9s-63.4 23.9-87.6 0l-8.5-8.4c-11.3 16-29.7 26.5-50.9 26.5c-34.1 0-61.9-27.5-61.9-61.4l0-133.2c0-33.8 27.7-61.4 61.9-61.4c21.1 0 39.6 10.5 50.9 26.5l8.5-8.4c24.1-23.9 63.4-23.9 87.6 0s24.1 63 0 86.9z"}}]})(props);
}
export default FaKickstarter;
