import ReactEcharts from "echarts-for-react";

import { useState } from "react";
import { fetchWineData } from "../../services/api";
import { getScatterPlotOptions } from "./ScatterPlot.utils";

function ScatterPlot() {
  const [options, setOptions] = useState<EChartOptions | null>(null);

  const setScatterData = async () => {
    const wineData = await fetchWineData();
    const options = getScatterPlotOptions(wineData);
    setOptions(options);
  };

  setScatterData();

  return options ? (
    <ReactEcharts
      option={options}
      style={{ width: "100%", height: "300px" }}
    ></ReactEcharts>
  ) : null;
}

export default ScatterPlot;
