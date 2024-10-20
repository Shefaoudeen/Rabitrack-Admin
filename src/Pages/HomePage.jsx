import React from "react";
import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
} from "recharts";
import CaseCount from "../Components/Home/CaseCount";
import { Link } from "react-router-dom";
import BarGraph from "../Components/Home/BarGraph";

const HomePage = () => {
  const datas = [
    {
      Month: "Jan",
      cases: 10,
    },
    {
      Month: "Feb",
      cases: 10,
    },
    {
      Month: "Mar",
      cases: 10,
    },
    {
      Month: "Apr",
      cases: 10,
    },
    {
      Month: "May",
      cases: 10,
    },
    {
      Month: "Jun",
      cases: 10,
    },
    {
      Month: "Jul",
      cases: 10,
    },
    {
      Month: "Aug",
      cases: 10,
    },
    {
      Month: "Sep",
      cases: 10,
    },
    {
      Month: "Oct",
      cases: 10,
    },
    {
      Month: "Nov",
      cases: 10,
    },
    {
      Month: "Dec",
      cases: 10,
    },
  ];

  return (
    <div className="flex w-screen max-md:flex-col max-md:py-10">
      <div className="md:min-w-[40%] h-full  flex justify-center items-center">
        <CaseCount />
      </div>
      <div className="md:min-w-[60%] flex flex-col justify-center items-center">
        <div className="w-full flex flex-col shadow-xl drop-shadow-2xl shadow-blue-300 items-center justify-center bg-white  border-2 rounded-2xl scale-75">
          <BarGraph />
          <h1 className="font-bold text-xl pb-2">No of Cases each Months</h1>
        </div>
        <div className="flex gap-5">
          <Link to="/reports">
            <button className="bg-blue-400 px-5 py-2 rounded-xl text-white">
              View Reports
            </button>
          </Link>
          <Link to="map">
            <button className="bg-blue-400 px-5 py-2 rounded-xl text-white">
              View Map
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
