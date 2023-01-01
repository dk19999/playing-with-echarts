const initialOptions: EChartOptions = {
  xAxis: {
    type: "category",
    name: "Color Intensity",
    data: [],
  },
  yAxis: {
    type: "value",
    name: "Hue",
  },
  series: [
    {
      data: [],
      type: "scatter",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

export const getScatterPlotOptions = (wineData: WineDataItem[]) => {
  const xAxisData = wineData?.map((item: WineDataItem) =>
    item["Color intensity"].toString()
  );

  const series = wineData?.map((item: WineDataItem) => item["Hue"]);

  initialOptions["xAxis"]["data"] = xAxisData;
  initialOptions["series"][0]["data"] = series;
  return initialOptions;
};
