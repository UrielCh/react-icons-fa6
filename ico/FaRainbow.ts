import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function FaRainbow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 96C178.6 96 64 210.6 64 352v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352C0 175.3 143.3 32 320 32s320 143.3 320 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352C576 210.6 461.4 96 320 96zm0 192c-35.3 0-64 28.7-64 64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-70.7 57.3-128 128-128s128 57.3 128 128v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-35.3-28.7-64-64-64zM160 352v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-123.7 100.3-224 224-224s224 100.3 224 224v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V352c0-88.4-71.6-160-160-160s-160 71.6-160 160z"}}]})(props);
}
export default FaRainbow;
