import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * nkh icon from Font Awesome 6
 * @module
 */
export function FaAnkh(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M96 128c0-35.3 28.7-64 64-64s64 28.7 64 64c0 41.6-20.7 76.6-46.6 104.1c-5.9 6.2-11.8 11.8-17.4 16.7c-5.6-4.9-11.5-10.5-17.4-16.7C116.7 204.6 96 169.6 96 128zM160 0C89.3 0 32 57.3 32 128c0 52.4 21.5 95.5 46.8 128L32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-46.8 0c25.4-32.5 46.8-75.6 46.8-128C288 57.3 230.7 0 160 0z"}}]})(props);
}
export default FaAnkh;
