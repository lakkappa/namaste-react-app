import { render, screen } from "@testing-library/react";
import About from "../components/About";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";

describe("All About Component test cases:", () => {
    it('Should render About component', () => {
        render(<About />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it('Should button is there or not on About component', () => {
        render(<About />);
        const btn = screen.getByRole("button");
        expect(btn).toBeInTheDocument();
    });

    it('Should check About component heading text is there or not', () => {
        render(<About />);
        const checkHeading = screen.getByText('This is About Page');
        expect(checkHeading).toBeInTheDocument();
    });

    it('Should check all input elements on About component', () => {
        render(<About />);
        const inputElement = screen.getAllByRole("textbox");
        expect(inputElement.length).toBe(2);
    })
})




