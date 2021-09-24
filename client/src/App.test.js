import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';



  describe("App", () => {
    it("rendets App", async () => {
      render(<App/>);
      screen.debug();
      fireEvent.change(screen.getByRole("dataContainer"), {
        target: {data: []}
      })
      // expect(screen.getByText("Learn")).toBeInTheDocument();
      // expect(screen.getByRole("dataContainer")).toBeInTheDocument();
      // expect(screen.getByRole("dataContainer")).toHaveClass("container");
      // expect(screen.getByRole("dataContainer")).not.toHaveClass("item");
      // expect(screen.getByRole("dataContainer")).not.toHaveAttribute("id");
      expect(screen.queryByRole("item")).toBeNull();


      //??
      //await waitFor(() => expect(screen.findAllByRole("item")).toBeInTheDocument()); 
      
    })
  });
