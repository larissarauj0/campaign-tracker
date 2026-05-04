import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Switch } from "@/components/ui/switch";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <Switch
      onClick={() => setDark((prev) => !prev)}
      className="cursor-pointer ml-4"
    >
      {dark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </Switch>
  );
}
