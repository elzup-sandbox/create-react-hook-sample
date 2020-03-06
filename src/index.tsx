import * as React from "react";

export const useMyHook = () => {
  const [counter, setState] = React.useState<Date>(new Date());

  React.useEffect(() => {
    let interval = setInterval(() => {
      setState(new Date());
    }, 1000);
    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return counter;
};
