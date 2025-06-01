"use client"

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/store/use-sidebar"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

export const Toggle = () => {

  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="hidden pt-4 mb-4 lg:flex justify-center items-center w-full">
          <Button onClick={onExpand} className="h-auto p-w ml-auto" variant="ghost">
            <ArrowRightFromLine className="h-4 w-4" />
          </Button>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">
          <p className="font-semibold text-primary">
            For you
          </p>
          <Button onClick={onCollapse} className="h-auto p-w ml-auto" variant="ghost">
            <ArrowLeftFromLine className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  )
}