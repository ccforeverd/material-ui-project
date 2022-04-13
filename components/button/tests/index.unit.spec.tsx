import React from "react";
import sinon, { SinonStub } from "sinon";
// @ts-ignore
import faker from "faker";
import { render, cleanup } from "@testing-library/react";
import { Button } from "../index";
import { ThemeProvider, Button as MuiButton } from "@mui/material";
import { theme } from "../../../theme";

const sandbox = sinon.createSandbox();
const {
  lorem: { word },
} = faker;

describe("button Unit Tests", () => {
  afterEach(() => {
    sandbox.verifyAndRestore();
    cleanup();
  });

  it("should render", () => {
    // Arrange
    sandbox.spy(React, "createElement");

    // Act
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button color="primary" name={word()} />
      </ThemeProvider>
    );

    // Assert
    expect(container.querySelector("button")).toBeInTheDocument();
    expect((React.createElement as SinonStub).calledWith(MuiButton)).toBe(true);
  });
});
