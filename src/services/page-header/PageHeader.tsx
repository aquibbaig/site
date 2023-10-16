import { Logo } from "../Logo";
import { ThemeSwitch } from "../theme/ThemeSwitch";

export const PageHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center">
      <Logo />
      <ThemeSwitch />
    </div>
  );
};
