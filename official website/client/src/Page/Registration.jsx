import React ,{useState}from 'react'
import "../tailwind/login"
import login from "../assets/login.svg"

const Registration = () => {

  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
  }



  return (
    <div>
      <div>

        <div className="bg-primary overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">

          <div className="login-container container w-full lg:w-4/5 lg:primary h-screen lg:h-screen-75 lg: border-gray-300 bg-primary rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">


            <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark  flex relative order-2 lg:order-1">




              <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg:opacity-100">

                <img src={login} alt="product" className="-mb-5 lg:mb-0 -ml-12 lg:ml-0 product h-[500px] xl:h-[700px] 2xl:h-[900px] w-auto object-cover transform group-hover:translate-x-26 2xl:group-hover:translate-x-48 transition-all duration-1000 lg:duration-700 ease-in-out" />


                <div className="shadow w-full h-5 bg-black bg-opacity-25 filter blur absolute bottom-0 lg:bottom-14 left-0 lg:left-24 rounded-full transform skew-x-10"></div>

              </div>

              <div className="hidden lg:block w-1/3 bg-primary ml-auto"></div>

            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
                <div className="w-full space-y-5">

                  <div className="form-caption flex items-end justify-center text-center space-x-3 mb-14">
                    <span className="text-3xl font-semibold text-gradient">Registration</span>
                    <span className="text-base text-gray-800 text-gradient">Form</span>
                  </div>

                  <div className="form-element">
                    <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg bg-gradient text-gradient  tracking-wide">Name</span>
                      <span className="block">
                        <input type="text" className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" value={user.name} onChange={handleInputs} name="name"










                        />
                      </span>
                    </label>
                  </div>

                  <div className="form-element">
                    <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg bg-gradient text-gradient tracking-wide">Email</span>
                      <span className="block">
                        <input type="text" className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"value={user.email} onChange={handleInputs} name="email" />
                      </span>
                    </label>
                  </div>

                  <div className="form-element">
                    <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg bg-gradient text-gradient tracking-wide">Mobile number</span>
                      <span className="block">
                        <input type="text" className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" value={user.phone} onChange={handleInputs} name="phone"/>
                      </span>
                    </label>
                  </div>

                  <div className="form-element">
                    <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg bg-gradient text-gradient tracking-wide">Occupation</span>
                      <span className="block">
                        <input type="text" className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" value={user.work} onChange={handleInputs} name="work"/>
                      </span>
                    </label>
                  </div>





                  <div className="form-element">
                    <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg bg-gradient text-gradient tracking-wide">Password</span>
                      <span className="block">
                        <input type="password" className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" value={user.password} onChange={handleInputs} name="password" />
                      </span>
                    </label>
                  </div>

                  <div className="form-element">
                    <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                      <span className="block text-lg bg-gradient text-gradient tracking-wide"> Confirm Password</span>
                      <span className="block">
                        <input type="password" className="bg-yellow-100 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-2 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400" value={user.cpassword} onChange={handleInputs} name="cpassword"/>
                      </span>
                    </label>
                  </div>





                  <div className="form-element">
                    <span className="w-full lg:w-3/5 block mx-auto ">
                      <input type="submit" className="cursor-pointer border-2 border-yellow-200 w-full p-3 bg-gradient focus:outline-none active:outline-none text-gradient focus:bg-gradient active:bg-theme-yellow hover:bg-theme-yellow transition-all" />
                    </span>
                  </div>


                </div>
              </div>

            </div>



          </div>

          <script src="./js/script.js"></script>
        </div>

      </div>

    </div>
  )
}

export default Registration