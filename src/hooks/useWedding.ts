import { getWedding } from "@/api/wedding";
import { Wedding } from "@/models/wedding";
import { useEffect, useState } from "react";

function useWedding() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    getWedding()
      .then((response) => {
        if (response.ok === false) {
          throw new Error("청첩장 정보를 불러오지 못했습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((error) => {
        console.log("에러발생", error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { wedding, loading, error };
}

export default useWedding;
