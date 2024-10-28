
import { useInView } from "react-intersection-observer";

const useInViewImage = (threshold = 0.9, triggerOnce = true) => {
  const { ref, inView } = useInView({ threshold, triggerOnce });

  return { ref, inView };
};

export default useInViewImage;