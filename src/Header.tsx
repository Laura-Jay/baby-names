import { useState } from "react"

export default function Header(): JSX.Element {

// function handleChange(event: React.ChangeEvent<HTMLInputElement>){
//  setSearchTerm(event.target.value)
// }

return (
    <>
    <nav className="navbar">
        <h2 className="navbar--title">Baby Names</h2>
        <p> <strong>Search:</strong>
        </p>
        <input 
        type="text"
        placeholder="Name"
        className="navbar--search"
        />
    </nav>
    </>
)
}