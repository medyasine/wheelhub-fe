import WeeklySales from "./WeeklySales";
import TotalOrder from "./TotalOrder";
import MarketShare from "./MarketShare";
import Weather from "./Weather";

function Starts() {
  return (
    <div className="row g-3 mb-3">
      <WeeklySales />
      <TotalOrder />
      <MarketShare />
      <Weather />
    </div>
  );
}

export default Starts;
