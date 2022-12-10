const Banner = ({ banner }) => {
  const { id, image } = banner;
  return <img className="w-full object-cover mix-blend-overlay rounded-md" src={image} />;
};

export default Banner;
