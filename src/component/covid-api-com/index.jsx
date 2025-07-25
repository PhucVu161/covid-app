import CountrySelector from "./CountrySelector";
import Sumary from "./Sumary";
import Chart from "./Chart";

export default function CovidApp1() {
  return (
    <>
      <div className="text-white bg-blue-950 px-30 py-4">
        <div className="font-bold text-4xl">Số liệu COVID-19</div>
        <div>time</div>
      </div>
      <div className="px-30 pt-5">
        <CountrySelector />

        <Sumary />

        <Chart />
      </div>
    </>
  );
}
