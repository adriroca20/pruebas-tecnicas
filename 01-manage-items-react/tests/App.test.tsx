import React from "react"
import{describe, test, expect} from "vitest"
import { render, screen } from "@testing-library/react"
import {userEvent} from "@testing-library/user-event"
import App from "../src/App"

describe('<App/>', ()=>{
    // test("Should work", ()=>{
    //     render(<App/>)
    // })
    test("Should add items and remove them",async ()=>{
        const user = userEvent.setup()
        render(<App/>)
        //Buscar el input
        const input = screen.getByRole("textbox")
        expect(input).toBeDefined()
        
        //Buscar el form
        const form = screen.getByRole("form")
        expect(form).toBeDefined()

        //Buscar el button
        const button = form.querySelector("button") 
        expect(button).toBeDefined()

        await user.type(input,"Adrian")
        await user.click(button!)

        //Asegurar que el elemento se ha agregado
        const list = screen.getByRole("list")
        expect(list).toBeDefined()

        expect(list.childNodes.length).toBeGreaterThan(0)
    })
})