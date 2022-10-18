import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../components/Footer";
function MockFooter() {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
}
test("footer should render", () => {
  render(<MockFooter />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
