export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  NAVIGATION = "navigation",
}

export const defaultClassName = {
  [ButtonType.PRIMARY]:
    "px-7 py-3 bg-[#00004B] text-white font-semibold rounded-lg shadow-md hover:bg-[#3A59FF] focus:outline-none focus:ring-2 focus:ring-[#3A59FF]",
  [ButtonType.SECONDARY]:
    "px-7 py-3 border-2 border-solid border-[#00004B] bg-white text-[#00004B] font-semibold rounded-lg hover:text-[#3A59FF] hover:border-[#3A59FF]",
  [ButtonType.NAVIGATION]:
    "px-7 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-pink-600",
};
