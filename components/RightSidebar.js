import RealtimeStatus from "@/components/RealtimeStatus";
import Request from "@/components/Request";
import AllotmentStatus from "@/components/AllotmentStatus";

const RightSidebar = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <AllotmentStatus />
      <RealtimeStatus />
      <Request />
    </div>
  );
};

export default RightSidebar;