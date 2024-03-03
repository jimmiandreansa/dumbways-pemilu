import Chart from "react-apexcharts";

const PieChart = () => {
  return (
    <div>
      <Chart
        type="pie"
        width={380}
        height={380}
        series={[51, 35, 14]}
        options={{
          noData: { text: "Empty Data" },
          colors: ["#FF6384", "#FFCD56", "#36A2EB"],
          labels: [
            "BRANDON EICH, M.KOM",
            "ANNA BETADINE, S.H.",
            "KUPUKUPU, S.AG",
          ],
          legend: {
            show: false,
          },
        }}
      ></Chart>
    </div>
  );
};

export default PieChart;
