import {render, screen} from "@testing-library/react"
import Counter from "./Counter"

test("render counter",()=>{
    render(<Counter/>);
    const divElement= screen.getByText("Counter");
    expect(divElement).toBeInTheDocument();
})