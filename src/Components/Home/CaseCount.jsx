import React, { useEffect, useState } from "react";
import axios from "axios";

const CaseCount = () => {
  const [counts, setCounts] = useState([]);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [countTotal, setCountTotal] = useState(0);
  useEffect(() => {
    axios
      .get("https://rabitrack-backend-production.up.railway.app/getCaseCount")
      .then((res) => {
        setCounts(res.data || []);
        console.log(counts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setCaseCounts();
  }, [counts]);

  const setCaseCounts = () => {
    let totalCount = 0;
    if (counts) {
      counts.map((pyUnits) => {
        if (pyUnits?.district == "Puducherry") {
          setCount1(pyUnits?.count);
        } else if (pyUnits?.district == "Karaikal") {
          setCount2(pyUnits?.count);
        } else if (pyUnits?.district == "Mahe") {
          setCount4(pyUnits?.count);
        } else if (pyUnits?.district == "Yanam") {
          setCount3(pyUnits?.count);
        }
        totalCount += pyUnits?.count;
      });
    }
    setCountTotal(totalCount);
  };

  return (
    <div className="bg-white shadow-xl drop-shadow-2xl shadow-blue-300 p-5 rounded-2xl w-[50%] flex flex-col items-center gap-5">
      <div>
        <div className="min-w-[150px] max-h-[150px] max-w-[150px] min-h-[150px] border-4 border-blue-300  flex justify-center items-center rounded-full">
          <h1 className="font-bold text-4xl">{countTotal}</h1>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between">
          <h1>Puducherry</h1>
          <h1>{count1}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Karaikal</h1>
          <h1>{count2}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Yaanam</h1>
          <h1>{count3}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Mahe</h1>
          <h1>{count4}</h1>
        </div>
      </div>
    </div>
  );
};

export default CaseCount;
