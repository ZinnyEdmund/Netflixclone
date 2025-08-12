import DashboardLayout from "../Dashboard/Dashlayout/Layout";
import Topbar from "../Dashboard/Topbar/Topbar";
import Banner from "../Dashboard/Herobanner/Banner";
import Partiesrow from "../Dashboard/Partiesrow/Partiesrow";
import Watching from "../Dashboard/Continuewatching/Watching";

function Mydashboard() {
  return (
   <div className="dashboardBg ">
     <DashboardLayout>
      <Topbar />
      <Banner />
      <Partiesrow />
      <Watching />
    </DashboardLayout>
   </div>
  );
}

export default Mydashboard;
