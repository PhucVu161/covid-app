import { useEffect, useState } from "react";

export default function CountrySelector({
  countrySelected,
  setCountrySelected,
}) {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    //lấy ds các quốc gia
    fetch("https://covid-api.com/api/regions")
      .then((response) => response.json())
      .then((data) => {
        //sắp xếp theo tên
        setCountries(data.data.sort((a, b) => a.name.localeCompare(b.name)));
      });
  }, []);

  return (
    <>
      <label className="text-gray-500 text-sm" htmlFor="country-selector">
        Quốc gia
      </label>
      <br />
      <select
        value={countrySelected}
        onChange={(e) => setCountrySelected(e.target.value)}
        className="text-xl w-100 border-b-2"
        name="country-selector"
        id="country-selector"
      >
        {countries
          .filter((country) => country.name !== "Taipei and environs")//bỏ tại trùng iso TWN với taiwan
          .map((country) => (
            <option key={country.iso} value={country.iso}>
              {country.name}
            </option>
          ))}
      </select>
      <div className="text-sm text-gray-400 mt-0.5">
        {countries.length === 0
          ? "Đang tải danh sách quốc gia..."
          : "Lựa chọn quốc gia "}
      </div>
    </>
  );
}
