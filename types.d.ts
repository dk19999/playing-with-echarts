interface WineDataItem {
  Alcohol: number;
  "Malic Acid": number;
  "Color intensity": number;
  Hue: number;
}

interface EChartOptions {
  xAxis: XAxis;
  yAxis: YAxis;
  series: Series[];
  tooltip: Tooltip;
}

interface XAxis {
  type: string;
  name: string;
  data: string[];
}

interface YAxis {
  type: string;
  name: string;
}

interface Series {
  data: number[];
  type: string;
  smooth: boolean;
}

interface Tooltip {
  trigger: string;
}
