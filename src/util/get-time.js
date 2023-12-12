export const getTime = () => {
  var dataObj = new Date();

  var timeOptions = { hour: "2-digit", minute: "2-digit" };
  var dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };

  var time = dataObj.toLocaleTimeString("en-GB", timeOptions);
  var date = dataObj
    .toLocaleDateString("en-GB", dateOptions)
    .replace(/\//g, "//");

  return { time, date };
};
