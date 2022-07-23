export function filterByDate(startDate, endDate, data) {
  let sMonth = Number(startDate.split("-")[1]);
  let sYear = Number(startDate.split("-")[0]);
  let eMonth = Number(endDate.split("-")[1]);
  let eYear = Number(endDate.split("-")[0]);

  let newData = data.filter((data) => {
    let brewMonth = Number(data.first_brewed.split("/")[0]);
    let brewYear = Number(data.first_brewed.split("/")[1]);

    if (brewYear === undefined || isNaN(brewYear)) {
      brewYear = brewMonth;
      brewMonth = 1;
    }

    return (
      (brewYear > sYear && brewYear < eYear) ||
      (brewYear === sYear &&
        brewMonth >= sMonth &&
        brewYear === eYear &&
        brewMonth <= eMonth)
    );
  });

  return newData;
}
