import { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import "./App.css";
import Graph from "./components/Graph.js";
import DateFilter from "./components/DateFilter";
import AbvFilter from "./components/AbvFilter";

function App() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  //filter by date
  const [startDate, setStartDate] = useState("2013-01");
  const [endDate, setEndDate] = useState("2022-12");
  //filter by ABV
  const [abv, setAbv] = useState(1);

  // Fetching the data from the API
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.punkapi.com/v2/beers?page=${page}&abv_gt=${abv}&per_page=80`
      );
      const data = await res.json();

      if (page !== 1) {
        setBeers([...beers, ...data]);
      }
      setBeers([...data]);
    };
    fetchData();
  }, [page, abv]);

  useEffect(() => {
    if (beers.length === page * 80) {
      setPage(page + 1);
    }
  }, [beers]);

  //filter by date event handler
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  //filter by Abv event handler

  const handleAbvChange = (e) => {
    let ABV = Number(e.target.value);
    setAbv(ABV);
    setPage(1);
  };

  return (
    <div className="App">
      <section className="Filters">
        <DateFilter
          endDate={endDate}
          startDate={startDate}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
        />
        <AbvFilter handleAbvChange={handleAbvChange} abv={abv} />
      </section>
      <Graph data={beers} endDate={endDate} startDate={startDate} />
    </div>
  );
}

export default App;
