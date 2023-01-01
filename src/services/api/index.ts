const fetchWineData = async () => {
  const response = await fetch("wine-data.json");
  const data = await response.json();
  return data;
};

export { fetchWineData };
