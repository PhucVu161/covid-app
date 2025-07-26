import { useEffect, useState } from "react";

export default function CountrySelector() {
  const [countries, setCountries] = useState([]);
  const [countrySelector, setCountrySelector] = useState("VNM");
  useEffect(() => {
    fetch("https://covid-api.com/api/reports")
      .then((response) => response.json())
      .then((data) => {
        setCountries(
          Array.from(
            new Map( //lọc các dữ liệu của province khác nhưng trùng region chỉ lấy region riêng biệt
              data.data.map((item) => [
                item.region.iso,
                { iso: item.region.iso, name: item.region.name },
              ])
            ).values()
          )
        );
      });
  }, []);

  return (
    <>
      <label className="text-gray-500 text-sm" htmlFor="country-selector">
        Quốc gia
      </label>
      <br />
      <select
        value={countrySelector}
        onChange={(e) => setCountrySelector(e.target.value)}
        className="text-xl w-100 border-b-2"
        name="country-selector"
        id="country-selector"
      >
        {countries.length === 0 ? (
          <option>Đang tải quốc gia...</option>
        ) : (
          countries.map((country) => (
            <option key={country.iso} value={country.iso}>
              {country.name}
            </option>
          ))
        )}
      </select>
        <div className="text-sm text-gray-400 mt-0.5">
          {countries.length === 0 ? "Đang tải danh sách quốc gia..." : "Lựa chọn quốc gia " + countries.length}
        </div>
    </>
  );
}
