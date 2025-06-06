"use client"

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSidebar } from "@/store/use-sidebar"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";


export const Toggle = () => {

  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="hidden pt-4 mb-4 lg:flex justify-center items-center w-full">
          <Hint label={label} side="right" asChild>
            <Button onClick={onExpand} className="h-auto p-w ml-auto" variant="ghost">
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 flex items-center w-full">
          <p className="font-semibold text-primary">
            For you
          </p>
          <Hint label={label} side="right" asChild>
            <Button onClick={onCollapse} className="h-auto p-w ml-auto" variant="ghost">
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </Hint>
        </div>
      )}
    </>
  )
};

export const ToggleSkeleton = () => {
  return (
    <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-beetween w-full">
        <Skeleton className="h-6 w-[100px]" />
        <Skeleton className="h-6 w-6" />
    </div>
  )
}