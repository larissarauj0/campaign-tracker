import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Switch } from "@/components/ui/switch";

export default function DarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="flex items-center justify-end w-full sm:w-auto">
      <Switch
        onClick={() => setDark((prev) => !prev)}
        className="cursor-pointer m-2 sm:m-4"
      >
        <span className="text-base sm:text-lg">
          {dark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </span>
      </Switch>
    </div>
  );
}
