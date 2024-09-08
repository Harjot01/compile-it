import React from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { languageOptions } from "../constants/constants";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const LanguageSelector = () => {
  const { language, onSelectLanguage } = useLanguage();
  const { themeColors } = useTheme();

  return (
    <Listbox value={language} onChange={onSelectLanguage}>
      <div className="relative w-[15rem] ml-1 h-full flex">
        <ListboxButton
          className="text-white relative w-full cursor-pointer rounded-md pl-3 shadow-sm  ring-inset  focus:outline-none  sm:text-sm sm:leading-6"
          style={{ backgroundColor: themeColors.bgColor }}
        >
          <span className="flex items-center">
            <span
              className="ml-3 block truncate text-md"
              style={{ color: themeColors.textColor }}
            >
              {language.name} ({language.version})
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-8 max-h-56 w-full overflow-auto rounded-md bg-[#2d2f34] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {languageOptions.map((langOption) => (
            <ListboxOption
              value={langOption}
              className="group relative cursor-pointer select-none py-2 pl-3 pr-9 text-white data-[focus]:bg-[#0556f3] data-[focus]:text-white"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {langOption.name} ({langOption.version})
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

export default LanguageSelector;
