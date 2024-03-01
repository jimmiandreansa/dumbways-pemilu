import Chart from "react-apexcharts";

const PieChart = () => {
  return (
    <div>
      <Chart
        type="pie"
        width={380}
        height={380}
        series={[23, 43, 50]}
        options={{
          noData: { text: "Empty Data" },
          colors: ["#FF6384", "#FFCD56", "#36A2EB"],
          legend: {
            show: false,
          },
        }}
      ></Chart>
    </div>
  );
};

export default PieChart;
