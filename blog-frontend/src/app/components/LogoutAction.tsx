"use client";

import { userLogout } from "@lib/fetch-data";
import { Icon } from "@iconify/react";
import { Button } from "flowbite-react";

export default function LogoutAction() {
  return (
    <Button
      className="flex items-center gap-2 px-3 py-1.5 dark:bg-red-700 dark:text-white bg-red-700 text-white text-sm font-medium rounded dark:hover:bg-red-500 dark:hover:text-white hover:bg-red-500 hover:text-white"
      onClick={() => userLogout()}
    >
      <Icon icon="lucide:log-out" className="w-4 h-4 flex-shrink-0" />
      <span className="ml-2 text-ellipsis overflow-hidden whitespace-nowrap">
        Log Out
      </span>
    </Button>
  );
}
