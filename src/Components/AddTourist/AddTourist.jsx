const AddTourist = () => {
  return (
    <div className="container mx-auto">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text font-semibold">Tourist Spot name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Enter tourist spot"
            name="spot"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text font-semibold">Country Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Country Name"
            name="country"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text font-semibold">Location</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Enter Location"
            name="location"
            className="input input-bordered w-full"
          />
        </label>
      </div>{' '}
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text font-semibold">Photo URL</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            className="input input-bordered w-full"
          />
        </label>
      </div>{' '}
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text font-semibold">Short Description</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text font-semibold">Average Cost</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Average Cost"
            name="cost"
            className="input input-bordered w-full"
          />
        </label>
      </div>{' '}
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text font-semibold">Seasonality</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="(Summer,Winter)"
            name="session"
            className="input input-bordered w-full"
          />
        </label>
      </div>{' '}
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text font-semibold">Travel Time</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Travel Time"
            name="travel"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Total Visitor per year</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Total-Visitor"
            name="visitor"
            className="input input-bordered w-full"
          />
        </label>
      </div>{' '}
    </div>
  );
};

export default AddTourist;
