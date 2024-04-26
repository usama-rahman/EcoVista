import Image from "next/image";

const Landing = () => {
  return (
    <>
      <div>
        <div class="wrapper">
          {/* <!-- image background and overlay --> */}
          <Image
            alt=""
            src="/background.png"
            width={1000}
            height={1000}
            class="bg-img"
          />
          <div class="overlay"></div>
          {/* <!-- image background and overlay --> */}

          {/* <!-- main content --> */}
          <main class="!z-50 w-full">
            <div class="container">
              <div class="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
                {/* <!--  --> */}
                <div class="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
                  <div>
                    <div class="mb-2 flex items-center gap-2">
                      <h2 class="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
                        North America
                      </h2>
                      <div class="relative">
                        <button>
                          <Image
                            class="size-9"
                            src="/link.svg"
                            alt="link icon"
                            width={1000}
                            height={1000}
                          />
                        </button>
                        <div class="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
                          <ul
                            role="list"
                            class="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
                          >
                            <li>Kolkata</li>
                            <li>Dhaka</li>
                            <li>London</li>
                            <li>Amsterdam</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <p class="text-lg text-[#C4C4C4] lg:text-xl">
                      United States of America | California
                    </p>
                    <div class="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
                      <span>2:24 PM</span> <span>Monday, 12 February 2024</span>
                    </div>
                  </div>
                </div>

                {/* <!--  --> */}
                {/* <!-- Current Weather --> */}
                <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
                  <div class="card">
                    <h6 class="feature-name">Current Weather</h6>
                    <div class="feature-main">
                      <Image
                        class="max-w-20"
                        src="/icon_rain.png"
                        alt="rain icon"
                        width={1000}
                        height={1000}
                      />
                      <h3 class="feature-title">Rain</h3>
                      <span class="feature-name">Moderate Rain</span>
                    </div>
                  </div>
                </div>
                {/* <!-- Current Weather Ends --> */}
                {/* <!-- Air Pollution & Quality --> */}
                <div class="col-span-12 lg:col-span-4 2xl:col-span-6">
                  <div class="card">
                    <h6 class="feature-name">Air Pollution & Quality</h6>

                    {/* <!-- info items --> */}
                    <div class="mt-3 space-y-2 lg:space-y-3">
                      {/* <!-- item --> */}
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                          <Image
                            class="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            width={1000}
                            height={1000}
                          />
                          Air Quality Index
                        </div>
                        <span class="text-right text-sm text-white lg:text-base">
                          Good
                        </span>
                      </div>
                      {/* <!-- item ends --> */}
                      {/* <!-- item --> */}
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                          <Image
                            class="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            width={1000}
                            height={1000}
                          />
                          Carbon Monoxide
                        </div>
                        <span class="text-right text-sm text-white lg:text-base">
                          201.94 µg/m³
                        </span>
                      </div>
                      {/* <!-- item ends --> */}
                      {/* <!-- item --> */}
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                          <Image
                            class="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            width={1000}
                            height={1000}
                          />
                          Nitric Oxide
                        </div>
                        <span class="text-right text-sm text-white lg:text-base">
                          0.01877 ppm
                        </span>
                      </div>
                      {/* <!-- item ends --> */}
                      {/* <!-- item --> */}
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                          <Image
                            class="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            width={1000}
                            height={1000}
                          />
                          Nitrogen Dioxide
                        </div>
                        <span class="text-right text-sm text-white lg:text-base">
                          0.7711 ppm
                        </span>
                      </div>
                      {/* <!-- item ends --> */}
                      {/* <!-- item --> */}
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                          <Image
                            class="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            width={1000}
                            height={1000}
                          />
                          Ozone
                        </div>
                        <span class="text-right text-sm text-white lg:text-base">
                          68.664 µg/m³
                        </span>
                      </div>
                      {/* <!-- item ends --> */}
                      {/* <!-- item --> */}
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                          <Image
                            class="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            width={1000}
                            height={1000}
                          />
                          Sulfur Dioxide
                        </div>
                        <span class="text-right text-sm text-white lg:text-base">
                          0.6407 ppm
                        </span>
                      </div>
                      {/* <!-- item ends --> */}
                      {/* <!-- item --> */}
                      <div class="flex items-center justify-between gap-4">
                        <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
                          <Image
                            class="max-w-[18px]"
                            src="/icon_air_element.png"
                            alt="icon"
                            width={1000}
                            height={1000}
                          />
                          PM2.5
                        </div>
                        <span class="text-right text-sm text-white lg:text-base">
                          0.5 µg/m³
                        </span>
                      </div>
                      {/* <!-- item ends --> */}
                    </div>
                    {/* <!-- info items ends --> */}
                  </div>
                </div>
                {/* <!-- Air Pollution & Quality Ends --> */}

                {/* <!-- wind --> */}
                <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
                  <div class="card">
                    <h6 class="feature-name">Wind</h6>
                    <div class="feature-main">
                      <Image
                        class="max-w-20"
                        src="/icon_wind.png"
                        alt="rain icon"
                        width={1000}
                        height={1000}
                      />
                      <h3 class="feature-title">Rain</h3>
                      <span class="feature-name">Moderate Rain</span>
                    </div>
                  </div>
                </div>
                {/* <!--  --> */}

                {/* <!-- current temp  --> */}
                <div class="col-span-12 lg:col-span-4 2xl:col-span-3">
                  <div class="card">
                    <h6 class="feature-name">Current Temperature</h6>
                    <div class="feature-main">
                      <Image
                        class="max-w-20"
                        src="/icon_tempareture.png"
                        alt="rain icon"
                        width={1000}
                        height={1000}
                      />
                      <h3 class="feature-title">246.43°C</h3>

                      <span class="feature-name">Feels Like 244°C</span>
                    </div>
                  </div>
                </div>
                {/* <!--  --> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
export default Landing;
