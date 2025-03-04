import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * anSmoking icon from Font Awesome 6
 * @module
 */
export function FaBanSmoking(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M99.5 144.8L178.7 224l96 96 92.5 92.5C335.9 434.9 297.5 448 256 448C150 448 64 362 64 256c0-41.5 13.1-79.9 35.5-111.2zM333.3 288l-32-32 82.7 0 0 32-50.7 0zm32 32l34.7 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-130.7 0L144.8 99.5C176.1 77.1 214.5 64 256 64c106 0 192 86 192 192c0 41.5-13.1 79.9-35.5 111.2L365.3 320zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM272 96c-8.8 0-16 7.2-16 16c0 26.5 21.5 48 48 48l32 0c8.8 0 16 7.2 16 16s7.2 16 16 16s16-7.2 16-16c0-26.5-21.5-48-48-48l-32 0c-8.8 0-16-7.2-16-16s-7.2-16-16-16zM229.5 320l-96-96L112 224c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l117.5 0z"}}]})(props);
}
export default FaBanSmoking;
