import buttonSetting from "../Button/Button";
import useAuth from "../../hooks/useAuth";

const ApplyModal = () => {
  const { user } = useAuth();
  const handleApplyJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const resumeLink = form.resumeLink.value;
    console.log(resumeLink);
  };
  return (
    <div>
      {/* Apply Modal */}
      <dialog id="apply" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box " style={{ borderRadius: "10px" }}>
          {/* working  */}
          <div className=" shrink-0 w-full ">
            <form onSubmit={handleApplyJob} className="card-body">
              {/* row 1 */}
              <div className="">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Resume Link</span>
                  </label>
                  <input
                    type="text"
                    name="cvLink"
                    placeholder="Provide Resume Link"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User</span>
                  </label>
                  <input
                    type="text"
                    name="jobDescription"
                    placeholder="Short Description"
                    defaultValue={user?.displayName}
                    className="input input-bordered disabled:input disabled:input-bordered"
                    disabled
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">User Email</span>
                  </label>
                  <input
                    type="text"
                    name="jobDescription"
                    placeholder="User Email"
                    defaultValue={user?.email}
                    className="input input-bordered disabled:input disabled:input-bordered"
                    disabled
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className={buttonSetting()}>
                  <span className="relative  text-base font-semibold">
                    Apply Job
                  </span>
                </button>
              </div>
            </form>
          </div>
          {/* working  */}
          {/* modal closing button */}
          <div className="modal-action ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ApplyModal;
