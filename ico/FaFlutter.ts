import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * lutter icon from Font Awesome 6
 * @module
 */
export function FaFlutter(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M429.5 236.3L291.7 374.1 429.5 512H272l-59.1-59.1-78.8-78.8L272 236.3H429.5zM272 0L16 256l78.8 78.8L429.5 0H272z"}}]})(props);
}
export default FaFlutter;
