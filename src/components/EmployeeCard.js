import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function getLocations(locations) {
    let locations_string = "";
    for (let i = 0; i < locations.length; i++) {
        locations_string += locations[i];
        if (i < locations.length - 1) {
            locations_string += ", ";
        }
    }
    return locations_string;
}

function getProviderImage(provider) {
    let image_url;
    if (provider.image) {
        image_url = provider.image;
    } else {
        image_url = "https://imagedelivery.net/68SN6RDwKYb315QTtTsC9w/dbb173aa-fbe9-4d44-1c1f-e794bccc7b00/public";
    }
    return image_url;
}

export default function EmployeeCard(props) {
    if (props.providers === null || props.providers.length === 0) {
        if (props.SearchFoundNone === true) {
            return (
                <Container className="mt-5 mb-5">
                    <div key={props.SearchFoundNone} className="text-center">
                        <h1>No providers found.</h1>
                    </div>
                </Container>
            );
        }
        return null;
    }
    return (
        <div>
            {props.providers.map((provider) => {
                return (
                    <Container className="mt-2 mb-2" key={provider}>
                        <Row>
                            <Col/>
                            <Col>
                                <Card key={provider} className="card bg-secondary text-white">
                                    <Card.Img src={getProviderImage(provider)} alt="Provider image"/>
                                    <Card.Body>
                                        <Card.Title>
                                            <Card.Link className="text-white" href={provider.website_url}
                                                       target="_blank"
                                                       rel="noopener noreferrer">
                                                {provider.first_name + " " + provider.last_name + ", " + provider.post_nominal_letters}
                                            </Card.Link>
                                        </Card.Title>
                                        <Card.Text>{provider.specialty}</Card.Text>
                                        <Card.Text>{getLocations(provider.location)}</Card.Text>
                                        <Card.Text>{provider.email}</Card.Text>
                                        <Card.Text>{provider.cell_phone_number}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <br/>
                            </Col>
                            <Col/>
                        </Row>
                    </Container>
                )
            })}
        </div>
    )
}
