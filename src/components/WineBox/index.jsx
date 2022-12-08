export default function WineBox({ img, name, price }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "25%",
        marginBottom: "50px",
      }}
    >
      <img src={img} alt="wine" width="300px" height="300px" />
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
}
