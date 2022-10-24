import useMediaQuery from "./useMediaQuery";

export default function useBreakpoints() {
  const breakpoints = {
    isPhone: useMediaQuery("(max-width: 375px)"),
    isTablet: useMediaQuery("(min-width: 376px) and (max-width: 1024px)"),
    isDesktop: useMediaQuery("(min-width: 1025px) and (max-width: 1440px)"),
    isWidescreen: useMediaQuery("(min-width: 1441px)"),
    active: "xs"
  };

  if (breakpoints.isPhone) breakpoints.active = "xs";
  if (breakpoints.isTablet) breakpoints.active = "sm";
  if (breakpoints.isDesktop) breakpoints.active = "md";
  if (breakpoints.isWidescreen) breakpoints.active = "lg";
  
  return breakpoints;
}