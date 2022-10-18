import renderer from "react-test-renderer";
import Header from "../components/Header";
import { render, screen } from "@testing-library/react";
test("header should render title", () => {
  render(<Header title="my blog" />);
  const headerNav = screen.getByText(/my blog/i);
  expect(headerNav).toHaveTextContent(/my blog/i);
});
test("header should render li", () => {
  render(<Header title="my blog" />);
  const li = screen.getAllByRole("listitem");
  expect(li.length).toBe(3);
});
