import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  LogoHorizontal,
  LogoHorizontalSmall,
  LogoHorizontalWhite,
  LogoIsotipo,
} from "../src/brand";

const BrandGallery = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        padding: "32px",
      }}
    >
      {/* LogoHorizontal */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <span
          style={{
            fontSize: "12px",
            color: "#6b7280",
            fontFamily: "monospace",
          }}
        >
          LogoHorizontal — fondo claro
        </span>
        <div
          style={{
            padding: "24px",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            background: "#fafafa",
          }}
        >
          <LogoHorizontal />
        </div>
        <span
          style={{
            fontSize: "12px",
            color: "#6b7280",
            fontFamily: "monospace",
          }}
        >
          LogoHorizontal — fondo oscuro
        </span>
        <div
          style={{
            padding: "24px",
            border: "1px solid #374151",
            borderRadius: "12px",
            background: "#111827",
          }}
        >
          <LogoHorizontal textColor="#fff" />
        </div>
      </div>

      {/* LogoHorizontalSmall */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <span
          style={{
            fontSize: "12px",
            color: "#6b7280",
            fontFamily: "monospace",
          }}
        >
          LogoHorizontalSmall — fondo claro
        </span>
        <div
          style={{
            padding: "16px",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            background: "#fafafa",
          }}
        >
          <LogoHorizontalSmall />
        </div>
        <span
          style={{
            fontSize: "12px",
            color: "#6b7280",
            fontFamily: "monospace",
          }}
        >
          LogoHorizontalSmall — fondo oscuro
        </span>
        <div
          style={{
            padding: "16px",
            border: "1px solid #374151",
            borderRadius: "12px",
            background: "#111827",
          }}
        >
          <LogoHorizontalSmall textColor="#fff" />
        </div>
      </div>

      {/* LogoHorizontalWhite */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <span
          style={{
            fontSize: "12px",
            color: "#6b7280",
            fontFamily: "monospace",
          }}
        >
          LogoHorizontalWhite — siempre blanco, para fondos de marca
        </span>
        <div
          style={{
            padding: "24px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #E40066, #544997)",
          }}
        >
          <LogoHorizontalWhite />
        </div>
      </div>

      {/* LogoIsotipo */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <span
          style={{
            fontSize: "12px",
            color: "#6b7280",
            fontFamily: "monospace",
          }}
        >
          LogoIsotipo — símbolo solo (mobile / favicon / avatar)
        </span>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              padding: "16px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              background: "#fafafa",
            }}
          >
            <LogoIsotipo width={56} height={56} />
          </div>
          <div
            style={{
              padding: "16px",
              border: "1px solid #374151",
              borderRadius: "12px",
              background: "#111827",
            }}
          >
            <LogoIsotipo width={56} height={56} />
          </div>
          <div
            style={{
              padding: "8px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              background: "#fafafa",
            }}
          >
            <LogoIsotipo width={32} height={32} />
          </div>
          <div
            style={{
              padding: "8px",
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              background: "#fafafa",
            }}
          >
            <LogoIsotipo width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta<typeof BrandGallery> = {
  title: "Brand/Gallery",
  component: BrandGallery,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Assets de marca Playtopia — logos e isotipos.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BrandGallery>;

export const AllAssets: Story = {};
