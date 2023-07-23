const Pricing = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-5xl p-8"> {/* Increased max-width */}
        <h2 className="text-3xl font-semibold text-white mb-4">Japanese Language Program Pricing</h2> {/* Increased font size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap */}
          <div className="border rounded-md bg-indigo-400 p-6"> {/* Increased padding */}
            <h3 className="text-xl text-white font-semibold mb-4">Starter Package</h3> {/* Increased font size */}
            <p className="text-white mb-6">Ideal for beginners</p> {/* Increased margin */}
            <ul className="space-y-3"> {/* Increased space */}
              <li className="text-white">10 lessons per month</li>
              <li className="text-white">Basic vocabulary and grammar</li>
              <li className="text-white">Email support</li>
            </ul>
            <div className="mt-6"> {/* Increased margin */}
              <span className="text-xl text-white font-semibold text-white">$100</span> {/* Increased font size */}
              <span className="text-white"> / month</span>
            </div>
          </div>
          <div className="border rounded-md bg-indigo-400 p-6"> {/* Increased padding */}
            <h3 className="text-xl text-white font-semibold mb-4">Standard Package</h3> {/* Increased font size */}
            <p className="text-white mb-6">Great for intermediate learners</p> {/* Increased margin */}
            <ul className="space-y-3"> {/* Increased space */}
              <li className="text-white">20 lessons per month</li>
              <li className="text-white">Expanded vocabulary and grammar</li>
              <li className="text-white">Email and chat support</li>
            </ul>
            <div className="mt-6"> {/* Increased margin */}
              <span className="text-xl font-semibold text-white">$200</span> {/* Increased font size */}
              <span className="text-white"> / month</span>
            </div>
          </div>
          <div className="border rounded-md bg-indigo-400 p-6"> {/* Increased padding */}
            <h3 className="text-xl text-white font-semibold mb-4">Premium Package</h3> {/* Increased font size */}
            <p className="text-white mb-6">For advanced learners</p> {/* Increased margin */}
            <ul className="space-y-3"> {/* Increased space */}
              <li className="text-white">30 lessons per month</li>
              <li className="text-white">Advanced vocabulary and expression</li>
              <li className="text-white">Email, chat, and phone support</li>
            </ul>
            <div className="mt-6"> {/* Increased margin */}
              <span className="text-xl font-semibold text-white">$300</span> {/* Increased font size */}
              <span className="text-white"> / month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
