import { getPackage } from "../../api/queries/getPackage";
import type { Params } from "react-router-dom";

interface LoaderArgs {
  params: Params;
}

export async function detailsLoader({ params }: LoaderArgs) {
  const { name } = params;

  if (!name) {
    throw new Error("Name must be provided");
  }
  const details = await getPackage(name);

  return {
    details,
  };
}
