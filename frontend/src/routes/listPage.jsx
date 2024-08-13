import { listData } from "../lib/dummydata";
import Filter from "../components/filter/Filter";
import Card from "../components/card/Card";
import Map from "../components/map/Map";

function ListPage() {
  const data = listData;

  return (
    <div className="listPage flex h-screen">
      <div className="listContainer flex-3 h-full">
        <div className="wrapper flex flex-col gap-12 h-full pr-12 pb-12 overflow-y-auto">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer flex-2 h-full bg-[#fcf5f3] hidden md:block">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
