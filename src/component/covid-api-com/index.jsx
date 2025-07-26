import CountrySelector from "./CountrySelector";
import Sumary from "./Sumary";
import Chart from "./Chart";
import { useState } from "react";

export default function CovidApp1() {
  const [countrySelected, setCountrySelected] = useState("VNM");
    const [dataCard, setDataCard] = useState({});
  return (
    <>
      <div className="text-white bg-blue-950 px-30 py-4">
        <div className="font-bold text-4xl">Số liệu COVID-19</div>
        <div className="text-sm mt-2">Cập nhật gần nhất {dataCard.last_update}</div>
      </div>
      <div className="px-30 pt-5">
        <CountrySelector countrySelected={countrySelected} setCountrySelected={setCountrySelected}/>

        <Sumary countrySelected={countrySelected} dataCard={dataCard} setDataCard={setDataCard}/>

        <Chart />
      </div>
    </>
  );
}
