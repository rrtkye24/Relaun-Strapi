import Head from "next/head";
// import Image from '../../image';
import Router from "next/router";
import nookies from 'nookies';
import axios from 'axios';
import { useState } from 'react';

export async function getServerSideProps(ctx){
  const cookies = nookies.get(ctx);
  if(cookies.token){
    return {
      redirect:{
        destination: '/dashboard',
      }
    }
  }
  return {
    props: {}
  }
}
export default function login() {
  const [field, setField] = useState({});
  const [progress, setProgress] = useState(false);
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

  async function doLogin(e) {
    e.preventDefault();
    setProgress(true);
    const req = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(field)
    });
    const res = await req.json();
    if (res.jwt) {
      // setField({});
      // setSuccess(true);
      // e.target.reset();
      //  console.log(res);
      nookies.set(null, 'token', res.jwt);
      Router.replace('/dashboard')
    }
    setProgress(false);
  }
  return (
    <>
      <Head>
        <title>Login Page - Relaun</title>
        <meta name="description" content="Relaun" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1604335398549-1b80aadd00a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=htmlFormat&fit=crop&w=2071&q=80)' }}>
            <div className="absolute bg-gradient-to-b from-cyan-200 to-blue-500 opacity-75 inset-0 z-0"></div>
            <div className="w-full  max-w-md z-10">
              <div><img src="/logo.png" width="300" className="animate-bounce"></img></div>
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6 uppercase">Clean your dirty things</div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                with <b>relaun</b> all can well organized
              </div>
            </div>
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <div className="max-w-md w-full space-y-2">
              <div className="text-center">
                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                  Welcome Back!
                </h2>
                <p className="mt-2 text-sm text-gray-500">Please Login to your account</p>
              </div>
              <div className="flex flex-row justify-center items-center space-x-3">

              </div>
              <div className="flex items-center justify-center space-x-2">
                {/* <span className="h-px w-16 bg-gray-200"></span> */}
                {/* <span className="text-gray-300 font-normal">or continue with</span> */}
                {/* <span className="h-px w-16 bg-gray-200"></span> */}
              </div>
              <form onSubmit={doLogin} className="mt-8 space-y-6" method="POST">
                {
                  progress && (
                    <div className="absolute inset-0 z-10 bg-white/50" />
                  )
                }
                <input onChange={setValue} type="hidden" name="remember" value="true" />
                <div className="relative">
                  <div className="absolute right-3 mt-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  </div>
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                  <input onChange={setValue} name="identifier"
                    className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                    type="text" placeholder="mail@gmail.com" />
                </div>
                <div className="mt-8 content-center">
                  <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input onChange={setValue} name="password"
                    className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="password" placeholder="Enter your password" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input onChange={setValue} id="remember_me" name="remember_me" type="checkbox"
                      className="h-4 w-4 bg-white-500 focus:ring-blue-400 border-gray-300 rounded" />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-indigo-400 hover:text-blue-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button type="submit"
                    className="w-full flex justify-center bg-gradient-to-r from-cyan-200 to-sky-500  hover:bg-gradient-to-l hover:from-cyan-500 hover:to-sky-200 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Login
                  </button>
                </div>
                {/* <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don't have an account?</span>
              <a href="#"
                className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                up</a>
            </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}