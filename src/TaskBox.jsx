import plus from './plus-icon.svg';
import TaskItem from './TaskItem';

function TaskBox({ date, month, tasks }) {
  return (
    <div className="flex w-[306px] flex-col items-start px-[12px] text-left rounded-md border-[1px] pt-2">
      <div className="py-2">
        <p className="text-[#5D6372] font-normal text-[12px]">{date}</p>
        <p className="text-[#5D6372] text-[14px]">{month}</p>
      </div>
      <div className="py-2 space-y-2">
        {tasks.length === 0 ? (
          <div className="text-[#5D6372] text-[14px] font-normal">
            No Tasks Available
          </div>
        ) : (
          tasks.map((task) => (
            <TaskItem title={task.title} percent={task.percent} />
          ))
        )}
      </div>
      <button className="flex items-center w-full py-4 pt-2">
        <img src={plus} alt="" className="w-3 h-3 " />
        <p className="font-normal px-2 text-[14px]">Create new task</p>
      </button>
    </div>
  );
}

export default TaskBox;
