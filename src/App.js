import { useState } from "react";

function App() {
  const [emailtext, setEmailtext] = useState("");
  const [passtext, setPasstext] = useState("");

  const [inputresult, setInputresult] = useState([]);

  const emailtextinputhandle = (e) => {
    setEmailtext(e.target.value);
  };
  const passtexthandle = (e) => {
    setPasstext(e.target.value);
  };

  const handleclick = (e) => {
    e.preventDefault();
    const newinputresult = { email: emailtext, pass: passtext };
    setInputresult([...inputresult, newinputresult]);

    setEmailtext("");
    setPasstext("");
  };

  return (
    <>
      <div className="main h-screen flex justify-center items-center ">
        <div className="form-body flex flex-col justify-between bg-[#AEDBCE] p-20 w-[500px] rounded-xl shadow-2xl ">
          <span className="text-center font-bold text-2xl mb-10 text-[#635666]">
            Login Here
          </span>
          <form>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-lg bg-[#D3EBCD] border border-[#635666] text-gray-900 text-sm rounded-lg focus:ring-[#635666] focus:border-[#635666] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#635666] dark:focus:border-[#635666] dark:shadow-sm-light"
                value={emailtext}
                onChange={emailtextinputhandle}
                placeholder=""
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-lg  bg-[#D3EBCD] border border-[#635666] text-gray-900 text-sm rounded-lg focus:ring-[#635666] focus:border-[#635666] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#635666] dark:focus:border-[#635666] dark:shadow-sm-light"
                value={passtext}
                onChange={passtexthandle}
                required
              />
            </div>
            <button
              onClick={handleclick}
              type="submit"
              className="  w-full shadow-md text-white bg-[#635666] hover:bg-[#635666] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#635666] dark:hover:bg-[#635666] dark:focus:ring-[#635666]"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
