import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";


const ServiceForm = () => {
    const [formData, setFormData] = useState({
        policyNo: "",
        dob: "",
        services: [],
        message: "",
    });

    const servicesList = [
        "Full Policy Status",
        "Yearly Premium Statement (TDS)",
        "Next Premium Due Date (FUP)",
        "Last Premium Paid Date",
        "Surrender",
        "Loan",
        "Loan Only Interest",
        "Loan Principal & Interest",
    ];

    const handleCheckboxChange = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((item) => item !== service)
                : [...prev.services, service],
        }));
    };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     alert("Form submitted successfully!");
    // };



    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const form = new FormData();

  form.append("access_key", "197edb17-367c-40e2-b40c-6db7467af55b"); // 🔴 Replace with your real key
  form.append("subject", "New Service Request");
  form.append("from_name", "Smart Invest Website");

  form.append("Policy No", formData.policyNo);
  form.append("Date of Birth", formData.dob);
  form.append("Services", formData.services.join(", "));
  form.append("Message", formData.message || "No message");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await response.json();

    if (result.success) {
      alert("✅ Form submitted successfully!");
      setFormData({
        policyNo: "",
        dob: "",
        services: [],
        message: "",
      });
    } else {
      alert("❌ Failed to submit form.");
    }
  } catch (error) {
    alert("❌ Something went wrong. Try again.");
    console.error(error);
  }
};


    return (
        <div className="w-full max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md mt-24 relative">
            <Link
                to="/"
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
                title="Close"
            >
                <X className="w-6 h-6" />
            </Link>
            <h2 className="text-xl font-semibold mb-4 text-center">
                Service Request Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Policy No */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Policy No
                    </label>
                    <input
                        type="text"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter Policy Number"
                        value={formData.policyNo}
                        onChange={(e) =>
                            setFormData({ ...formData, policyNo: e.target.value })
                        }
                        required
                    />
                </div>

                {/* Date of Birth */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        value={formData.dob}
                        onChange={(e) =>
                            setFormData({ ...formData, dob: e.target.value })
                        }
                        required
                    />
                </div>

                {/* Services */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Service Requirement (Multiple Select)
                    </label>
                    <div className="space-y-2">
                        {servicesList.map((service, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 text-sm"
                            >
                                <input
                                    type="checkbox"
                                    className="accent-blue-600"
                                    checked={formData.services.includes(service)}
                                    onChange={() => handleCheckboxChange(service)}
                                />
                                {service}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Any Other Requirement
                    </label>
                    <textarea
                        rows={4}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Write your message..."
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-full hover:bg-primary/90 transition"
                >
                    Submit Request
                </button>
            </form>
        </div>
    );
};

export default ServiceForm;
