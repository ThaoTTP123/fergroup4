export default function Login() {
    const containerStyle = {
        marginTop: '100px',
    };

    const bodyStyle = {
        backgroundColor: '#f8f9fa',
    };

    const buttonStyle = {
        backgroundColor: '#007bff'
    }
    return (
        <div style={bodyStyle}>
            <div className="container login-container" style={containerStyle}>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="text-center">SIGN IN</h2>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" id="username" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block" style={buttonStyle}>Sign in</button>
                                    {/* <button type="submit" className="btn btn-primary btn-block">Haha</button> */}
                                </form>
                                <hr />
                                <p className="text-center">Or sign in by:</p>
                                <a href="#" className="btn btn-danger btn-block">Google</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';

// export default function Login() {
//     const buttonStyle = {
//                 backgroundColor: '#007bff'
//             }
//     return (
//         <Container style={{ backgroundColor: '#f8f9fa', marginTop: '100px' }}>
//             <Row className="justify-content-center">
//                 <Col md={6} lg={4}>
//                     <Card>
//                         <Card.Body>
//                             <Card.Title className="text-center">SIGN IN</Card.Title>
//                             <Form>
//                                 <Form.Group controlId="username">
//                                     <Form.Label>Username</Form.Label>
//                                     <Form.Control type="text" />
//                                 </Form.Group>

//                                 <Form.Group controlId="password">
//                                     <Form.Label>Password:</Form.Label>
//                                     <Form.Control type="password" />
//                                 </Form.Group>

//                                 <Button variant="primary" type="submit" block style={buttonStyle}>
//                                     Sign in
//                                 </Button>
//                             </Form>
//                             <hr />
//                             <p className="text-center">Or sign in by:</p>
//                             <InputGroup className="mb-6">
//                                 <Button variant="danger" block>Google</Button>
//                             </InputGroup>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }
