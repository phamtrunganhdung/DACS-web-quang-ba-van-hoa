import { useState } from "react";
import { history } from "umi";

export default function path() {
  const [path, setPath] = useState<string>("/");

  const updatePath = (path: string) => {
    history.push(path);
    setPath(path);
  };

  return {
    path,
    setPath,
    updatePath,
  };
}
