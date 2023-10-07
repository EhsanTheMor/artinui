import { render } from "@testing-library/react";
import App from "./components/App";

test("first test", () => {
    render(<App />);
    expect(true).toBeTruthy();
});
