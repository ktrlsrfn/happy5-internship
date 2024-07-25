import { useState } from 'react';
import logo from './happy5-logo.png';
import Taskbox from './TaskBox';

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      date: 'Q1 2019',
      month: 'January - March',
      tasks: [
        {
          title: 'Re-designed the zero-g doggie bags. No more spills!',
          percent: 64,
        },
        {
          title: 'Travel & Relocation Support',
          percent: 12,
        },
      ],
    },
    {
      date: 'Q2 2019',
      month: 'April - June',
      tasks: [],
    },
    {
      date: 'Q3 2019',
      month: 'July - September',
      tasks: [
        {
          title: 'Bundle interplanetary analytics for improved transmission',
          percent: 90,
        },
      ],
    },
    {
      date: 'Q4 2019',
      month: 'October - December',
      tasks: [
        {
          title: 'Data Migration: Performance & Culture End Game',
          percent: 63,
        },
      ],
    },
  ]);

  return (
    <div className="flex">
      <div className="flex flex-col items-center bg-[#1a0931] h-screen w-[68px] py-[20px]">
        <img className="h-[28px] w-[28px]" src={logo} alt="" />
      </div>
      <div className="text-left px-[50px] pt-[20px] space-y-6">
        <h3 className="text-xl">Product Roadmap</h3>
        <div className="flex items-start gap-4">
          {tasks.map((item) => (
            <Taskbox date={item.date} month={item.month} tasks={item.tasks} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
