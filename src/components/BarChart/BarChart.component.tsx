import ReactEcharts from "echarts-for-react";
import  { useState } from "react";
import { fetchWineData } from "../../services/api";
import {  getBarChartOptions } from "./BarChart.utils";

function BarChart() {
  const [options, setOptions] = useState<EChartOptions | null>(null);

  const setBarData = async () => {
    const wineData = await fetchWineData();
    const options = getBarChartOptions(wineData);
    setOptions(options);
  };

  setBarData();

  return options ? (
    <ReactEcharts
      option={options}
      style={{ width: "100%", height: "300px" }}
    ></ReactEcharts>
  ) : null;
}

export default BarChart;
