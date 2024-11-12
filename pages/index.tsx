import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/switch";
import { FiDownload } from "react-icons/fi";

import useIndex, { LICENSE_TYPES } from "@/hooks/useIndex";
import { MoonFilledIcon, SunFilledIcon } from "@/components/icons";

export default function IndexPage() {
  const { theme, setTheme } = useTheme();
  const { formData, setFormData, handleSubmit } = useIndex();

  const darkBgColor =
    "bg-gradient-to-b from-indigo-950 via-purple-950 to-blue-950";
  const lightBgColor = "bg-gradient-to-b from-gray-100 via-gray-50 to-gray-200";

  return (
    <div
      className={`min-h-screen py-12 ${theme === "dark" ? darkBgColor : lightBgColor}`}
    >
      <div className="max-w-md mx-auto p-8 rounded-xl backdrop-blur-lg bg-white/10 dark:bg-white/10 light:bg-black/10 shadow-2xl border border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50">
        <div className="flex justify-between items-center mb-8">
          <h1
            className={`text-3xl font-   ${theme === "dark" ? "text-white" : "text-black"}`}
          >
            MobaXterm Keygen
          </h1>
          <Switch
            defaultSelected={theme === "dark"}
            size="lg"
            color="secondary"
            startContent={<SunFilledIcon className="h-6 w-6" />}
            endContent={<MoonFilledIcon className="h-6 w-6" />}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <Select
            label="License Type"
            value={formData.licenseType}
            onChange={(e) =>
              setFormData({ ...formData, licenseType: e.target.value })
            }
          >
            {Object.entries(LICENSE_TYPES).map(([key, value]) => (
              <SelectItem key={value} value={value}>
                {key}
              </SelectItem>
            ))}
          </Select>

          <Input
            label="Username"
            placeholder="Example: mobaXterm"
            value={formData.userName}
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            pattern="[a-zA-Z]+"
            description="Only letters are allowed"
          />

          <Input
            label="Version"
            placeholder="Example: 24.3"
            value={formData.versionName}
            onChange={(e) =>
              setFormData({ ...formData, versionName: e.target.value })
            }
            pattern="^[1-9][0-9]*\.?\d{0,1}$"
            description="Decimal number, and only one digit after the decimal point is allowed"
          />

          <Input
            description="Number must be between 1 and 214783647"
            label="Number of Users"
            placeholder="Example: 1"
            value={formData.userNum}
            pattern="^[1-9]+\d*$"
            onChange={(e) =>
              setFormData({ ...formData, userNum: e.target.value })
            }
          />

          <Button
            color="secondary"
            variant="shadow"
            type="submit"
            className="w-full"
          >
            <FiDownload className="h-4 w-4" />
            Download Key
          </Button>
        </form>
      </div>
    </div>
  );
}
