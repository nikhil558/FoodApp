import { render, act, screen, fireEvent } from "@testing-library/react";
import Mock_Data from "../__tests__/Mocks/ResturentDetailsMock.json"
import ResturentDetails from "../components/ResturentDetails";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import CartInfo from "../../utils/CartInfo";
import Header from "../components/Header";
import "@testing-library/jest-dom"
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(Mock_Data)
        }
    })
})

it('should check the recommended items', async () => {
    await act(async () => {
        render(
            <Provider store={CartInfo}>
                <ResturentDetails/> 
            </Provider>
        )
    })

    const category= screen.getByText(/Recommended/)
    fireEvent.click(category)

    const items = screen.getAllByTestId("itemId");

    expect(items.length).toBe(20)


});

it('should check the cart items is added in cart  when adding the items', async () => {
    await act(async() =>{
        render(
            <BrowserRouter>
                <Provider store={CartInfo}>
                    <Header/>
                    <ResturentDetails/> 
                </Provider>
            </BrowserRouter>
                 
        )
    })

    const category= screen.getByText(/Recommended/)
    fireEvent.click(category)

    const items = screen.getAllByTestId("itemId");
    const addBtns = screen.getAllByRole("button", {name:"ADD"})

    await act(async () => {
        fireEvent.click(addBtns[0]);
    });

    const headerCart = screen.getByText("Cart (1)")


    expect(headerCart).toBeInTheDocument()


});

it('should check the cart items is increased in header when adding the items', async () => {
    await act(async() =>{
        render(
            <BrowserRouter>
                <Provider store={CartInfo}>
                    <Header/>
                    <ResturentDetails/> 
                    <Cart/>
                </Provider>
            </BrowserRouter>
                 
        )
    })

    const category= screen.getByText(/Recommended/)
    fireEvent.click(category)

    const items = screen.getAllByTestId("itemId");
    const addBtns = screen.getAllByRole("button", {name:"ADD"})

    await act(async () => {
        fireEvent.click(addBtns[0]);
    });


    expect(items.length).toBe(21)

});

it('should clear the cart items when clear button is clicked', async () => {
    await act(async() =>{
        render(
            <BrowserRouter>
                <Provider store={CartInfo}>
                    <Header/>
                    <ResturentDetails/> 
                    <Cart/>
                </Provider>
            </BrowserRouter>
                 
        )
    })

    const category= screen.getByText(/Recommended/)
    fireEvent.click(category)

    const items = screen.getAllByTestId("itemId");
    const addBtns = screen.getAllByRole("button", {name:"ADD"})

    await act(async () => {
        fireEvent.click(addBtns[0]);
    });

    const clearBtn = screen.getByRole("button", {name:"Clear Cart"})
    
    fireEvent.click(clearBtn)

    const emptyText = screen.getByText("Cart is empty")
    console.log(items)
    expect(items.length).toBe(20)
    expect(emptyText).toBeInTheDocument()

});