import LineChartComponent from "./LineChartComponent";
import MapChartComponent from "./MapChartComponent";

export default function ChartComponent({countrySelected, lastDate}) {
  return (
    <div className="mt-8 flex gap-16">
      <LineChartComponent countrySelected={countrySelected} lastDate={lastDate}/>
      <MapChartComponent/>
    </div>
  );
}
