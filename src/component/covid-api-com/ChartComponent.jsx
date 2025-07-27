import LineChartComponent from "./LineChartComponent";


export default function ChartComponent({countrySelected, lastDate}) {
  return (
    <div className="mt-8 flex gap-16">
      <LineChartComponent countrySelected={countrySelected} lastDate={lastDate}/>
    </div>
  );
}
