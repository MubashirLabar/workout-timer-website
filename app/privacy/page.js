import Link from "next/link";

function Privacy() {
  return (
    <div class="w-screen">
      {/* Navbar */}
      <div className="w-full container mx-auto p-3">
        <div className="w-full flex items-center justify-between">
          <Link href={"/"}>
            <img src="/logo.svg" className="w-[150px] md:w-[180px] absolute" />
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[900px] mx-auto p-3 mt-32 md:mt-36 pb-12 md:pb-16">
        <div className="text-4xl md:text-5xl text-gray-900 font-semibold mb-8">
          Privacy
        </div>
        <div className="w-full flex flex-col gap-7 text-sm text-gray-900">
          <div>{`This Privacy Policy explains how Workout Timer ("we," "our," or "us") handles user data when you use our mobile application ("App"). By using our App, you agree to the terms outlined in this Privacy Policy.`}</div>

          <div className="text-base font-semibold">
            Information We Do Not Collect
          </div>
          <div>{`We want to assure you that we do not collect any personal information or utilize third-party services for data collection when you use our App. We respect your privacy and believe in maintaining transparency.`}</div>

          <div className="text-base font-semibold">Log Data</div>
          <div>{`When you use our App, we may collect limited data for error tracking and performance improvement purposes. This information, known as Log Data, may include generic details such as device information, operating system version, and app usage statistics. However, we do not collect any personally identifiable information through this process.`}</div>

          <div className="text-base font-semibold">Cookies</div>
          <div>{`Our App does not use cookies or similar tracking technologies to collect user data.`}</div>

          <div className="text-base font-semibold">Service Providers</div>
          <div>{`We do not engage any third-party companies or individuals to collect, process, or manage user data on our behalf.`}</div>

          <div className="text-base font-semibold">Security</div>
          <div>{`While we do not collect personal information, we are committed to safeguarding your data and maintaining the security of our App to the best of our ability.`}</div>

          <div className="text-base font-semibold">Links to Other Sites</div>
          <div>{`Our App may contain links to external websites or services. Please be aware that these sites are not operated by us, and we encourage you to review their respective privacy policies. We have no control over and assume no responsibility for the content, privacy practices, or policies of third-party websites.`}</div>

          <div className="text-base font-semibold">{`Children's Privacy`}</div>
          <div>{`Our App is not designed for users under the age of 13, and we do not knowingly collect any personal information from children under 13. If you believe that a child has provided us with personal information, please contact us, and we will take appropriate action.`}</div>

          <div className="text-base font-semibold">
            Changes to This Privacy Policy
          </div>
          <div>{`We may update our Privacy Policy in the future. It is your responsibility to review this page for any changes. We will notify you of any updates by posting the revised Privacy Policy on this page.`}</div>

          <div className="text-base font-semibold">Contact Us</div>
          <div>
            If you have any questions or concerns regarding our Privacy Policy,
            please do not hesitate to contact us at{" "}
            <a
              href="https://zeezsoft.com/contact"
              target="_blank"
              className="text-blue-700"
            >
              zeezsoft
            </a>
          </div>
          <div>
            Thank you for using the Workout Timer App. We prioritize your
            privacy and are committed to providing a safe and secure user
            experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
