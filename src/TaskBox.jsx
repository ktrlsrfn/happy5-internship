import plus from './plus-icon.svg';
import TaskItem from './TaskItem';

function TaskBox() {
  return (
    <div className="flex w-[306px] flex-col items-start px-[12px] text-left rounded-md border-[1px]">
      <div className="py-2">
        <p className="text-[#5D6372] font-normal text-[12px]">Q1 2019</p>
        <p className="text-[#5D6372] text-[14px]">January - March</p>
      </div>
      <div className="py-2 space-y-2">
        <TaskItem
          title="Re-designed the zero-g doggie bags. No more spills!"
          percent="64"
        />
        <TaskItem title="Travel & Relocation Support" percent="12" />
      </div>
      <div className="flex items-center w-full py-4 pt-2">
        <img src={plus} alt="" className="w-3 h-3 " />
        <p className="font-normal px-2 text-[14px]">Create new task</p>
      </div>
    </div>
  );
}

export default TaskBox;