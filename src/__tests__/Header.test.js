import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router";
import Header from "../components/Header"
import CartInfo from "../../utils/CartInfo";
import "@testing-library/jest-dom"

test('Should render header component with a login button', () => {
    render(
           <BrowserRouter>
            <Provider store={CartInfo}>
                <Header/>
            </Provider>
           </BrowserRouter>     
        )

    const Login= screen.getByRole("button",{name:"Login"})
    // const Login = screen.getByText("Login")
    expect(Login).toBeInTheDocument()
});

test('Should render header component with a cart item 0', () => {
    render(
           <BrowserRouter>
            <Provider store={CartInfo}>
                <Header/>
            </Provider>
           </BrowserRouter>     
        )

    const cart = screen.getByText("Cart (0)")
    expect(cart).toBeInTheDocument()
});

test('Should render header component with a cart item', () => {
    render(
           <BrowserRouter>
            <Provider store={CartInfo}>
                <Header/>
            </Provider>
           </BrowserRouter>     
        )

    const cart = screen.getByText(/Cart/)
    expect(cart).toBeInTheDocument()
});

test('Should render header component with a logout button when login button clicked', () => {
    render(
           <BrowserRouter>
            <Provider store={CartInfo}>
                <Header/>
            </Provider>
           </BrowserRouter>     
        )

    const Login= screen.getByRole("button",{name:"Login"})
    fireEvent.click(Login)

    const Logout = screen.getByRole("button", {name:"Logout"})
    expect(Logout).toBeInTheDocument()
});

test('Should render header component with a login button when Logout button clicked', () => {
    render(
           <BrowserRouter>
            <Provider store={CartInfo}>
                <Header/>
            </Provider>
           </BrowserRouter>     
        )

    const Login= screen.getByRole("button",{name:"Login"})
    fireEvent.click(Login)

    const Logout = screen.getByRole("button", {name:"Logout"})
    fireEvent.click(Logout)
    expect(Login).toBeInTheDocument()
});