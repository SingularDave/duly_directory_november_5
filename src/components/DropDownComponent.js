import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownItem from "react-bootstrap/DropdownItem";


export default function DropDownComponent(props) {
    if (props.options === null) {
        return null;
    } else {
        return (
            <div key={props.options}>
                <Dropdown className="mb-2 ml-5">
                    <Dropdown.Toggle>{props.placeholder}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.options.map((item) => {
                                return (
                                    <DropdownItem onClick={() => props.onChange(item)} key={item}>{item}</DropdownItem>
                                )
                            }
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}



