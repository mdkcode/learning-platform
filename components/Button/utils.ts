export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export const defaultClassName = {
  [ButtonType.PRIMARY]:
    "px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400",
  [ButtonType.SECONDARY]:
    "px-6 py-2 border-2 border-solid border-blue-500 bg-white text-blue-500 font-semibold rounded-lg hover:text-blue-700 hover:border-blue-700",
};
