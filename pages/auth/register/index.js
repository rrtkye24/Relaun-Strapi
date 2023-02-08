import Side from "../../../components/dashboard/Side";
import { useState } from "react";
import nookies from 'nookies'
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
export default function register() {
  const [field, setField] = useState({});
  const [progress, setProgress] = useState(false);
  const [success, setSuccess] = useState(false);
  function setValue(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setField({
      ...field,
      [name]: value,
    });
    console.log(field);
  }

  async function addUser(e) {
    e.preventDefault();
    setProgress(true);
    const req = await fetch("http://localhost:1337/api/auth/local/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(field),
    });
    const res = await req.json();
    if (res.jwt) {
      setField({});
      e.target.reset();
      setSuccess(true);
    }
    setProgress(false);
  }
  return (
    <>
      <Side />
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Registrasi Customer
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                add user to relaun account
              </a>
            </p>
          </div>
          {success && (
            <div className="mb-2 rounded bg-green-500 px-3 py-2 text-white">
              Oke! User has been added.
            </div>
          )}
          <form
            onSubmit={addUser}
            className="w-full max-w-sm"
            action="#"
            method="POST"
          >
            {progress && (
              <>
                <svg
                  class="... animate-spin motion-reduce:hidden"
                  viewBox="0 0 24 24"
                ></svg>
                <div
                  className="ins et-0
                                absolute z-10 bg-white/50"
                ></div>
              </>
            )}
            <input type="hidden" name="remember" value="true" />
            <div className="mb-10 flex flex-col space-y-4 rounded-md shadow-sm ">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  onChange={setValue}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={setValue}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={setValue}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div class="relative inline-block ">
                <select required class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none" name="role" id="role" >
                  <option disabled >Role</option>
                  <option value={'cashier'}>Cashier</option>
                  <option value={'Owner'}>Owner</option>
                  <option value={'user'}>User</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            

            <div>
              <button
                disable={progress}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
