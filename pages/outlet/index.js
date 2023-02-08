import nookies from "nookies";
import Side from "../../components/dashboard/Side";
import Outlettable from "../../components/table/Outlettable";
export async function getServerSideProps(ctx) {
    const cookies = nookies.get(ctx);
    if (!cookies.token) {
        return {
            redirect: {
                destination: '/auth/login',
            }
        }
    }
    return {
        props: {}
    }
}
export default function outlet() {
  return (
    <div>
      <Side />
      <div
        id="main-content"
        className="relative  h-full overflow-y-auto lg:ml-64 lg:mr-64"
      >
        <main>
          <div className="px-4 pt-6">
            <Outlettable/>
          </div>
        </main>
      </div>
    </div>
  );
}
