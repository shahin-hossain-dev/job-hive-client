import coverImg from "../../assets/img4.jpg";
import { useQuery } from "@tanstack/react-query";
import useCommonAxios from "../../hooks/useCommonAxios";
import Blog from "./Blog";

const background = {
  backgroundImage: `linear-gradient(to right, #00000066, #00000066),url(${coverImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Blogs = () => {
  const commonAxios = useCommonAxios();
  const { data: blogs, isLoading } = useQuery({
    queryFn: async () => {
      const res = await commonAxios.get("/blogs");
      return res.data;
    },
    queryKey: ["blogs"],
  });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div
        className="w-full h-[200px] md:h-[300px] relative "
        style={background}
      >
        <div className="w-full text-center text-2xl md:text-3xl text-white absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
          <p className="mb-5 font-medium"> Blogs</p>

          <p className=" font-semibold">{}</p>
        </div>
      </div>
      <div className="w-[90%] md:w-[90%] lg:w-[85%] mx-auto mt-12 mb-12 space-y-10">
        {blogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
