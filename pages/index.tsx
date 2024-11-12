import useIndex, { LICENSE_TYPES } from "@/hooks/useIndex";

export default function IndexPage() {
  const { formData, setFormData, handleSubmit } = useIndex();

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          MobaXterm Keygen
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="licenseType"
            >
              License Type:
            </label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              id="licenseType"
              value={formData.licenseType}
              onChange={(e) =>
                setFormData({ ...formData, licenseType: e.target.value })
              }
            >
              {Object.entries(LICENSE_TYPES).map(([key, value]) => (
                <option key={value} value={value}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="userName"
            >
              Username:
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              id="userName"
              pattern="[a-zA-Z]+"
              placeholder="Example: mobaXterm"
              title="Only letters are allowed"
              type="text"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="versionName"
            >
              Version:
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              id="versionName"
              pattern="^[1-9][0-9]*\.?\d{0,1}$"
              placeholder="Example: 24.3"
              title="Decimal number, and only one digit after the decimal point is allowed"
              value={formData.versionName}
              onChange={(e) =>
                setFormData({ ...formData, versionName: e.target.value })
              }
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="userNum"
            >
              Number of Users:
            </label>
            <input
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              id="userNum"
              max="214783647"
              pattern="^[1-9]+\d*$"
              placeholder="Example: 1"
              title="Number must be between 1 and 214783647"
              type="text"
              value={formData.userNum}
              onChange={(e) =>
                setFormData({ ...formData, userNum: e.target.value })
              }
            />
          </div>

          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}
