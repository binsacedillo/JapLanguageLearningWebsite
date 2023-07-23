import TopNavigationBar from './TopNavigationBar'
import Footer from './Footer'

export const Privacy = () => {
  return (
    <main>
      <TopNavigationBar />
      <div className="bg-indigo-300 min-h-screen">
        <div className="container mx-auto px-4 py-8 flex justify-center items-center">
          <div className="max-w-3xl"> {/* Add a maximum width to keep the content centered and prevent it from spreading across the entire screen */}
            <h1 className="text-3xl text-black font-bold mb-4">Privacy Policy</h1>
            <p className="text-black mb-8">
              This page contains the privacy policy. We respect and value the privacy of our users and assure you that your personal information will be treated with care. Below, we outline our policy on the collection and use of personal information.
            </p>

            {/* Add your privacy policy content here */}
            {/* For example: */}
            <h2 className="text-2xl text-black font-semibold mb-2">Collection and Use of Personal Information</h2>
            <p className="text-black mb-6">
              We may collect personal information, such as names and email addresses, when you contact us or use our services. We use this information for the following purposes:
            </p>
            <ul className="list-disc text-black list-inside mb-6">
              <li>To respond to your inquiries</li>
              <li>To provide and operate our services</li>
              <li>To contact and notify you</li>
            </ul>

            <h2 className="text-2xl text-black font-semibold mb-2">Disclosure and Sharing of Personal Information</h2>
            <p className="text-black mb-6">
              Except as required by law, we do not share your personal information with third parties.
            </p>

            <h2 className="text-2xl text-black font-semibold mb-2">Use of Cookies</h2>
            <p className="text-black mb-6">
              We may use cookies on our site to enhance the user experience when you revisit our website. You can disable cookies in your browser settings, but some features may be limited as a result.
            </p>

            {/* Add more sections as needed */}

            <p className="text-black">
              For any questions regarding our privacy policy, please contact us at the following email address:
            </p>
            <p className="text-black">Email: japanlanguagegakko@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
