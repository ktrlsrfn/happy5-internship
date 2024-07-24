import bag from './bag-icon.svg';
import dot from './dot-icon.svg';

function TaskItem({ title, percent }) {
  return (
    <div className="flex flex-col w-[282px] items-start px-[18px] py-1 text-[14px] rounded-md border-[1px]">
      <p className="py-3">
        {title}
      </p>
      <div className="flex justify-between w-full pt-2">
        <div className="flex items-center gap-2 text-gray-500">
          <img src={bag} alt="" className="w-4 h-4" />
          <p className="text-[12px]">{percent}%</p>
        </div>
        <img src={dot} alt="" className="w-9 h-9" />
      </div>
    </div>
  );
}

export default TaskItem;
