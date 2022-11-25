export interface Travel {
  countryCode: string;
  date: number;
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
    date: new Date("2022-04-29").getTime(),
    countryCode: "PL",
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
];

export default travels;
