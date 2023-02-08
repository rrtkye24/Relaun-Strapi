import Side from "../../components/dashboard/Side";
import nookies from 'nookies'
import Customertable from "../../components/table/Customertable";
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
export default function Users(){
    return(
        <>
        <Side/>
        <div
          id="main-content"
          className="relative  h-full overflow-y-auto lg:ml-64 lg:mr-64"
        >
          <main>
            <div className="px-4 pt-6">
              <Customertable/>
            </div>
          </main>
        </div>
      </>
    )
}
