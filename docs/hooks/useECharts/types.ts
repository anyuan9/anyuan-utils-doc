import type {
  ECharts,
  EChartsOption,
  SetOptionOpts,
} from "echarts";
import type { Fn, ComputedRefValue, RefValue } from "../../types";

// 事件类型定义
declare type ElementEventName =
  | "click"
  | "dblclick"
  | "mousewheel"
  | "mouseout"
  | "mouseover"
  | "mouseup"
  | "mousedown"
  | "mousemove"
  | "contextmenu"
  | "drag"
  | "dragstart"
  | "dragend"
  | "dragenter"
  | "dragleave"
  | "dragover"
  | "drop"
  | "globalout"
  | "selectchanged"
  | "highlight"
  | "downplay"
  | "legendselectchanged"
  | "legendselected"
  | "legendunselected"
  | "legendselectall"
  | "legendinverseselect"
  | "legendscroll"
  | "datazoom"
  | "datarangeselected"
  | "graphroam"
  | "georoam"
  | "treeroam"
  | "timelinechanged"
  | "timelineplaychanged"
  | "restore"
  | "dataviewchanged"
  | "magictypechanged"
  | "geoselectchanged"
  | "geoselected"
  | "geounselected"
  | "axisareaselected"
  | "brush"
  | "brushEnd"
  | "brushselected"
  | "globalcursortaken"
  | "rendered"
  | "finished";

// 动画配置接口
interface AnimationOptions {
  enable: boolean;
  // 例如：{ transition: "all 2s" }
  styles?: Record<string, string>;
}

// 加载选项接口
export interface LoadingOptions {
  type?: string; // 可选，加载动画类型，目前只有一种'default'
  opts?: {
    text?: string; // 默认'loading'
    color?: string; // 默认'#c23531'
    textColor?: string; // 默认'#000'
    maskColor?: string; // 默认'rgba(255, 255, 255, 0.8)'
    zlevel?: number; // 默认0
    // 字体大小。默认12，从 `v4.8.0` 开始支持
    fontSize?: number;
    // 是否显示旋转动画（spinner）。默认true，从 `v4.8.0` 开始支持
    showSpinner?: boolean;
    // 旋转动画（spinner）的半径。默认10，从 `v4.8.0` 开始支持
    spinnerRadius?: number;
    // 旋转动画（spinner）的线宽。默认5，从 `v4.8.0` 开始支持
    lineWidth?: number;
    // 字体粗细。默认'normal'，从 `v5.0.1` 开始支持
    fontWeight?: string;
    // 字体风格。默认'normal'，从 `v5.0.1` 开始支持
    fontStyle?: string;
    // 字体系列。默认'sans-serif'，从 `v5.0.1` 开始支持
    fontFamily?: string;
  };
}

// 追加数据选项
export interface AppendDataOptions {
  // 要增加数据的系列序号
  seriesIndex: number;
  // 增加的数据
  data: any;
}

// 数据URL选项
export interface DataURLOptions {
  // 导出的格式，可选 png, jpg, svg（注意：png, jpg 只有在 canvas 渲染器的时候可使用，svg 只有在使用 svg 渲染器的时候可用）
  type?: "png" | "jpeg" | "svg";
  // 导出的图片分辨率比例，默认为 1
  pixelRatio?: number;
  // 导出的图片背景色，默认使用 option 里的 backgroundColor
  backgroundColor?: string;
  // 忽略组件的列表，例如要忽略 toolbox 就是 ['toolbox']
  excludeComponents?: Array<string>;
}
export interface ConnectedDataURL extends DataURLOptions {
  connectedBackgroundColor?: string;
}

// 事件选项
export interface EventOptions {
  // 事件名称，必传，全小写，例如'click'。具体的可以看 [events](https://echarts.apache.org/zh/api.html#events)
  eventName: ElementEventName;
  // 回调函数，必传，返回 [params 参数](https://echarts.apache.org/zh/api.html#events.%E9%BC%A0%E6%A0%87%E4%BA%8B%E4%BB%B6)
  handler: Fn;
  // 可选的过滤条件，点击 [此处](https://echarts.apache.org/handbook/zh/concepts/event/#%E9%BC%A0%E6%A0%87%E4%BA%8B%E4%BB%B6%E7%9A%84%E5%A4%84%E7%90%86) 搜索`query`进行了解
  query?: string | object;
  // 自定义的属性，echarts事件（默认，点击图形元素时被触发）或 [zrender事件，点击任何地方都会被触发，可用于实现监听空白处的事件](https://echarts.apache.org/handbook/zh/concepts/event/#%E7%9B%91%E5%90%AC%E2%80%9C%E7%A9%BA%E7%99%BD%E5%A4%84%E2%80%9D%E7%9A%84%E4%BA%8B%E4%BB%B6)
  type?: "echarts" | "zrender";
}

// ECharts 配置选项
type Theme = "default" | "light" | "dark" | string;
export interface EchartsConfigOptions {
  // 主题色（可选`default`、`light`、`dark`，也可以 [自定义主题](https://echarts.apache.org/zh/theme-builder.html) ，默认`default`）
  theme?: Theme | RefValue<Theme> | ComputedRefValue<Theme>;
  // 是否自动开启 loading 效果，默认`true`
  autoLoading?: boolean;
  // 是否自动循环播放Tooltip，默认`true`
  autoTooltipLoop?: boolean;
  // 是否自动循环高亮当前图形，默认`true`
  autoHighlightLoop?: boolean;
  // 自动循环播放的series下标，默认0
  autoLoopIndex?: number;
  // 自动循环播放的延迟时间，单位为毫秒，默认1500
  autoLoopDelay?: number;
  // 在设置图表实例的配置项时，是否清空当前实例。会移除实例中的图表，一般用于动态渲染，默认：`true`
  autoClear?: boolean;
  // 是否监听页面尺寸resize，自动调整图表尺寸，默认`true`
  autoResize?: boolean;
  // 是否监听容器元素尺寸resize，自动调整图表尺寸，默认`true`
  autoChartResize?: boolean;
  // 监听尺寸变化的延迟时间，单位为毫秒，默认300
  autoResizeDelay?: number;
  animation?: AnimationOptions;
}

// 返回的方法接口
export interface EchartsReturn {
  chartInstance: ECharts | null;
  registerMap: (mapName: string, geoJson: any, specialAreas?: any) => void;
  setOption: (
    options: EChartsOption,
    opts?: SetOptionOpts,
    eventOptions?: EventOptions[]
  ) => void;
  getInstance: () => ECharts | null;
  showLoading: (params?: LoadingOptions) => void;
  hideLoading: () => void;
  resize: () => void;
  clear: () => void;
  dispose: () => void;
  getDom: () => HTMLCanvasElement | HTMLElement | null;
  getWidth: () => number;
  getHeight: () => number;
  getOption: () => any;
  appendData: (opts: AppendDataOptions) => void;
  getDataURL: (opts: DataURLOptions) => string;
  getConnectedDataURL: (opts: ConnectedDataURL) => string;
}

export interface UseAutoLoopReturn {
  start: () => void;
  stop: () => void;
  pause: () => void;
  resume: () => void;
}