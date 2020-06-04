export default function retrieveAxiosData(data) {
  if (data === undefined || data === null) {
    return data;
  }
  let innerData = {};
  Object.keys(data)
    .forEach((key) => {
      innerData = data[key];
    });
  return innerData;
}
