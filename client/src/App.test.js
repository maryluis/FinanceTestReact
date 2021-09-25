import React from "react";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

  describe("App", () => {
    it("rendets App", () => {
      render(<App/>);
      screen.debug();
      // fireEvent.change(screen.getByDisplayValue("dataContainer"), {
      //   target: {data: []}
      // })
      // expect(screen.getByRole("dataContainer")).toBeInTheDocument();
      // expect(screen.getByRole("dataContainer")).toHaveClass("container");
      // expect(screen.getByRole("dataContainer")).not.toHaveClass("item");
    })
  });
