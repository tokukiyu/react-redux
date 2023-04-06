import { BUY_CAKE } from "./type";

export function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux action",
  };
}
