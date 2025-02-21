import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import "@testing-library/jest-dom";
import Mock_Data from "../__tests__/Mocks/ResturentsMock.json";
import { Provider } from "react-redux";
import CartInfo from "../../utils/CartInfo";
import { BrowserRouter } from "react-router-dom"; // Correct import for BrowserRouter

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(Mock_Data)
    });
});

it('Should render the body component with search', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={CartInfo}>
                    <Body />
                </Provider>
            </BrowserRouter>
        );
    });
    const Cardsbefore = screen.getAllByTestId("resCard");
    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("SearchInput");

    fireEvent.change(searchInput, { target: { value: "p" } });
    fireEvent.click(searchBtn);

    await waitFor(() => {
        const Cards = screen.getAllByTestId("resCard");
        expect(Cards.length).toBe(3);
    });
});

it('Should filter the Resturents when clicking filter button', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Provider store={CartInfo}>
                    <Body />
                </Provider>
            </BrowserRouter>
        );
    });
    
    const filterBtn = screen.getByRole("button", {name:"Top Rated Resturents"})
    fireEvent.click(filterBtn)
    const cards=screen.getAllByTestId("resCard")
    expect(cards.length).toBe(4)

});