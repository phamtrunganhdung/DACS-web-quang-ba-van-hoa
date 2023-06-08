import { useEffect, useState } from "react";
import { history } from "umi";

export default function path() {
  const [path, setPath] = useState<string>("/");

  useEffect(() => {
    setPath(history.location.pathname);
  }, []);
  const updatePath = (path: string) => {
    history.push(path);
    setPath(path);
  };

  return {
    path,
    updatePath,
  };
}
