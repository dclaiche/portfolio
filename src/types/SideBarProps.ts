import { ReactNode } from "react";

export interface Setter {
    setClickedItem: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface SideBarProps extends Setter {
    clickedItem: boolean;
};

export type MenuItemProps = {
    name: string; // replace with the actual type
    route: string; // replace with the actual type
    icon: ReactNode; // replace with the actual type
  };