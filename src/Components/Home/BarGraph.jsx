import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
} from "recharts";

const BarGraph = () => {
  const [counts, setCounts] = useState([
    {
      Month: "Jan",
      cases: 0,
    },
    {
      Month: "Feb",
      cases: 0,
    },
    {
      Month: "Mar",
      cases: 0,
    },
    {
      Month: "Apr",
      cases: 0,
    },
    {
      Month: "May",
      cases: 0,
    },
    {
      Month: "Jun",
      cases: 0,
    },
    {
      Month: "Jul",
      cases: 0,
    },
    {
      Month: "Aug",
      cases: 0,
    },
    {
      Month: "Sep",
      cases: 0,
    },
    {
      Month: "Oct",
      cases: 0,
    },
    {
      Month: "Nov",
      cases: 0,
    },
    {
      Month: "Dec",
      cases: 0,
    },
  ]);
  const [allData, setAllData] = useState([]);
  const [render, setRender] = useState(true);
  const [barChartVisible, setBarChartVisible] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://rabitrack-backend-production.up.railway.app/getAllCaseReport"
      )
      .then((res) => {
        setAllData(res.data || []);
      });
  }, []);

  useEffect(() => {
    console.log(allData);
    allData?.map((data) => {
      let month = parseInt(data?.attack_date.substring(3, 5));
      let current_count = counts[month - 1].cases;
      counts[month - 1].cases = current_count + 1;
      setCounts(counts);
    });
    setTimeout(() => {
      setBarChartVisible(true);
      setRender(false);
    }, 1000);
  }, [allData]);

  return render ? (
    <div className="md:min-w-full h-[100px] flex justify-center items-center">
      Loading
    </div>
  ) : (
    <>
      <BarChart
        width={1000}
        height={400}
        data={counts}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
        className="px-10 max-md:hidden"
      >
        {barChartVisible ? (
          <Bar
            dataKey="cases"
            fill="#4682B4"
            barSize={40}
            animationDuration={1000}
          />
        ) : null}
        <XAxis dataKey="Month" />
        <YAxis dataKey="cases" />
        <Tooltip cursor={false} />
      </BarChart>
      <BarChart
        width={450}
        height={400}
        data={counts}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
        className="px-10 md:hidden"
      >
        {barChartVisible ? (
          <Bar
            dataKey="cases"
            fill="#4682B4"
            barSize={40}
            animationDuration={1000}
          />
        ) : null}
        <XAxis dataKey="Month" />
        <YAxis dataKey="cases" />
        <Tooltip cursor={false} />
      </BarChart>
    </>
  );
};

export default BarGraph;
