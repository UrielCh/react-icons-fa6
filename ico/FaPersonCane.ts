import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ersonCane icon from Font Awesome 6
 * @module
 */
export function FaPersonCane(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M272 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-8 187.3l47.4 57.1c11.3 13.6 31.5 15.5 45.1 4.2s15.5-31.5 4.2-45.1l-73.7-88.9c-18.2-22-45.3-34.7-73.9-34.7H177.1c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L120 256.9V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352h16V480c0 17.7 14.3 32 32 32s32-14.3 32-32V235.3zM352 376c0-4.4 3.6-8 8-8s8 3.6 8 8V488c0 13.3 10.7 24 24 24s24-10.7 24-24V376c0-30.9-25.1-56-56-56s-56 25.1-56 56v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8z"}}]})(props);
}
export default FaPersonCane;
