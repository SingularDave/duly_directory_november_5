import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DropdownComponent from "components/DropDownComponent";
import Button from "react-bootstrap/Button";
import EmployeeCard from "./EmployeeCard";
import {all_providers} from "../pages/api/employees";

export const config = {
    runtime: 'experimental-edge',
}

export default function SearchSection(props) {
    const {all_providers} = props;
    const {
        list_of_specialties
    } = all_providers

    const [Dropdown1, setDropdown1] = useState({
        placeholder: "Specialty",
        options: list_of_specialties,
        defaultValue: '',
        value: ''
    });
    const [Dropdown2, setDropdown2] = useState({
        placeholder: "Sub-Specialty",
        options: null,
        defaultValue: '',
        value: ''
    });
    const [Dropdown3, setDropdown3] = useState({
        placeholder: "Procedures",
        options: null,
        defaultValue: '',
        value: ''
    });
    const [Dropdown4, setDropdown4] = useState({
        placeholder: "Body Region Specialization",
        options: null,
        defaultValue: '',
        value: ''
    });
    const [Dropdown5, setDropdown5] = useState({
        placeholder: "Location",
        options: null,
        defaultValue: '',
        value: ''
    });
    const DropdownList = [Dropdown1, Dropdown2, Dropdown3, Dropdown4, Dropdown5];
    const [SelectedSpecialty, setSelectedSpecialty] = useState(null);
    const [SelectedProviders, setSelectedProviders] = useState(null);
    const [SearchFoundNone, setSearchFoundNone] = useState(false);

    useEffect(() => {
        // If Dropdown3.options are empty, then set Dropdown3.options to null.
        if (Dropdown3.options !== null && Dropdown3.options.length === 0) {
            setDropdown3({
                ...Dropdown3,
                options: null
            })
        }
    })


    const onChangeDropdown1 = (value) => {
        setSelectedProviders(null);
        setSearchFoundNone(false);
        if (value === list_of_specialties[0]) {
            setDropdown1({
                ...Dropdown1,
                value: value,
                placeholder: value
            });
            setDropdown2({
                placeholder: "Sub-Specialty (Optional)",
                options: all_providers.non_surgical_orthopedist.sub_specialty,
                defaultValue: "Sports Medicine",
                value: "Sports Medicine"
            });
            setDropdown3({
                placeholder: "Procedures (Optional)",
                options: all_providers.non_surgical_orthopedist.procedure,
                defaultValue: '',
                value: ''
            });
            setDropdown5({
                placeholder: "Location (Optional)",
                options: all_providers.non_surgical_orthopedist.location,
                defaultValue: '',
                value: ''
            });
            setDropdown4({
                placeholder: "Body Region Specialization (Optional)",
                options: null,
                defaultValue: '',
                value: ''
            });
            setSelectedSpecialty("non_surgical_orthopedist")
        } else if (value === list_of_specialties[1]) {
            setDropdown1({
                ...Dropdown1,
                value: value,
                placeholder: value
            });
            setDropdown2({
                placeholder: "Sub-Specialty (Optional)",
                options: all_providers.surgical_orthopedist.sub_specialty,
                defaultValue: '',
                value: ''
            });
            setDropdown3({
                placeholder: "Procedures (Optional)",
                options: all_providers.surgical_orthopedist.procedure,
                defaultValue: '',
                value: ''
            });
            setDropdown4({
                placeholder: "Body Region Specialization (Optional)",
                options: all_providers.surgical_orthopedist.body_parts,
                defaultValue: '',
                value: ''
            });
            setDropdown5({
                placeholder: "Location (Optional)",
                options: all_providers.surgical_orthopedist.location,
                defaultValue: '',
                value: ''
            });
            setSelectedSpecialty("surgical_orthopedist")
        } else if (value === list_of_specialties[2]) {
            setDropdown1({
                ...Dropdown1,
                value: value,
                placeholder: value
            });
            setDropdown2({
                placeholder: "Sub-Specialty (Optional)",
                options: all_providers.non_surgical_spine.sub_specialty,
                defaultValue: '',
                value: ''
            });
            setDropdown3({
                placeholder: "Procedures (Optional)",
                options: all_providers.non_surgical_spine.procedure,
                defaultValue: '',
                value: ''
            });
            setDropdown5({
                placeholder: "Location (Optional)",
                options: all_providers.non_surgical_spine.location,
                defaultValue: '',
                value: ''
            });
            setDropdown4({
                placeholder: "Body Region Specialization (Optional)",
                options: null,
                defaultValue: '',
                value: ''
            });
            setSelectedSpecialty("non_surgical_spine")
        } else if (value === list_of_specialties[3]) {
            setDropdown1({
                ...Dropdown1,
                value: value,
                placeholder: value
            });
            setDropdown2({
                placeholder: "Sub-Specialty (Optional)",
                options: all_providers.surgical_spine.sub_specialty,
                defaultValue: '',
                value: ''
            });
            setDropdown3({
                placeholder: "Procedures (Optional)",
                options: all_providers.surgical_spine.procedure,
                defaultValue: '',
                value: ''
            });
            setDropdown4({
                placeholder: "Body Region Specialization (Optional)",
                options: all_providers.surgical_spine.body_parts,
                defaultValue: '',
                value: ''
            });
            setDropdown5({
                placeholder: "Location (Optional)",
                options: all_providers.surgical_spine.location,
                defaultValue: '',
                value: ''
            });
            setSelectedSpecialty("surgical_spine")
        } else if (value === list_of_specialties[4]) {
            setDropdown1({
                ...Dropdown1,
                value: value,
                placeholder: value
            });
            setDropdown2({
                placeholder: "Sub-Specialty (Optional)",
                options: all_providers.non_surgical_cardiologist.sub_specialty,
                defaultValue: '',
                value: ''
            });
            setDropdown3({
                placeholder: "Procedures (Optional)",
                options: all_providers.non_surgical_cardiologist.procedure,
                defaultValue: '',
                value: ''
            });
            setDropdown5({
                placeholder: "Location (Optional)",
                options: all_providers.non_surgical_cardiologist.location,
                defaultValue: '',
                value: ''
            });
            setDropdown4({
                placeholder: "Body Region Specialization (Optional)",
                options: null,
                defaultValue: '',
                value: ''
            });
            setSelectedSpecialty("non_surgical_cardiologist")
        } else if (value === list_of_specialties[5]) {
            setDropdown1({
                ...Dropdown1,
                value: value,
                placeholder: value
            });
            setDropdown2({
                placeholder: "Sub-Specialty (Optional)",
                options: all_providers.surgical_cardiologist.sub_specialty,
                defaultValue: '',
                value: ''
            });
            setDropdown3({
                placeholder: "Procedures (Optional)",
                options: all_providers.surgical_cardiologist.procedure,
                defaultValue: '',
                value: ''
            });
            setDropdown4({
                placeholder: "Body Region Specialization (Optional)",
                options: all_providers.surgical_cardiologist.body_parts,
                defaultValue: '',
                value: ''
            });
            setDropdown5({
                placeholder: "Location (Optional)",
                options: all_providers.surgical_cardiologist.location,
                defaultValue: '',
                value: ''
            });
            setSelectedSpecialty("surgical_cardiologist")
        } else if (value === list_of_specialties[6]) {
            setDropdown1({
                ...Dropdown1,
                value: value,
                placeholder: value
            });
            setDropdown2({
                placeholder: "Sub-Specialty (Optional)",
                options: all_providers.physical_therapist.sub_specialty,
                defaultValue: '',
                value: ''
            });
            setDropdown3({
                placeholder: "Procedures (Optional)",
                options: all_providers.physical_therapist.procedure,
                defaultValue: '',
                value: ''
            });
            setDropdown4({
                placeholder: "Body Region Specialization (Optional)",
                options: null,
                defaultValue: '',
                value: ''
            });
            setDropdown5({
                placeholder: "Location (Optional)",
                options: all_providers.physical_therapist.location,
                defaultValue: '',
                value: ''
            });
            setSelectedSpecialty("physical_therapist")
        } else if (value === list_of_specialties[7]) {
            setDropdown1({
                ...Dropdown1,
                value: value,
                placeholder: value
            });
            setDropdown2({
                placeholder: "Sub-Specialty (Optional)",
                options: all_providers.occupational_therapist.sub_specialty,
                defaultValue: '',
                value: ''
            });
            setDropdown3({
                placeholder: "Procedures (Optional)",
                options: all_providers.occupational_therapist.procedure,
                defaultValue: '',
                value: ''
            });
            setDropdown4({
                placeholder: "Body Region Specialization (Optional)",
                options: null,
                defaultValue: '',
                value: ''
            });
            setDropdown5({
                placeholder: "Location (Optional)",
                options: all_providers.occupational_therapist.location,
                defaultValue: '',
                value: ''
            });
            setSelectedSpecialty("occupational_therapist")
        }
    }

    const handleDropdownChange = (value, dropdown) => {
        if (dropdown === "dropdown2") {
            setDropdown2({
                ...Dropdown2,
                value: value,
                placeholder: value
            });
        } else if (dropdown === "dropdown3") {
            setDropdown3({
                ...Dropdown3,
                value: value,
                placeholder: value
            });
        } else if (dropdown === "dropdown4") {
            setDropdown4({
                ...Dropdown4,
                value: value,
                placeholder: value
            });
        } else if (dropdown === "dropdown5") {
            setDropdown5({
                ...Dropdown5,
                value: value,
                placeholder: value
            });
        }
    }

    // Create onSelect handler. Once an item is selected, set the value of the dropdown to the selected item and make the placeholder the selected item.
    // const handleDropdownSelect = (value, dropdown) => {
    //     if (dropdown === "dropdown2") {
    //         setDropdown2({
    //             ...Dropdown2,
    //             value: value,
    //             placeholder: value
    //         });
    //     } else if (dropdown === "dropdown3") {
    //         setDropdown3({
    //             ...Dropdown3,
    //             value: value,
    //             placeholder: value
    //         });
    //     } else if (dropdown === "dropdown4") {
    //         setDropdown4({
    //             ...Dropdown4,
    //             value: value,
    //             placeholder: value
    //         });
    //     } else if (dropdown === "dropdown5") {
    //         setDropdown5({
    //             ...Dropdown5,
    //             value: value,
    //             placeholder: value
    //         });
    //     }
    // }

    const handleClear = () => {
        setDropdown1({
            placeholder: "Select a Specialty",
            options: list_of_specialties,
            defaultValue: '',
            value: ''
        });
        setDropdown2({
            placeholder: "Sub-Specialty (Optional)",
            options: null,
            defaultValue: '',
            value: ''
        });
        setDropdown3({
            placeholder: "Procedures (Optional)",
            options: null,
            defaultValue: '',
            value: ''
        });
        setDropdown4({
            placeholder: "Body Region Specialization (Optional)",
            options: null,
            defaultValue: '',
            value: ''
        });
        setDropdown5({
            placeholder: "Location (Optional)",
            options: null,
            defaultValue: '',
            value: ''
        });
        setSelectedProviders(null);
        setSearchFoundNone(false);
        console.log("SearchFoundNone set to false");
    }

    // Create function that takes an array of providers and an array of search terms. Iterate through list of providers
    // and return a list of providers who have all the search terms found in provider.attributes.
    const search_for_terms = (list_of_providers, search_terms) => {
        let filtered_providers = [];
        for (let i = 0; i < list_of_providers.length; i++) {
            let provider = list_of_providers[i];
            let found_all_terms = true;
            for (let j = 0; j < search_terms.length; j++) {
                let search_term = search_terms[j];
                if (!provider.attributes.includes(search_term)) {
                    found_all_terms = false;
                    break;
                }
            }
            if (found_all_terms) {
                filtered_providers.push(provider);
            }
        }
        return filtered_providers;

    }


    const handleSearch = () => {
        console.log("Dropdown1.value: " + Dropdown1.value);
        if (Dropdown1.value === '') {
            return;
        }
        let search_terms = [];
        if (Dropdown1.value !== '') {
            search_terms.push(Dropdown1.value);
            console.log("Dropdown1.value is not empty");
        }
        if (Dropdown2.value !== '') {
            search_terms.push(Dropdown2.value);
            console.log("Dropdown2.value is not empty");
        }
        if (Dropdown3.value !== '') {
            search_terms.push(Dropdown3.value);
            console.log("Dropdown3.value is not empty");
        }
        if (Dropdown5.value !== '') {
            search_terms.push(Dropdown5.value);
            console.log("Dropdown5.value is not empty");
        }
        console.log("Search Terms: " + search_terms);
        let selected_providers = [];
        console.log(all_providers.non_surgical_orthopedist.providers);
        if (Dropdown1.value === list_of_specialties[0]) {
            selected_providers = search_for_terms(all_providers.non_surgical_orthopedist.providers, search_terms);
        } else if (Dropdown1.value === list_of_specialties[1]) {
            selected_providers = search_for_terms(all_providers.surgical_orthopedist.providers, search_terms);
        }
        else if (Dropdown1.value === list_of_specialties[2]) {
            selected_providers = search_for_terms(all_providers.non_surgical_spine.providers, search_terms);
        }
        else if (Dropdown1.value === list_of_specialties[3]) {
            selected_providers = search_for_terms(all_providers.surgical_spine.providers, search_terms);
        }
        else if (Dropdown1.value === list_of_specialties[4]) {
            selected_providers = search_for_terms(all_providers.non_surgical_cardiologist.providers, search_terms);
        }
        else if (Dropdown1.value === list_of_specialties[5]) {
            selected_providers = search_for_terms(all_providers.surgical_cardiologist.providers, search_terms);
        }
        else if (Dropdown1.value === list_of_specialties[6]) {
            selected_providers = search_for_terms(all_providers.physical_therapist.providers, search_terms);
        }
        else if (Dropdown1.value === list_of_specialties[7]) {
            selected_providers = search_for_terms(all_providers.occupational_therapist.providers, search_terms);
        }
        if (selected_providers.length === 0) {
            setSearchFoundNone(true);
            console.log("Search found none");
            console.log("SearchFoundNone set to true");
        }
        console.log("Selected Providers: " + selected_providers);
        setSelectedProviders(selected_providers);
    }

    //Create useEffect function to update DOM when SelectedProviders changes.
    useEffect(() => {
        console.log(SelectedProviders);
    }
    , [SelectedProviders]);

    // Create useEffect function to update DOM when SearchFoundNone changes.
    useEffect(() => {
        console.log('SearchFoundNone:' + SearchFoundNone);
    }
    , [SearchFoundNone]);

    return (
        <section className="search-section">
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Card bg="light" border="secondary">
                            <Card.Header>
                                <div className="d-flex justify-content-center mt-3">
                                    <h3 className="text-secondary"> Search Providers</h3>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <DropdownComponent placeholder={Dropdown1.placeholder}
                                                           options={Dropdown1.options}
                                                           defaultValue={Dropdown1.defaultValue}
                                                           onChange={(value) => onChangeDropdown1(value)}
                                                           value={Dropdown1.value}/>
                                        <DropdownComponent placeholder={Dropdown2.placeholder}
                                                           options={Dropdown2.options}
                                                           defaultValue={Dropdown2.defaultValue}
                                                           onChange={(value) => handleDropdownChange(value, "dropdown2")}
                                                           value={Dropdown2.value}/>
                                        <DropdownComponent placeholder={Dropdown3.placeholder}
                                                           options={Dropdown3.options}
                                                           defaultValue={Dropdown3.defaultValue}
                                                           onChange={(value) => handleDropdownChange(value, "dropdown3")}
                                                           value={Dropdown3.value}/>
                                        <DropdownComponent placeholder={Dropdown5.placeholder}
                                                           options={Dropdown5.options}
                                                           defaultValue={Dropdown5.defaultValue}
                                                           onChange={(value) => handleDropdownChange(value, "dropdown5")}
                                                           value={Dropdown5.value}/>
                                        <div className="col text-center">
                                            <Button className="mt-4 btn btn-primary" size={"lg"} onClick={handleSearch}>Search</Button>
                                        </div>
                                        <div className="col text-center">
                                            <Button className="mb-2 mt-2 btn btn-secondary" size={"sm"} onClick={handleClear}>Clear</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <EmployeeCard providers={SelectedProviders} SearchFoundNone={SearchFoundNone}/>
        </section>
    );
}

export async function getStaticProps() {
    return {
        props: {
            all_providers: all_providers
        }
    }
}