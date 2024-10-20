import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewReports = () => {
  const [allReports, SetAllReports] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://rabitrack-backend-production.up.railway.app/getAllCaseReport"
      )
      .then((res) => {
        SetAllReports(res.data);
        console.log(allReports);
      });
  }, []);

  return (
    <div className="flex flex-col items-center w-screen py-10">
      <h1 className="text-xl font-bold">REPORTS</h1>
      {/*Filter sections */}
      <div className="py-5 flex md:gap-5 max-md:flex-col hidden">
        <div className="flex items-center gap-4">
          <label>Select District</label>
          <select title="Select District" className="border p-2">
            <option>All</option>
            <option>Puducherry</option>
            <option>Karaikal</option>
            <option>Yanam</option>
            <option>Mahe</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label>Select Year</label>
          <select title="Select District" className="border p-2">
            <option>All</option>
            <option>2024</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label>Select Month</label>
          <select title="Select District" className="border p-2">
            <option>All</option>
            <option>October</option>
          </select>
        </div>
        {/*Reports */}
      </div>
      <div
        className={`${
          allReports.length > 2 ? "grid grid-cols-3 gap-10" : "flex gap-10"
        } max-md:flex max-md:flex-col py-10`}
      >
        {allReports.map((cases, index) => (
          <div
            key={index}
            className="border-2 p-5 rounded-xl bg-white shadow-2xl shadow-black/50"
          >
            <table className="mb-5">
              <tr className=" items-center">
                <td className="font-semibold text-lg">Doctor Name </td>
                <td>: {cases?.doctor_name}</td>
              </tr>
              <tr className=" items-center">
                <td className="font-semibold text-lg">Attacker Species </td>
                <td>: {cases?.attacker_species}</td>
              </tr>
              <tr className=" items-center">
                <td className="font-semibold text-lg">Victim Species</td>
                <td>: {cases?.victims_species}</td>
              </tr>
              <tr className=" items-center">
                <td className="font-semibold text-lg">Attack Date </td>
                <td>: {cases?.attack_date}</td>
              </tr>
              <tr className=" items-center">
                <td className="font-semibold text-lg">District </td>
                <td>: {cases?.district}</td>
              </tr>
            </table>
            <Link to={`/case/${cases?.case_id}`}>
              <button className="w-full bg-blue-500 py-2 text-white rounded-xl">
                Full Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewReports;
