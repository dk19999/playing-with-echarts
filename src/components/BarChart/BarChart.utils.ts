const initialOptions: EChartOptions = {
  xAxis: {
    type: "category",
    name: "Alcohol",
    data: [],
  },
  yAxis: {
    type: "value",
    name: "Malic Acid",
  },
  series: [
    {
      data: [],
      type: "bar",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

export const getBarChartOptions = (wineData: WineDataItem[]) => {
  
  //using map to get unique Alcohol keys 
  const barChartData = new Map();

  wineData.forEach((item: WineDataItem) => {
    const { sumOfMalicAcid, numberOfItems } = barChartData.get(
      item.Alcohol
    ) ?? { sumOfMalicAcid: 0, numberOfItems: 0 };


    //calculating average of Malic acid in each Alcohol category
    const newSumOfMalicAcid: number =
      sumOfMalicAcid + (item["Malic Acid"] ?? 0);
    const newNumberOfItems: number = numberOfItems + 1;
    const newAvg = newSumOfMalicAcid / newNumberOfItems;

    barChartData.set(item.Alcohol, {
      sumOfMalicAcid: newSumOfMalicAcid,
      numberOfItems: newNumberOfItems,
      averageOfMalicAcid: newAvg,
    });
  });

  //extracting unique Alcohol values for horizontal axis
  const xAxisData: string[] = Array.from(barChartData.keys());


  const series: number[] = Array.from(barChartData.values())?.map(
    ({ averageOfMalicAcid }) => averageOfMalicAcid
  );

  //updating options with the new data
  initialOptions["xAxis"]["data"] = xAxisData;
  initialOptions["series"][0]["data"] = series;

  return initialOptions;
};
