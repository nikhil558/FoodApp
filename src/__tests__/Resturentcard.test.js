import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import Resturentcard from "../components/Resturentcard";
import "@testing-library/jest-dom"
import Mock_Data from "./Mocks/ResturentcardMock.json"
import CartInfo from "../../utils/CartInfo";
import { withPromotedResturent } from "../components/Resturentcard";


it('Should render resturentcard component with props data ', () => {
    render(<BrowserRouter>
        <Provider store={CartInfo}>
            <Resturentcard resCard={Mock_Data}/>
        </Provider>
    </BrowserRouter>)
    const NameOfRes= screen.getByText("Subway")
    expect(NameOfRes).toBeInTheDocument()
});

it('Should render resturentcard component with promoted label', () => {
    const Promoted = withPromotedResturent(Resturentcard)
    render(<BrowserRouter>
        <Provider store={CartInfo}>
            <Promoted resCard={Mock_Data} />
        </Provider>
    </BrowserRouter>)
    const NameOfRes= screen.getByText("Subway")
    expect(NameOfRes).toBeInTheDocument()
});