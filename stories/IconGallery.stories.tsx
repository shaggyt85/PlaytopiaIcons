import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "../src/react";

// ─── Catálogo completo de iconos ─────────────────────────

const allIcons = Object.entries(Icons).filter(
  ([, value]) => typeof value === "function",
);

const IconGallery = ({
  size,
  color,
  search,
}: {
  size: number;
  color: string;
  search: string;
}) => {
  const filtered = allIcons.filter(([name]) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
        gap: "24px",
        padding: "24px",
        width: "100%",
        maxWidth: "900px",
      }}
    >
      {filtered.map(([name, Icon]) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            background: "#fafafa",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          title={name}
          onClick={() => navigator.clipboard.writeText(`<${name} />`)}
        >
          <Icon size={size} color={color} />
          <span
            style={{
              fontSize: "11px",
              color: "#6b7280",
              textAlign: "center",
              wordBreak: "break-all",
              fontFamily: "monospace",
            }}
          >
            {name}
          </span>
        </div>
      ))}
      {filtered.length === 0 && (
        <p
          style={{
            color: "#9ca3af",
            gridColumn: "1 / -1",
            textAlign: "center",
          }}
        >
          No icons found matching "{search}"
        </p>
      )}
    </div>
  );
};

const meta: Meta<typeof IconGallery> = {
  title: "Icons/Gallery",
  component: IconGallery,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    size: {
      control: { type: "range", min: 12, max: 96, step: 4 },
      defaultValue: 24,
    },
    color: { control: "color", defaultValue: "#222222" },
    search: { control: "text", defaultValue: "" },
  },
};

export default meta;
type Story = StoryObj<typeof IconGallery>;

export const AllIcons: Story = {
  args: {
    size: 24,
    color: "#222222",
    search: "",
  },
};

export const Large: Story = {
  args: {
    size: 48,
    color: "#222222",
    search: "",
  },
};

export const Colored: Story = {
  args: {
    size: 32,
    color: "#6366f1",
    search: "",
  },
};
