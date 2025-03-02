import { assets } from "../assets/assets";

const Add = () => {
  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>

        <div className="flex gap-2">
          <label htmlFor="image1">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image1" hidden />
          </label>

          <label htmlFor="image2">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image2" hidden />
          </label>

          <label htmlFor="image3">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image3" hidden />
          </label>

          <label htmlFor="image4">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content here"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div className="w-full">
          <p className="mb-2">Product Category</p>
          <select className="w-full px-3 py-2">
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="w-full">
          <p className="mb-2">Sub Category</p>
          <select className="w-full  px-3 py-2">
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Kids</option>
          </select>
        </div>

        <div className="w-full">
          <p className="mb-2">Product Price</p>
          <input
            type="number"
            placeholder="25"
            className="w-full px-3 py-2 sm:w-[120px]"
          />
        </div>
      </div>

      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div className="bg-slate-200 px-3 py-1 cursor-pointer">
            <p>S</p>
          </div>

          <div className="bg-slate-200 px-3 py-1 cursor-pointer">
            <p>M</p>
          </div>

          <div className="bg-slate-200 px-3 py-1 cursor-pointer">
            <p>L</p>
          </div>

          <di className="bg-slate-200 px-3 py-1 cursor-pointer">
            <p>XL</p>
          </di>

          <div className="bg-slate-200 px-3 py-1 cursor-pointer">
            <p>XXL</p>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Add;
