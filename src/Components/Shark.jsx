import PropTypes from "prop-types";

Shark.propTypes = {
  item: PropTypes.string,
};
export default function Shark({ item }) {
  console.log(item);
  return (
    <section className="max-w-xs h-[350px] border rounded-lg shadow-md bg-[#073f4d] border-[#205f6e] overflow-hidden backdrop-blur-[3px]">
      <div className="h-2/4 bg-blue-100 overflow-hidden object-cover">
        <img className="w-full h-full origin-center" src={item.image} />
      </div>
      <div className="p-3 h-full overflow-hidden text-clip">
        <h5 className="mb-1 text-xl font-normal tacking-wide">{item.name}</h5>
        <p className="h-[100px] font-normal text-sm text-white/50 text-ellipsis overflow-hidden tracking-wide">
          {item.description}
        </p>
      </div>
    </section>
  );
}
