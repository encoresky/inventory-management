import RealtimeStatus from "@/components/RealtimeStatus";
import Request from "@/components/Request";
import AllotmentStatus from "@/components/AllotmentStatus";

const RightSidebar = () => {
  return (
    <div className="flex flex-col gap-y-[1rem] h-full">
      <AllotmentStatus />
      <RealtimeStatus />
      <Request />
    </div>
  );
};

export default RightSidebar;
