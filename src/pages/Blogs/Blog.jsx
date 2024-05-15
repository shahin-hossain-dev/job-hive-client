const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div className="card  bg-base-100 border border-[#56F09F] shadow-lg rounded-md">
      <div className="card-body">
        <h2 className="card-title mb-3">{blog.blogTitle}</h2>
        <p>{blog.blogDescription}</p>

        <p className="text-[#33CC77] font-bold">Author: </p>
        <div className="flex items-center gap-3">
          <img src={blog.img} className="rounded-full" alt="" />
          <p>{blog.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
