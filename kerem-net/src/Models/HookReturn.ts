import Status from "./Status";

interface HookReturn<T> {
  data: T;
  status: Status;
  error: string | undefined;
}

export default HookReturn;
