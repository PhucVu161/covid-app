import { useEffect, useState } from "react";
import Card from "./Card";

const CARDS = [
  {
    type: "confirmed",
    color: "border-red-500",
    title: "Số ca xác nhận",
  },
  {
    type: "active",
    color: "border-green-500",
    title: "Số ca nhiễm",
  },
  {
    type: "deaths",
    color: "border-gray-500",
    title: "Số ca tử vong",
  },
]

export default function Sumary({ countrySelected, dataCard, setDataCard }) {
  useEffect(() => {
    fetch(`https://covid-api.com/api/reports/total?iso=${countrySelected}`)
      .then((data) => data.json())
      .then((data) => {
        setDataCard(data.data)
      });
  }, [countrySelected]);
  return (
    <div className="flex mt-6 justify-around gap-8">
      {CARDS.map(({ type, color, title}) => (
        <Card key={type} color={color} title={title} data={dataCard[type]} />
      ))}
    </div>
  );
}
