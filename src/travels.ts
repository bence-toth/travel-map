export interface Travel {
  countryCode: string;
  date: number;
  withChild?: boolean;
}

const travels = [
  {
    date: new Date("2021-02-03").getTime(),
    countryCode: "DK",
  },
  {
    date: new Date("2021-05-13").getTime(),
    countryCode: "SE",
  },
  {
    date: new Date("2021-07-02").getTime(),
    countryCode: "HU",
  },
  {
    date: new Date("2021-10-25").getTime(),
    countryCode: "MK",
  },
  {
    date: new Date("2021-10-27").getTime(),
    countryCode: "ME",
  },
  {
    date: new Date("2021-10-31").getTime(),
    countryCode: "XK",
  },
  {
    date: new Date("2022-01-08").getTime(),
    countryCode: "EG",
  },
  {
    date: new Date("2022-06-08").getTime(),
    countryCode: "DK",
    withChild: true,
  },
  {
    date: new Date("2022-08-04").getTime(),
    countryCode: "BA",
  },
  {
    date: new Date("2022-08-12").getTime(),
    countryCode: "HR",
  },
  {
    date: new Date("2022-10-13").getTime(),
    countryCode: "TR",
  },
  {
    date: new Date("2023-01-14").getTime(),
    countryCode: "SE",
    withChild: true,
  },
  {
    date: new Date("2023-02-12").getTime(),
    countryCode: "AL",
  },
  {
    date: new Date("2023-02-14").getTime(),
    countryCode: "GR",
  },
  {
    date: new Date("2023-04-27").getTime(),
    countryCode: "GB",
  },
  {
    date: new Date("2023-06-08").getTime(),
    countryCode: "DE",
  },
  {
    date: new Date("2023-07-19").getTime(),
    countryCode: "HU",
    withChild: true,
  },
  {
    date: new Date("2023-10-15").getTime(),
    countryCode: "IT",
    withChild: true,
  },
  {
    date: new Date("2023-11-09").getTime(),
    countryCode: "BG",
  },
];

export default travels;
