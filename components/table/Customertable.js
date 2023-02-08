import Footer from "../Footer";
export default function Customertable() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b bg-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Sex
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    KTP
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-gray-100">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                    1
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    Mark
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    Otto
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    @mdo
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    @mdo
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    @mdo
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                    <div className="grid grid-cols-2">
                      <button
                        type="button"
                        className="text-l mx-auto inline-block rounded bg-cyan-600 py-3 px-12 font-medium uppercase  text-white shadow-md transition duration-150 ease-in-out hover:bg-cyan-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#editcustomer"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="text-l mx-auto inline-block rounded bg-cyan-600 py-3 px-12 font-medium uppercase  text-white shadow-md transition duration-150 ease-in-out hover:bg-cyan-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                        data-bs-toggle="modal"
                        data-bs-target="#deletecustomer"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* modal edit */}
      <div
        className="fade modal fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="editcustomer"
        tabIndex="-1"
        aria-labelledby="editcustomerTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered pointer-events-none relative w-auto">
          <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <p>This is a vertically centered modal.</p>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
              <button
                type="button"
                className="inline-block rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="ml-1 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
              >
                Save changes
              </button>
            </div>
          </div>
          {/* modal end edit */}
          {/* modal delete  */}
          <div
            className="fade modal fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
            id="deletecustomer"
            tabIndex="-1"
            aria-labelledby="deletecustomerTitle"
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered pointer-events-none relative w-auto">
              <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                  <h5
                    className="text-xl font-medium leading-normal text-gray-800"
                    id="exampleModalScrollableLabel"
                  >
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body relative p-4">
                  <p>This is a vertically centered modal.</p>
                </div>
                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
                  <button
                    type="button"
                    className="inline-block rounded bg-purple-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="ml-1 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* modal end delete  */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
