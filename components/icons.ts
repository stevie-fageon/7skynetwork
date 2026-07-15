/**
 * Centralized icon exports so components import from one place.
 * All icons come from react-icons (Heroicons v2 outline set).
 */
import {
  HiOutlineArrowTrendingUp,
  HiOutlineMegaphone,
  HiOutlineHandRaised,
} from "react-icons/hi2";

export type { IconType as HiOutlineIconType } from "react-icons";

export const HiArrowTrendingUp = HiOutlineArrowTrendingUp;
export const HiMegaphone = HiOutlineMegaphone;
export const HiHandshake = HiOutlineHandRaised;
