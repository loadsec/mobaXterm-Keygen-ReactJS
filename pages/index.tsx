import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import useIndex, { LICENSE_TYPES } from "@/hooks/useIndex";

export default function IndexPage() {
  const { formData, setFormData, handleSubmit } = useIndex();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-md mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          MobaXterm Keygen
        </h1>

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
            Download Key
          </Button>
        </form>
      </div>
    </div>
  );
}
