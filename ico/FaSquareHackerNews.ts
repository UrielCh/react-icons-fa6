import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * quareHackerNews icon from Font Awesome 6
 * @module
 */
export function FaSquareHackerNews(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM21 229.2c0 0 .1-.1 .1-.2s.1-.2 .2-.2c0 .1 0 .3-.1 .4H21zM239.2 384H207.8V281.3L128 128h37.3c41.5 77.7 48.1 95.8 54.1 112c1.6 4.3 3.1 8.5 5.2 13.6c3.2-7 5.1-11.9 7.1-17.3c5.9-15.3 12.8-33.2 53.5-108.3H320L239.2 283.1V384z"}}]})(props);
}
export default FaSquareHackerNews;
