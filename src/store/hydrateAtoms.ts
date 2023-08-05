import { useHydrateAtoms } from "jotai/react/utils";

const HydrateAtoms = ({ initialValues, children }) => {
  useHydrateAtoms(initialValues);

  return children;
};

export default HydrateAtoms;
