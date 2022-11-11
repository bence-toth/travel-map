import Map from "./Map";

export interface Travel {
  countryCode: string;
}

const App = () => (
  <Map
    travels={[
      {
        countryCode: "ZM",
      },
      {
        countryCode: "TW",
      },
      {
        countryCode: "SK",
      },
    ]}
  />
);

export default App;
