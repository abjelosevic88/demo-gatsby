import React from 'react'
import Static from './staticItem'
import Dropdown from './dropdownItem'

export default () => {
    return (
        <nav className="h-full flex items-center">
            <Dropdown title="MEN">
                {"Men wrapper"}
            </Dropdown>
            <Dropdown title="WOMEN">
                {"Women wrapper"}
            </Dropdown>
            <Dropdown title="ACCESSORIES">
                {"ACCESSORIES wrapper"}
            </Dropdown>
            <Dropdown title="BEST SELLERS">
                {"BEST SELLERS wrapper"}
            </Dropdown>
        </nav>
    )
}
