import axios from "axios";

import { render, screen } from "@testing-library/react";

jest.mock("axios");

describe("Check home screen",()=>{

	it("has an input for email",()=>{
		render(<Register/>);
		const input = screen.getByTestId("email");
		expect(input).toBeInTheDocument();

		expect(input).toHaveAttribute("type", "text");
	});

    it("has an input for password",()=>{
		render(<Register/>);
		const input = screen.getByTestId("password");
		expect(input).toBeInTheDocument();

		expect(input).toHaveAttribute("type", "password");
	});
    
})