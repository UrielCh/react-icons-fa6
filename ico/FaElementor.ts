import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * lementor icon from Font Awesome 6
 * @module
 */
export function FaElementor(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M.361 256C.361 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.05 255 2.05C114 2.05 .361 116 .361 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z"}}]})(props);
}
export default FaElementor;
