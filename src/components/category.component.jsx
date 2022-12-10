const Category = ({ category }) => {
  const { id, title, image } = category;

  return (
    <div className="flex flex-col items-center justify-center hover:bg-primary-light group">
      <button className="flex flex-col items-center justify-center  w-[108px] h-[108px]">
        <img
          className="border border-gray-200 rounded-lg"
          src={image}
          width="48px"
          height="48px"
          alt={title}
        />
        <div className="whitespace-nowrap mt-3 font-semibold text-sm text-black group-hover:text-primary-color ">{title}</div>
      </button>
    </div>
  );
};

export default Category;
