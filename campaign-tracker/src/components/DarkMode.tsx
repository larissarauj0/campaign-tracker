import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Switch } from "@/components/ui/switch";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="flex pr-4 items-center justify-end shrink-0">
      <Switch
        onClick={() => setDark((prev) => !prev)}
        className=" cursor-pointer mx-2 my-2 sm:mx-4 sm:my-4 shrink-0"
      >
        <span className="text-base sm:text-lg flex items-center justify-center">
          {dark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </span>
      </Switch>
    </div>
  );
}
