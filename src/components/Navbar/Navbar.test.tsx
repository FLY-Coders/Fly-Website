import { render, screen } from "@testing-library/react";
import NavBar from "./Navbar";

describe("Verificaç~ao do conteúdo da navbar", () => {
    test("Verificar se o navlink está exibindo o nome corretamente", () => {
        render(<NavBar />);

        const Navlink = screen.getByText("About Us");
        expect(Navlink).toBeInTheDocument();
    });

    test("Verificar se o navlink está exibindo o nome corretamente", () => {
        render(<NavBar />);

        const Navlink = screen.getByText("Projects");
        expect(Navlink).toBeInTheDocument();
    });
    
    test("Verificar se o navlink está exibindo o nome corretamente", () => {
        render(<NavBar />);

        const Navlink = screen.getByText("Our Team");
        expect(Navlink).toBeInTheDocument();
    });

    
});
