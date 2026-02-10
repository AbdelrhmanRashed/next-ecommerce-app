import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-150">
      <Spinner className="h-12 w-12" />
    </div>
  );
};

export default Loading;
