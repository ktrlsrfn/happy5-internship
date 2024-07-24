import logo from './happy5-logo.png';

function Dashboard() {
  return (
    <div className="flex">
      <div className="flex flex-col items-center bg-[#1a0931] h-screen w-[68px] py-[20px]">
        <img className="h-[28px] w-[28px]" src={logo} alt="" />
      </div>
      
    </div>
  );
}

export default Dashboard;
