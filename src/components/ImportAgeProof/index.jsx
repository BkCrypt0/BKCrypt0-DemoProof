import { useRef } from "react";
import { addProof } from "src/redux/proofSlice";
import { useDispatch, useSelector } from "react-redux";
import { verifyProof } from "src/contract";
import { useState } from "react";
import "./index.css";

export default function ImportAgeProof({ setOpen }) {
  const inputRef = useRef(null);
  const dp = useDispatch();
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState("");
  const [err, setErr] = useState("");
  const proof = useSelector((state) => state.proofSlice.proof);
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const proofJSON = await fileObj.text();
    const importProof = JSON.parse(proofJSON);
    dp(addProof(importProof));
  };
  return (
    <>
      <input
        style={{ display: "none" }}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
      {proof === undefined && (
        <button
          style={{ padding: "15px" }}
          onClick={async () => {
            handleClick();
          }}
        >
          Tải lên bằng chứng của bạn
        </button>
      )}
      {proof !== undefined && (
        <div style={{ marginBottom: "10px" }}>
          Minh chứng của bạn đã sẵn sàng
        </div>
      )}

      <div style={{ color: "red", fontWeight: "bold", marginBottom: "10px" }}>
        {err}
      </div>
      <div style={{ color: "green", fontWeight: "bold", marginBottom: "10px" }}>
        {res}
      </div>

      {proof !== undefined && res === "" && (
        <button
          style={{ padding: "15px" }}
          onClick={async () => {
            setErr("");
            setRes("");
            setLoading(true);
            var temp = JSON.parse(proof?.input);
            temp[4] = 18;

            const res = await verifyProof({
              optionName: "VERIFIER_AGE",
              pi_a: [
                JSON.parse(proof?.proof).pi_a[0],
                JSON.parse(proof?.proof).pi_a[1],
              ],
              pi_b: [
                [
                  JSON.parse(proof?.proof).pi_b[0][1],
                  JSON.parse(proof?.proof).pi_b[0][0],
                ],
                [
                  JSON.parse(proof?.proof).pi_b[1][1],
                  JSON.parse(proof?.proof).pi_b[1][0],
                ],
              ],
              pi_c: [
                JSON.parse(proof.proof).pi_c[0],
                JSON.parse(proof?.proof).pi_c[1],
              ],
              input: temp,
            });
            if (res === -1) {
              setErr("Bằng chứng không hợp lệ!");
              console.log(res);
              setLoading(false);
            } else {
              console.log(res);
              setRes("Xác minh thành công");
              setLoading(false);
            }
          }}
        >
          {loading === false && <text>Xác minh</text>}
          {loading === true && <div className="loading">Đang xác minh</div>}
        </button>
      )}
      {res !== "" && (
        <button style={{ padding: "15px" }} onClick={() => setOpen(false)}>
          Truy cập trang web
        </button>
      )}
    </>
  );
}
