import { Chart } from "react-google-charts";

const data = [
  ["City", "Population"],
  // Thành phố trực thuộc trung ương - dùng mã chữ (thường hỗ trợ tốt hơn trong GeoChart basic)
  ["VN-HN", 8000000], // Hà Nội
  ["VN-SG", 9000000], // TP.HCM
  ["VN-DN", 1100000], // Đà Nẵng
  ["VN-HP", 2000000], // Hải Phòng
  ["VN-CT", 1300000], // Cần Thơ

  // Các tỉnh còn lại theo ISO dạng số (dùng với resolution: "provinces")
  ["VN-01", 460000], // Lai Châu
  ["VN-02", 730000], // Lào Cai
  ["VN-03", 870000], // Hà Giang
  ["VN-04", 800000], // Cao Bằng
  ["VN-05", 1200000], // Sơn La
  ["VN-06", 770000], // Yên Bái
  ["VN-07", 800000], // Tuyên Quang
  ["VN-09", 970000], // Lạng Sơn
  ["VN-13", 1300000], // Quảng Ninh
  ["VN-14", 850000], // Hòa Bình
  ["VN-18", 930000], // Ninh Bình
  ["VN-20", 1200000], // Thái Bình
  ["VN-21", 3500000], // Thanh Hóa
  ["VN-22", 3200000], // Nghệ An
  ["VN-23", 1300000], // Hà Tĩnh
  ["VN-24", 900000], // Quảng Bình
  ["VN-25", 640000], // Quảng Trị
  ["VN-26", 1230000], // Thừa Thiên Huế
  ["VN-27", 1500000], // Quảng Nam
  ["VN-28", 550000], // Kon Tum
  ["VN-29", 1200000], // Quảng Ngãi
  ["VN-30", 1500000], // Gia Lai
  ["VN-31", 1900000], // Bình Định
  ["VN-32", 870000], // Phú Yên
  ["VN-33", 1900000], // Đắk Lắk
  ["VN-34", 1400000], // Khánh Hòa
  ["VN-35", 1300000], // Lâm Đồng
  ["VN-36", 600000], // Ninh Thuận
  ["VN-37", 1200000], // Tây Ninh
  ["VN-39", 3100000], // Đồng Nai
  ["VN-40", 1200000], // Bình Thuận
  ["VN-41", 1800000], // Long An
  ["VN-44", 1200000], // Bà Rịa - Vũng Tàu
  ["VN-45", 2500000], // Bình Dương
  ["VN-46", 1000000], // Bình Phước
  ["VN-47", 1200000], // Cà Mau
  ["VN-49", 1700000], // Đồng Tháp
  ["VN-50", 1900000], // An Giang
  ["VN-51", 1700000], // Tiền Giang
  ["VN-52", 1050000], // Vĩnh Long
  ["VN-53", 1400000], // Bến Tre
  ["VN-54", 1000000], // Trà Vinh
  ["VN-55", 1100000], // Sóc Trăng
  ["VN-56", 1900000], // Kiên Giang
  ["VN-57", 1240000], // Cần Thơ (trùng VN-CT)
  ["VN-58", 770000], // Hậu Giang
  ["VN-59", 1800000], // Bắc Giang
  ["VN-61", 350000], // Bắc Kạn
  ["VN-62", 1600000], // Bắc Ninh
  ["VN-63", 1900000], // Hải Dương
  ["VN-66", 2100000], // Hải Phòng (trùng VN-HP)
  ["VN-67", 1200000], // Hưng Yên
  ["VN-68", 8000000], // Hà Nội (trùng VN-HN)
  ["VN-70", 9000000], // TP.HCM (trùng VN-SG)
  ["VN-72", 1800000], // Nam Định
  ["VN-73", 1600000], // Phú Thọ
  ["VN-74", 1300000], // Thái Nguyên
  ["VN-75", 1200000], // Vĩnh Phúc
  ["VN-76", 600000], // Điện Biên
  ["VN-77", 700000], // Đắk Nông
  ["VN-78", 750000], // Hậu Giang (trùng VN-58)
  ["VN-79", 1800000], // Bắc Giang (trùng VN-59)
  ["VN-80", 1600000], // Bắc Ninh (trùng VN-62)
];

const options = {
  region: "VN",                // Mã quốc gia ISO (VN = Việt Nam)
  resolution: "provinces",     // Hiển thị cấp tỉnh/thành
  displayMode: "regions",      // "regions" cho tô vùng, "markers" cho chấm điểm
  backgroundColor: "#ffffff",  // Màu nền trơn (tránh lộ nước lân cận)
  datalessRegionColor: "#fff", // Màu cho khu vực không có dữ liệu (ẩn nước lân cận)
  colorAxis: { colors: ["#FFCDD2", "#B71C1C"] }, // Gradient màu
};

export default function MapChartComponent() {
  return (
    <div className="grow">
      <Chart
        chartType="GeoChart"
        width="100%"
        height="420px"
        data={data}
        options={options}
      />
    </div>
  );
}
