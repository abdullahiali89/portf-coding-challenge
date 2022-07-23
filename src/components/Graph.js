import { ResponsiveBar } from "@nivo/bar";
import { filterByDate } from "../util/filterByDate";

function Graph({ data, endDate, startDate }) {
  
  let dateFilteredData = filterByDate(startDate, endDate, data);
  
  let reducedData = dateFilteredData.reduce((accumulator, curr) => {
    let acc = accumulator;
    let date = curr.first_brewed;

    let foundIndex = acc.findIndex((data) => {
      return data.dateOfFirstBrew === date;
    });
    if (foundIndex !== -1) {
      acc[foundIndex].numberOfBeers++;

      return [...acc];
    }
    let obj = {
      dateOfFirstBrew: date,
      numberOfBeers: 1,
    };

    return [...acc, obj];
  }, []);
  

 
  return (
    <ResponsiveBar
      data={reducedData}
      keys={["numberOfBeers"]}
      indexBy="dateOfFirstBrew"
      margin={{ top: 50, right: 130, bottom: 75, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 45,
        legend: "dateOfFirstBrew",
        legendPosition: "middle",
        legendOffset: 50,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "numberOfBeers",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default Graph;
