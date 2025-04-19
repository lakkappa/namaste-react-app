import { render, screen } from "@testing-library/react"
import Header from "../components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import { BrowserRouter } from "react-router-dom";

it('Should there cart option on my header component', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const header = screen.getByText(/Cart/);
    expect(header).toBeInTheDocument();
})