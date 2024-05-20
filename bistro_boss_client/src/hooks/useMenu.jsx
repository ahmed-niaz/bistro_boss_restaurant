import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/menu`)
      .then((res) => res.json())
      .then((data) => {
        // const trendyMenu = data.filter((item) => item.category === "popular");
        // setMenu(trendyMenu);
        setMenu(data);
        setLoading(false);
      });
  }, []);

  return [menu, loading];
};

export default useMenu;
