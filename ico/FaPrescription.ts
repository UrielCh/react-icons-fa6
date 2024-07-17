import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function FaPrescription(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M32 0C14.3 0 0 14.3 0 32V192v96c0 17.7 14.3 32 32 32s32-14.3 32-32V224h50.7l128 128L137.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L288 397.3 393.4 502.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L333.3 352 438.6 246.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 306.7l-85.8-85.8C251.4 209.1 288 164.8 288 112C288 50.1 237.9 0 176 0H32zM176 160H64V64H176c26.5 0 48 21.5 48 48s-21.5 48-48 48z"}}]})(props);
}
export default FaPrescription;
