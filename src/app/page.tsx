import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Tooltip } from "@/components/Tooltip/Tooltip";

export default function Home() {
  return (
    <main className="min-h-screen p-12 bg-gray-500/10 flex flex-col gap-10 max-w-xl mx-auto">
      {/* Badges Section */}
      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
          Badges
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          <Badge label="Primary" />
          <Badge label="Secondary" variant="danger" />
          <Badge label="Danger" variant="info" />
          <Badge label="Info" variant="secondary" />
        </div>
      </section>

      {/* Buttons Section */}
      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
          Buttons & Tooltip
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <Tooltip content="Quick build & push" position="top">
            <Button label="Deploy" variant="primary" />
          </Tooltip>
          <Button label="Cancel" variant="secondary" />
          <Button label="Remove" variant="danger" />
          <Button label="Saving..." variant="primary" isLoading />
        </div>
      </section>

      {/* Inputs Section */}
      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500">
          Form Controls
        </h2>
        <Input
          label="Full Name"
          placeholder="Mojtaba"
          helperText="Your profile display name"
        />
        <Input
          label="Server Port"
          defaultValue="3000"
          error="Port 3000 is already in use by Vite/Next.js"
        />
      </section>
    </main>
  );
}
