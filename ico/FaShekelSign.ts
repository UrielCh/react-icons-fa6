import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * hekelSign icon from Font Awesome 6
 * @module
 */
export function FaShekelSign(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M32 32C14.3 32 0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V96H192c35.3 0 64 28.7 64 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V160c0-70.7-57.3-128-128-128H32zM320 480c70.7 0 128-57.3 128-128V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V352c0 35.3-28.7 64-64 64H192V192c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32H320z"}}]})(props);
}
export default FaShekelSign;
