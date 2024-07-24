import logo from './happy5-logo.png';
import Taskbox from './TaskBox';

function Dashboard() {
  return (
    <div className="flex">
      <div className="flex flex-col items-center bg-[#1a0931] h-screen w-[68px] py-[20px]">
        <img className="h-[28px] w-[28px]" src={logo} alt="" />
      </div>
      <div className="text-left px-[50px] pt-[20px] space-y-6">
        <h3 className="text-xl">Product Roadmap</h3>
        <div className="flex items-start gap-4">
          <Taskbox />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
