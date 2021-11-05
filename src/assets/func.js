import { forEach, get } from "lodash";

const createRows = (data, keys) => {
  return data.map((el) => {
    let newData = [];

    forEach(keys, (k) => {
      newData.push(get(el, k));
    });

    return newData;
  });
};

const renderRows = (data, i) => {
  const row = data[i];
  return row;
};

export { createRows, renderRows };
