"use client";

import { Search, X } from "lucide-react";
import { ChangeEvent, FC, useRef } from "react";
import { cn } from "@/src/shared/lib";
import { Button, Input } from "@/src/shared/shadcn";
import { useAppDispatch, useAppSelector } from "@/src/shared/lib/hooks";
import { searchAction } from "../model/slice/searchSlice";

interface Props {
  className?: string;
}

export const SlotSearch: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state.search);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handlerSetSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchAction.setSearchValue(e.target.value));
    console.log(e.target.value);
  };

  const handlerClearSearchInput = () => {
    dispatch(searchAction.clearSearchValue());
  };

  const handlerSetFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className={cn("relative w-[400px]", className)}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2"
        onClick={handlerSetFocus}
        title="Поиск"
      >
        <Search />
      </Button>
      <Input
        placeholder="Поиск среди лотов ..."
        className="font-semibold px-11"
        value={searchValue || ""}
        onChange={handlerSetSearchValue}
        ref={searchInputRef}
      />
      {searchValue && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handlerClearSearchInput}
          className="absolute top-1/2 right-0 -translate-y-1/2"
          title="Сброс"
        >
          <X />
        </Button>
      )}
    </div>
  );
};
