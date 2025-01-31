import { toast } from "react-toastify";
import { MdCheckCircle } from "react-icons/md";

export const onSuccess = (success) => {
  const successComponent = (
    <div className="flex items-center gap-[10px] text-lime-700">
      <MdCheckCircle className="text-[25px] " />
      <div className="flex flex-col">
       <strong className="text-[14px] ">{success.message}</strong>
       <p className="text-small text-gray-400">{success.success}</p>
      </div>
       
    </div>
  );

  toast(successComponent);
};
