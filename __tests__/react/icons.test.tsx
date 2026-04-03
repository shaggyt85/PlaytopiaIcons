import * as React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import * as ReactIcons from "../../src/react";

// Test dinámico: itera sobre todos los iconos exportados
const iconEntries = Object.entries(ReactIcons).filter(
  ([, value]) => typeof value === "function",
);

describe("React Icons", () => {
  it("exporta al menos un icono", () => {
    expect(iconEntries.length).toBeGreaterThan(0);
  });

  describe.each(iconEntries)("%s", (name, Icon) => {
    it("renderiza sin errores", () => {
      const { container } = render(<Icon />);
      const svg = container.querySelector("svg");
      expect(svg).toBeTruthy();
    });

    it("tiene viewBox", () => {
      const { container } = render(<Icon />);
      const svg = container.querySelector("svg");
      expect(svg?.getAttribute("viewBox")).toBeTruthy();
    });

    it("acepta prop size", () => {
      const { container } = render(<Icon size={48} />);
      const svg = container.querySelector("svg");
      expect(svg?.getAttribute("width")).toBe("48");
      expect(svg?.getAttribute("height")).toBe("48");
    });

    it("acepta props personalizadas", () => {
      const { container } = render(
        <Icon data-testid="icon" className="custom-class" />,
      );
      const svg = container.querySelector("svg");
      expect(svg?.getAttribute("data-testid")).toBe("icon");
      expect(svg?.getAttribute("class")).toBe("custom-class");
    });

    it("snapshot", () => {
      const { container } = render(<Icon />);
      expect(container.innerHTML).toMatchSnapshot();
    });
  });
});
