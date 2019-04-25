// Get the date in the correct format for api yyyy-mm-dd
export default function getGraphDate(days) {
  var date = new Date();
  var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
  var day = last.getDate();
  var month = last.getMonth()+1;
  var year = last.getFullYear();

  return year+'-'+month+'-'+day;
}