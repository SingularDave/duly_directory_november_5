class Staff {
    constructor(first_name, last_name, post_nominal_letters, location, image, website_url) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.post_nominal_letters = post_nominal_letters;
        this.cell_phone_number = "555-555-5555";
        this.location = location;
        this.image = image;
        this.full_name = `${this.first_name} ${this.last_name}, ${this.post_nominal_letters}`;
        this.website_url = website_url;
        this.email = this.get_email_address();
    }

    get_str() {
        return `${this.first_name} ${this.last_name} ${this.post_nominal_letters}`;
    }

    get_repr() {
        return `${this.first_name} ${this.last_name} ${this.post_nominal_letters}`;
    }

    get_email_address() {
        return `${this.first_name[0].toLowerCase()}${this.last_name.toLowerCase()}@duly.com`;
    }
}

class MedicalProvider extends Staff {
    constructor(first_name, last_name, post_nominal_letters, location, image, website_url, specialty) {
        super(first_name, last_name, post_nominal_letters, location, image, website_url);
        this.specialty = specialty;
    }
}


export class NonSurgicalMedicalProvider extends MedicalProvider {
    constructor(first_name, last_name, post_nominal_letters, location, image, website_url, specialty, sub_specialty, procedures) {
        super(first_name, last_name, post_nominal_letters, location, image, website_url, specialty);
        this.sub_specialty = sub_specialty;
        this.procedures = procedures;
        this.attributes = this.get_attributes();
    }

    get_str() {
        return `${this.first_name} ${this.last_name}, ${this.post_nominal_letters}, ${this.specialty}, 
        Sub specialities: ${this.sub_specialty}. Cell phone number: ${this.cell_phone_number}. 
        Locations: ${this.location}.`;
    }

    get_repr() {
        return `${this.first_name} ${this.last_name} ${this.post_nominal_letters} ${this.specialty} 
        ${this.sub_specialty} ${this.cell_phone_number} ${this.location}`;
    }

    get_specialty() {
        return `${this.specialty}`;
    }

    get_sub_specialties() {
        let sub_specialties_string = '';
        for (let sub_specialty of this.sub_specialty) {
            if (this.sub_specialty.indexOf(sub_specialty) === this.sub_specialty.length - 1) {
                sub_specialties_string += sub_specialty;
            } else if (this.sub_specialty.indexOf(sub_specialty) === this.sub_specialty.length - 2) {
                sub_specialties_string += sub_specialty + ' and ';
            } else {
                sub_specialties_string += sub_specialty + ', ';
            }
        }
        return sub_specialties_string;
    }

    get_attributes() {
        return `Name: ${this.first_name} ${this.last_name}, ${this.post_nominal_letters}. Specialty: ${this.specialty}. 
        Sub-specialties: ${this.sub_specialty}. Cell phone number: ${this.cell_phone_number}. 
        Locations: ${this.location}. Procedures: ${this.procedures}.`;
    }

    search_for_terms(search_terms) {
        let search_terms_found = 0;
        for (let search_term of search_terms) {
            if (this.get_attributes().toLowerCase().includes(search_term.toLowerCase())) {
                search_terms_found += 1;
            }
        }
        return search_terms_found === search_terms.length;
    }
}


export class SurgicalMedicalProvider extends MedicalProvider {
    constructor(first_name, last_name, post_nominal_letters, location, image, website_url, specialty, sub_specialty, body_parts,
                surgical_techniques) {
        super(first_name, last_name, post_nominal_letters, location, image, website_url, specialty);
        this.sub_specialty = sub_specialty;
        this.body_parts = body_parts;
        this.surgical_techniques = surgical_techniques;
        this.attributes = this.get_attributes()
    }

    get_str() {
        return `${this.first_name} ${this.last_name}, ${this.post_nominal_letters}, ${this.specialty}, 
        Sub specialities: ${this.sub_specialty}. Body Part Speciality: ${this.body_parts}. 
        Surgical Techniques: ${this.surgical_techniques}. Cell phone number: ${this.cell_phone_number}. 
        Locations: ${this.location}.`;
    }

    get_repr() {
        return `${this.first_name} ${this.last_name} ${this.post_nominal_letters} ${this.specialty} 
        ${this.sub_specialty} ${this.cell_phone_number} ${this.location}`;
    }

    get_sub_specialties() {
        let sub_specialties_string = '';
        for (let sub_specialty of this.sub_specialty) {
            if (this.sub_specialty.indexOf(sub_specialty) === this.sub_specialty.length - 1) {
                sub_specialties_string += sub_specialty;
            } else if (this.sub_specialty.indexOf(sub_specialty) === this.sub_specialty.length - 2) {
                sub_specialties_string += sub_specialty + ' and ';
            } else {
                sub_specialties_string += sub_specialty + ', ';
            }
        }
        return sub_specialties_string;
    }

    get_attributes() {
        return `First Name: ${this.first_name} Last Name: ${this.last_name} 
        Post-Nominal Letters: ${this.post_nominal_letters} 
        Specialty: ${this.specialty} 
        Sub-Specialty: ${this.sub_specialty} 
        Body Parts: ${this.body_parts} 
        Surgical Techniques: ${this.surgical_techniques} 
        Cell Phone Number: ${this.cell_phone_number} Location: ${this.location}`;
    }

    search_for_terms(search_terms) {
        let search_terms_found = 0;
        for (let search_term of search_terms) {
            if (this.get_attributes().toLowerCase().includes(search_term.toLowerCase())) {
                search_terms_found += 1;
            }
        }
        return search_terms_found === search_terms.length;
    }
}


export class PhysicalTherapist extends Staff {
    constructor(first_name, last_name, post_nominal_letters, location, image, website_url, sub_specialty, procedures) {
        super(first_name, last_name, post_nominal_letters, location, image, website_url);
        this.specialty = 'Physical Therapy';
        this.sub_specialty = sub_specialty;
        this.procedures = procedures;
        this.attributes = this.get_attributes()
    }

    get_str() {
        return `${this.first_name} ${this.last_name}, ${this.post_nominal_letters}, ${this.specialty}, 
        Sub specialities: ${this.sub_specialty}. Cell phone number: ${this.cell_phone_number}. 
        Locations: ${this.location}. Procedures: ${this.procedures}.`;
    }

    get_repr() {
        return `${this.first_name} ${this.last_name} ${this.post_nominal_letters} ${this.specialty} 
        ${this.sub_specialty} ${this.cell_phone_number} ${this.location}`;
    }

    get_sub_specialties() {
        let sub_specialties_string = '';
        for (let sub_specialty of this.sub_specialty) {
            if (this.sub_specialty.indexOf(sub_specialty) === this.sub_specialty.length - 1) {
                sub_specialties_string += sub_specialty;
            } else if (this.sub_specialty.indexOf(sub_specialty) === this.sub_specialty.length - 2) {
                sub_specialties_string += sub_specialty + ' and ';
            } else {
                sub_specialties_string += sub_specialty + ', ';
            }
        }
        return sub_specialties_string;
    }

    get_attributes() {
        return `Name: ${this.first_name} ${this.last_name}, ${this.post_nominal_letters}. 
        Specialty: ${this.specialty}. Sub-specialties: ${this.sub_specialty}. 
        Cell phone number: ${this.cell_phone_number}. Locations: ${this.location}. Procedures: ${this.procedures}.`;
    }

    search_for_terms(search_terms) {
        let search_terms_found = 0;
        for (let search_term of search_terms) {
            if (this.get_attributes().toLowerCase().includes(search_term.toLowerCase())) {
                search_terms_found += 1;
            }
        }
        return search_terms_found === search_terms.length;
    }
}

export class OccupationalTherapist extends Staff {
    constructor(first_name, last_name, post_nominal_letters, location, image, website_url, sub_specialty, procedures) {
        super(first_name, last_name, post_nominal_letters, location, image, website_url);
        this.specialty = 'Occupational Therapy';
        this.sub_specialty = sub_specialty;
        this.procedures = procedures;
        this.attributes = this.get_attributes();
    }

    get_str() {
        return `${this.first_name} ${this.last_name}, ${this.post_nominal_letters}, ${this.specialty}, 
        Sub specialities: ${this.sub_specialty}. Cell phone number: ${this.cell_phone_number}. 
        Locations: ${this.location}. Procedures: ${this.procedures}.`;
    }

    get_repr() {
        return `${this.first_name} ${this.last_name} ${this.post_nominal_letters} ${this.specialty} 
        ${this.sub_specialty} ${this.cell_phone_number} ${this.location}`;
    }

    get_sub_specialties() {
        let sub_specialties_string = '';
        for (let sub_specialty of this.sub_specialty) {
            if (this.sub_specialty.indexOf(sub_specialty) === this.sub_specialty.length - 1) {
                sub_specialties_string += sub_specialty;
            } else if (this.sub_specialty.indexOf(sub_specialty) === this.sub_specialty.length - 2) {
                sub_specialties_string += sub_specialty + ' and ';
            } else {
                sub_specialties_string += sub_specialty + ', ';
            }
        }
        return sub_specialties_string;
    }

    get_attributes() {
        return `Name: ${this.first_name} ${this.last_name}, ${this.post_nominal_letters}. 
        Specialty: ${this.specialty}. Sub-specialties: ${this.sub_specialty}. 
        Cell phone number: ${this.cell_phone_number}. Locations: ${this.location}. Procedures: ${this.procedures}.`;
    }

    search_for_terms(search_terms) {
        let search_terms_found = 0;
        for (let search_term of search_terms) {
            if (this.get_attributes().toLowerCase().includes(search_term.toLowerCase())) {
                search_terms_found += 1;
            }
        }
        return search_terms_found === search_terms.length;
    }
}

