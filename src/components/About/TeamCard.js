import React from 'react';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function TeamCard(props) {
    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {props.teamMembers.map((member, idx) => (
                <Col key={member.name}>
                    <Card>
                        <Card.Img variant="top" src={member.pictureUrl} />
                        <Card.Body>
                            <Card.Title>{member.name}</Card.Title>

                            <Card.Text>
                                <div>
                                    <FontAwesomeIcon icon={faGithub} />{' '}
                                    <a href={member.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
                                </div>
                                <div>
                                <FontAwesomeIcon icon={faLinkedin} />{' '}

                                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
                                </div>
                                {member.email && (
                                    <div>
                                        <FontAwesomeIcon icon={faEnvelope} />{' '}
                                        <a href={`mailto:${member.email}`}>{member.email}</a>
                                    </div>
                                )}
                                {member.phone && (
                                    <div>
                                        <FontAwesomeIcon icon={faPhone} />{' '}
                                        <span>{member.phone}</span>
                                    </div>
                                )}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default TeamCard;