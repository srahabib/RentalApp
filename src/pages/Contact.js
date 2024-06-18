import react from "react";

const Contact = () => {

  return (
    <main id="content">

      {/* <!-- block news --> */}
      <div class="bg-gray-50 py-6">
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div class="flex flex-row flex-wrap">
            {/* <!-- Left --> */}
            <div class="flex-shrink max-w-full w-full   overflow-hidden">
              <div class="w-full py-3">
                <h2 class="text-gray-800 text-3xl font-bold">
                  <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span> Contact Us
                </h2>
              </div>
              <div class="flex flex-row flex-wrap -mx-3">
                <div class="flex-shrink max-w-full w-full px-3 pb-5">
                  <div class="px-8 py-6 border border-gray-100 bg-white">
                    <form class="flex flex-wrap flex-row -mx-4">
                      <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                        <label for="inputfirst4" class="inline-block mb-2">First name</label>
                        <input type="text" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputfirst4" required />
                      </div>
                      <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                        <label for="inputlast4" class="inline-block mb-2">Last name</label>
                        <input type="text" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inputlast4" required />
                      </div>
                      <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                        <label for="inpuemail4" class="inline-block mb-2">Email</label>
                        <input type="email" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="inpuemail4" required />
                      </div>
                      {/* <div class="flex-shrink max-w-full px-4 w-full md:w-1/2 mb-6">
                      <label for="inputurgent" class="inline-block mb-2">Urgency</label>
                      <select id="inputurgent" class="inline-block w-full leading-5 relative py-3 pl-3 pr-8 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 select-caret appearance-none dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" required>
                        <option>Low...</option>
                        <option>Medium...</option>
                        <option>Hight...</option>
                      </select>
                    </div> */}
                      <div class="flex-shrink max-w-full px-4 w-full mb-6">
                        <label for="exampleTextarea1" class="inline-block mb-2">Messages</label>
                        <textarea class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" id="exampleTextarea1" rows="3"></textarea>
                      </div>
                      <div class="flex-shrink max-w-full px-4 w-full mb-6">
                        <label class="flex items-center">
                          <input type="checkbox" name="checked-demo" value="1" class="form-checkbox h-5 w-5 text-blue-500 dark:bg-gray-700 border border-gray-100 dark:border-gray-700 focus:outline-none" required />
                          <span class="text-gray-700 ml-4">I agree to the Terms of Use</span>
                        </label>
                      </div>
                      <div class="flex-shrink max-w-full px-4 w-full">
                        <button class="flex items-center py-3 px-5 leading-5 bg-green2 text-white hover:bg-grey1 focus:ring-4 focus:outline-none focus:ring-grey1 focus:bg-bej1 focus:text-black rounded" type="submit">
                          Send messages
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- right --> */}

          </div>
        </div>
      </div>
    </main>

  );

}

export default Contact;