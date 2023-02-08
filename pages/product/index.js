import nookies from 'nookies';
import Side from '../../components/dashboard/Side';
import Producttable from '../../components/table/Producttable';
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
export default function product() {
   return (
      <div>
      <Side/>
      <div
        id="main-content"
        className="relative  h-full overflow-y-auto lg:ml-64 lg:mr-64"
      >
        <main>
          <div className="px-4 pt-6">
            <Producttable/>
          </div>
        </main>
      </div>
    </div>
   )
}
