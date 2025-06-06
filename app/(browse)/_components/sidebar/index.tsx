import { getRecommended } from "@/lib/recommended-service"
import { Recommended, RecommendedSkeleton } from "./recommended"
import { Toggle, ToggleSkeleton } from "./toggle"
import { Wrapper } from "./wrapper"

export const Sidebar = async () => {
  const recomended = await getRecommended();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommended data={recomended} />
      </div>
    </Wrapper>
  )
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-[#2D2E35] border-r border-[#2D2E35] z-51">
        <ToggleSkeleton />
        <RecommendedSkeleton />
    </aside>
  )
}