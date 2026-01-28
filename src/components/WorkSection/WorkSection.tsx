import Job from "../Job/Job";

export default function WorkSection() {
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
        <div className="flex flex-col gap-10 max-w-[900px]">
          <Job
            position="Software Engineer - Frontend"
            location="Olympia, WA"
            company="Washington State Administrative Office of the Courts"
            dates="Aug 2025 — Present"
            description={[
              "Led accessibility modernization for state judicial websites to meet 508 compliance, increasing WCAG 2.1 AA compliance by 85% and resolving 500+ accessibility issues",
              "Rebuilt 15+ pages from scratch with Material Design Bootstrap, HTML/CSS/JavaScript, converting static, non-responsive layouts into fully responsive designs for desktop, tablet, and mobile",
              "Improved Lighthouse accessibility scores from ∼50 to 95+, enhancing usability for assistive technology users",
            ]}
          />
          <Job
            position="Frontend Engineer"
            location="Miami, FL"
            company="Hogarth Worldwide"
            dates="Apr 2022 — July 2025"
            description={[
              "Built localized Apple.com pages for Latin America with React, TypeScript, and a proprietary CMS",
              "Created and launched apple.com/co/buy/, a localized Apple ecommerce landing page for Colombia",
              "Enhanced accessibility on key Apple.com pages by implementing WAI-ARIA roles, aria-labels, and keyboard navigation, achieving full WCAG 2.1 AA compliance and improving screen reader usability",
            ]}
          />
          <Job
            position="Frontend Developer"
            location="Sarasota, FL"
            company="Accrisoft Corporation "
            dates="May 2021 — Apr 2022"
            description={[
              "Developed responsive and accessible user interfaces using HTML5, CSS3, JavaScript, and React in an agile team environment. Collaborated closely with designers and backend developers to deliver CMS-powered websites",
              "Led UI modernization projects for legacy websites, refactoring outdated layouts and styles into semantic HTML5 and CSS Modules, improving code maintainability and design consistency",
              "Boosted performance across client websites by 30%+ per Google Core Web Vitals, optimizing images, minimizing HTML/CSS/JavaScript, and reducing render-blocking resources",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
