import "./SalaryRangeSearch.css";
const SalaryRangeSearch = ({ handleRangeSearch }) => {
  return (
    <div className="mt-6 ">
      <label className="label flex justify-center md:justify-start ">
        <span className="text-xl font-semibold">Search with min-max range</span>
      </label>
      <form onSubmit={handleRangeSearch} className="join">
        <input
          type="number"
          name="minRange"
          placeholder="Min Range"
          defaultValue={500}
          className="input input-bordered border-[#56F09F] focus:outline-none rounded-r-none w-full max-w-xs"
        />
        <input
          type="number"
          name="maxRange"
          defaultValue={5000}
          placeholder="Max Range"
          className="input input-bordered border-[#56F09F] focus:outline-none rounded-none w-full max-w-xs"
        />
        <input
          type="submit"
          value="Search"
          className="btn border-[#56F09F] hover:border-[#56F09F] rounded-l-none"
        />
      </form>
    </div>
  );
};

export default SalaryRangeSearch;
