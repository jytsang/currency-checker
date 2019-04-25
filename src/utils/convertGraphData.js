// convert historical data to correct format for charts
export default function convertGraphData(data) {
  let arr = [];
  for (const key in data) {
    arr.push({x:key,y:data[key]});
  }

  return arr;
}