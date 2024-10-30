// ex 4
function date_diff_indays(date1, date2) {
  // Date 1
  let day1 = date1.slice(0, 2);
  let month1 = date1.slice(3, 5);
  let year1 = date1.slice(6);
  // Date 2
  let day2 = date2.slice(0, 2);
  let month2 = date2.slice(3, 5);
  let year2 = date2.slice(6);
  //difference
  return (year2 - year1) * 356 + (month2 - month1) * 30 + (day2 - day1);
}