import { pick } from "lodash";

const createRows = (rows, keys) => {
  return rows.map((row) => {
    const data = pick(row, keys);
    const a = Object.values(data);
    const b = a.map((item) =>
      typeof item === "object" ? String(Object.values(item)) : item
    );
    const c = [{ id: b[0] }, { data: b.slice(1).map((item) => item) }];
    return c;
  });
};

export { createRows };
