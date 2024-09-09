import React, { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTheme } from "../context/ThemeContext";
import { monacoThemes } from "../constants/constants";

const ThemeSwitcher = () => {
  const { theme, handleThemeChange } = useTheme();

  return (
    <Listbox value={theme} onChange={handleThemeChange}>
      <div className="relative w-48 ml-1  flex ">
        <ListboxButton className=" text-white cursor-default relative w-full rounded-md  py-1.5 pl-3 pr-10 shadow-sm  ring-inset  focus:outline-none  sm:text-sm sm:leading-6">
          <span className="flex items-center">
            <span className="ml-3 block truncate font-bold text-md cursor-pointer hover:underline">
              Change Theme
            </span>
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-8 max-h-56 w-64 overflow-auto rounded-md bg-[#2d2f34] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {monacoThemes.map((themeOption) => (
            <ListboxOption
              key={themeOption.name}
              value={themeOption}
              className="group relative cursor-pointer select-none py-2 pl-3 pr-9 text-white data-[focus]:bg-[#0556f3] data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {themeOption.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#0556f3] group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default ThemeSwitcher;
