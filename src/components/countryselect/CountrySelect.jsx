"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

// console.log(data[0].img + data[0].label);
export default function CountrySelect() {
  let location = useRouter();
  // console.log(location);
  const slectOpt = [
    {
      value: "INR",
      currencyTag: "₹",
      flag: "🇮🇳",
    },
    {
      value: "USD",
      currencyTag: "$",
      flag: "🇺🇸",
    },
    {
      value: "EUR",
      currencyTag: "€",
      flag: "🇪🇺",
    },
  ];
  const [selectedFrequency, setSelectedFrequency] = useState("3");
  const [selectedCountry, setSelectedCountry] = useState(slectOpt[0].value);
  // const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  // console.log(products);
  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [location]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    localStorage.setItem("selectedCountry", e.target.value);
    window.location.reload();
  };
  const handleFrequencyChange = (e) => {
    // console.log(e.target.value);
    setSelectedFrequency(e.target.value);
  };

  return (
    <select
      onChange={handleCountryChange}
      value={selectedCountry}
      className="flagSelect"
    >
      {slectOpt.map((opt, index) => (
        <option value={opt.currencyTag} key={opt.currencyTag}>
          {opt.flag} &nbsp; {opt.value}
        </option>
      ))}
    </select>
  );
}
