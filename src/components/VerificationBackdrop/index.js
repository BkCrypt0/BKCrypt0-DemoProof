import ImportAgeProof from "../ImportAgeProof";

export default function VerificationBackdrop({ setOpen }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: 10000,
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>CHÚNG TÔI CHỈ BÁN RƯỢU CHO NGƯỜI ĐỦ 18 TUỔI</h1>
        <h2>Hãy cho chúng tôi biết bạn đủ 18 tuổi</h2>
        <ImportAgeProof setOpen={setOpen} />
      </div>
    </div>
  );
}
