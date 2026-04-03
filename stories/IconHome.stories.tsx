import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { IconHome } from "../src/react";

const meta: Meta<typeof IconHome> = {
  title: "Icons/IconHome",
  component: IconHome,
  argTypes: {
    size: {
      control: { type: "range", min: 12, max: 96, step: 4 },
      defaultValue: 24,
    },
    color: { control: "color" },
    width: { control: "number" },
    height: { control: "number" },
  },
  parameters: {
    docs: {
      description: {
        component: "Icon de inicio / home. Click para copiar el import.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconHome>;

export const Default: Story = {
  args: {},
};

export const CustomSize: Story = {
  args: {
    size: 48,
    color: "#ab0c0c"
  },
};

export const CustomColor: Story = {
  args: {
    size: 32,
    color: "#6366f1",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      {[16, 24, 32, 48, 64].map((s) => (
        <div key={s} style={{ textAlign: "center" }}>
          <IconHome size={s} />
          <div style={{ fontSize: "11px", color: "#999", marginTop: 4 }}>
            {s}px
          </div>
        </div>
      ))}
    </div>
  ),
};
