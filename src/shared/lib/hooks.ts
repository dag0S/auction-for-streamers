import {
  AppDispatch,
  AppStore,
  RootState,
} from "@/src/app/providers/StoreProvider/config/store";
import { useDispatch, useSelector, useStore } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
