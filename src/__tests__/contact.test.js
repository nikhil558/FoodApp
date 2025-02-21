import Contact from "../components/Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
    test("Should load heading inside contact component", ()=>{
        render(<Contact/>);
    
        const heading=screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument();
    })
    
    test("Should load button inside Contact component", ()=>{
        render(<Contact/>)
    
        const button= screen.getByText("Submit")
    
        expect(button).toBeInTheDocument
    })
    
    it('Should load input inside Contact component', () => {
        render(<Contact/>)
    
        const input= screen.getByPlaceholderText("Name")
    
        expect(input).toBeInTheDocument()
    });
    
    it('Should load 2 inputs inside Contact component', () => {
        render(<Contact/>)
    
        const inputs= screen.getAllByRole("textbox")
    
        expect(inputs.length).toBe(2)
    });

})

