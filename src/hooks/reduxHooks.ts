import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispactch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispactch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
