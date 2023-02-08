import Footer from '../../components/Footer'
export default function Producttable() {
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
                    Field
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Outlet
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
                    <div className="grid grid-cols-2">
                    <button className="focus:shadow-outline mx-auto block rounded bg-cyan-400 py-3 px-10 text-l uppercase text-black shadow hover:bg-cyan-300 focus:outline-none">
                      Edit
                    </button>
                    <button className="focus:shadow-outline mx-auto block rounded bg-red-500 py-3 px-10 text-l uppercase text-black shadow hover:bg-red-600 focus:outline-none">
                      delete
                    </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
