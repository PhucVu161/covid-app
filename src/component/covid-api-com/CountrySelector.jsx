import React from 'react'

export default function CountrySelector() {
  return (
    <>
    <label htmlFor="countries">Quốc gia</label><br />
    <select name="countries" id="countries">
      <option value="">Việt Nam</option>
      <option value="">Trung Quốc</option>
    </select>
    <div>Lựa chọn quốc gia</div>
    </>
  )
}
