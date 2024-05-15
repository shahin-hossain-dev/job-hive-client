import coverImg from "../../assets/img4.jpg";
const background = {
  backgroundImage: `linear-gradient(to right, #00000066, #00000066),url(${coverImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Blogs = () => {
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
      <h2>Blog Page</h2>
    </div>
  );
};

export default Blogs;
