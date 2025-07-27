import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const BUTTONS = [
  {
    btnID: 0,
    title: "TẤT CẢ",
    daysAgo: 850,
    dayStep: 50,
  },
  {
    btnID: 1,
    title: "30 NGÀY",
    daysAgo: 30,
    dayStep: 2,
  },
  {
    btnID: 2,
    title: "7 NGÀY",
    daysAgo: 6,
    dayStep: 1,
  },
];

const options = {
  chartArea: {
    top: 30,
    left: 80,
    width: "90%",
  },
  colors: ["#ef4444"], //tạo màu cho đường line
  curveType: "none", //tạo kiểu cho đường line
  pointSize: 0, // hiện chấm với kích thước 3px
  legend: { position: "bottom" },
};

const fetchDataLineChart = async (iso, lastDate, setDataLineChart, selected) => {
  const promises = [];
  const btnSelected = BUTTONS[selected];

  for (let i = btnSelected.daysAgo; i >= 0; i -= btnSelected.dayStep) {
    const date = new Date(lastDate);
    console.log("lastDate:" +lastDate);
    date.setDate(date.getDate() - i);
    const dateString = date.toISOString().slice(0, 10);
    const url = `https://covid-api.com/api/reports/total?iso=${iso}&date=${dateString}`;
    promises.push(
      fetch(url)
        .then((res) => res.json())
        .then((data) => [data.data.date, data.data.confirmed])
    );
  }
  const data = await Promise.all(promises);
  setDataLineChart([["Thời gian", "Số ca nhiễm"], ...data]);
  console.log(data);
};

export default function LineChartComponent({ countrySelected, lastDate }) {
  const [dataLineChart, setDataLineChart] = useState([]);
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    if (lastDate) {
      fetchDataLineChart(countrySelected, lastDate, setDataLineChart, selected);
    }
    console.log(dataLineChart);
  }, [countrySelected, lastDate, selected]);

  return (
    <div className="bg-white rounded shadow-md w-7/12 h-[400px] flex flex-col justify-center items-center">
      <div className="self-end mr-2">
        {BUTTONS.map((button) => {
            const buttonSelectedStyle = selected === button.btnID ? "text-red-400  border-red-300" : "";            
          return (
            <button
              className={`text-[12px] font-light px-2 border-y-2 border-l-2 border-gray-300 first:rounded-l-md last:border-r-2 last:rounded-r-md hover:cursor-pointer hover:text-red-300 ${buttonSelectedStyle}`}
              key={button.btnID}
              onClick={()=>setSelected(button.btnID)}
            >
              {button.title}
            </button>
          );
        })}
      </div>
      <h1 className="text-xl">Thống kê ca nhiễm</h1>
      {dataLineChart < 2 ? (
        <div>Loading...</div>
      ) : (
        <Chart
          chartType="LineChart"
          width="100%"
          height="100%"
          data={dataLineChart}
          options={options}
        />
      )}
    </div>
  );
}
