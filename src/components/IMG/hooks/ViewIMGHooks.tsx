import { useInView } from "react-intersection-observer";

const useInViewImage = (threshold = 0.2, triggerOnce = true) => {
  const { ref, inView } = useInView({ threshold, triggerOnce });

  return { ref, inView };
};

export default useInViewImage;
