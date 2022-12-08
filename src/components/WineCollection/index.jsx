import WineBox from "../WineBox";
import { WineImgSrc } from "../..//constants";

export default function WineCollection() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      {WineImgSrc.map((e, index) => (
        <WineBox img={e.img} price={e.price} name={e.name} key={index} />
      ))}
    </div>
  );
}
