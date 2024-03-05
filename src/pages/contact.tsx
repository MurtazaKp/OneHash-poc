import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    lead_name: "",
    company_name: "",
    email_id: "",
    address_type: "",
    country: ""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const apiKey = "c19b4f301c14e0a";
      const apiSecret = "6e61bdc06f1c2fc";

      const response = await fetch(
        "https://govind.onehash.is/api/resource/Lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${apiKey}:${apiSecret}`
          },
          body: JSON.stringify(formData)
        }
      );

      if (response.ok) {
        console.log("Lead created successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          lead_name: "",
          company_name: "",
          email_id: "",
          address_type: "",
          country: ""
        });
      } else {
        console.error("Failed to create lead:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className="header-conatiner text-4xl">CONTACT FORM</h1>
      <div className="container">
        <div className="crm-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>

            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="lead_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Lead Name
              </label>
              <input
                type="text"
                id="lead_name"
                name="lead_name"
                value={formData.lead_name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Joshi"
                required
              />
            </div>

            <div>
              <label
                htmlFor="company_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Setoo"
                required
              />
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email_id"
                value={formData.email_id}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="address_type"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address Type
              </label>
              <input
                type="text"
                id="address_type"
                name="address_type"
                value={formData.address_type}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Billing"
                required
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="India"
                required
              />
            </div>

            <div className="form-submit">
              <button
                type="submit"
                className="bg-green-700 text-white border-black p-2 w-48 mt-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
