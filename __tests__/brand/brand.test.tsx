import * as React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import {
  LogoHorizontal,
  LogoHorizontalSmall,
  LogoHorizontalWhite,
  LogoIsotipo,
} from "../../src/brand";

const brandComponents = [
  {
    name: "LogoHorizontal",
    Component: LogoHorizontal,
    defaultWidth: 233,
    defaultHeight: 116,
    hasTextColor: true,
  },
  {
    name: "LogoHorizontalSmall",
    Component: LogoHorizontalSmall,
    defaultWidth: 244,
    defaultHeight: 28,
    hasTextColor: true,
  },
  {
    name: "LogoHorizontalWhite",
    Component: LogoHorizontalWhite,
    defaultWidth: 233,
    defaultHeight: 116,
    hasTextColor: false,
  },
  {
    name: "LogoIsotipo",
    Component: LogoIsotipo,
    defaultWidth: 56,
    defaultHeight: 56,
    hasTextColor: false,
  },
];

describe("Brand assets", () => {
  describe.each(brandComponents)(
    "$name",
    ({ name, Component, defaultWidth, defaultHeight, hasTextColor }) => {
      it("renderiza sin errores", () => {
        const { container } = render(<Component />);
        const svg = container.querySelector("svg");
        expect(svg).toBeTruthy();
      });

      it("tiene viewBox", () => {
        const { container } = render(<Component />);
        const svg = container.querySelector("svg");
        expect(svg?.getAttribute("viewBox")).toBeTruthy();
      });

      it(`tiene dimensiones por defecto ${defaultWidth}x${defaultHeight}`, () => {
        const { container } = render(<Component />);
        const svg = container.querySelector("svg");
        expect(svg?.getAttribute("width")).toBe(String(defaultWidth));
        expect(svg?.getAttribute("height")).toBe(String(defaultHeight));
      });

      it("acepta props width y height personalizadas", () => {
        const { container } = render(<Component width={100} height={50} />);
        const svg = container.querySelector("svg");
        expect(svg?.getAttribute("width")).toBe("100");
        expect(svg?.getAttribute("height")).toBe("50");
      });

      it("acepta className", () => {
        const { container } = render(<Component className="test-class" />);
        const svg = container.querySelector("svg");
        expect(svg?.getAttribute("class")).toBe("test-class");
      });

      it("tiene role=img y aria-label", () => {
        const { container } = render(<Component />);
        const svg = container.querySelector("svg");
        expect(svg?.getAttribute("role")).toBe("img");
        expect(svg?.getAttribute("aria-label")).toBeTruthy();
      });

      if (hasTextColor) {
        it("acepta prop textColor", () => {
          const { container } = render(
            <Component
              {...({ textColor: "#ff0000" } as React.ComponentProps<
                typeof Component
              >)}
            />,
          );
          const svg = container.querySelector("svg");
          expect(svg).toBeTruthy();
        });
      }
    },
  );
});
