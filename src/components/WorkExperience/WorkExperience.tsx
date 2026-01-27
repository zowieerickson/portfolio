export default function WorkExperience({
  position,
  company,
  location,
  description,
  dates,
}) {
  return (
    <section>
      <h3 className="text-center text-xl font-medium">Work Experience</h3>
      <div className="relative w-full max-w-4xl mx-auto h-full sm:flex hidden">
        <div className="absolute -left-4 md:-left-20 top-3">
          <div
            className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <div
              className="h-2 w-2  rounded-full border border-neutral-300 bg-white"
              style={{
                backgroundColor: "var(--emerald-500)",
                borderColor: "var(--emerald-600)",
              }}
            ></div>
          </div>
          <svg
            viewBox="0 0 20 1352"
            width="20"
            height="1352"
            className=" ml-4 block"
            aria-hidden="true"
          >
            <path
              d="M 1 0V -36 l 18 24 V 1081.6000000000001 l -18 24V 1352"
              fill="none"
              stroke="#9091A0"
              stroke-opacity="0.16"
            ></path>
            <path
              d="M 1 0V -36 l 18 24 V 1081.6000000000001 l -18 24V 1352"
              fill="none"
              stroke="url(#gradient)"
              stroke-width="1.25"
              className="motion-reduce:hidden"
            ></path>
            <defs>
              <linearGradient
                id="gradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1="533.3145340236687"
                y2="377.25813609467457"
              >
                <stop stop-color="#18CCFC" stop-opacity="0"></stop>
                <stop stop-color="#18CCFC"></stop>
                <stop offset="0.325" stop-color="#6344F5"></stop>
                <stop offset="1" stop-color="#AE48FF" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className=" p-5 w-full border rounded-lg">
          <h1 className="font-semibold text-2xl capitalize">
            Fullstack Developer
          </h1>
          <p className="font-normal mt-2">Delhi, India</p>
          <p className="font-normal mt-1">Zapllo Software</p>
          <p className="mt-4 font-normal text-gray-700 dark:text-white/75">
            Built responsive landing page with animated components, improving
            mobile traffic by 35%. Implemented employee management APIs using
            Node.js, handling 1000+ daily requests. Created reusable Next.js
            components, resulting in reduction of development time.
          </p>
          <p className="font-normal mt-5">Aug 2024 - Sept 2024</p>
        </div>
      </div>
    </section>
  );
}
