import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * oreHole icon from Font Awesome 6
 * @module
 */
export function FaBoreHole(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 0c-17.7 0-32 14.3-32 32V296.6c-19.1 11.1-32 31.7-32 55.4c0 35.3 28.7 64 64 64s64-28.7 64-64c0-23.7-12.9-44.4-32-55.4V32c0-17.7-14.3-32-32-32zM48 128c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48H384c-17.7 0-32 14.3-32 32V352c0 53-43 96-96 96s-96-43-96-96V160c0-17.7-14.3-32-32-32H48z"}}]})(props);
}
export default FaBoreHole;
