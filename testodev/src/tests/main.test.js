import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import React from "react";
import App from "../App";


describe("emoji search testleri", () => {
    beforeEach(() => {
        render(<App />)
    })
    test("header yüklendi mi?", () => {
        const text = screen.getByTestId('header')
        expect(text).toBeInTheDocument()
    })
    test("emoji listesi render edildi mi?", () => {
        const emoji = screen.getAllByTestId('emoji')
        expect(emoji.length).toEqual(20)
    })
    test("filtreleme doğru yapılıyor mu?", () => {
        const input = screen.getByTestId('input')
        userEvent.type(input, "Joy")
        expect(screen.getByText("Joy")).toBeInTheDocument()
    })
    test("emojiye tıklandığında kopyalıyor mu?", () => {
        const emoji = screen.getAllByTestId('emoji')
        expect(emoji[1]).toHaveAttribute("data-clipboard-text")
    })
})

