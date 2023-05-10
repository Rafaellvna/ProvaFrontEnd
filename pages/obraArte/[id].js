import Pagina from '@/components/Pagina'
import apiArte from '@/services/apiArte'
import Link from 'next/link'
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function Detalhes({ abc }) {
    return (
        <Pagina>

            <Container>
                <Row>
                    <Col md={5}>
                        {abc.image_id !== null ? (<Card border="danger" style={{ width: '18rem' }}>
                            <Card.Header className="bg-danger text-light"><strong>Foto</strong></Card.Header>
                            <Card.Body>
                                <Card.Img variant="top" src={"https://www.artic.edu/iiif/2/" + abc.image_id + "/full/843,/0/default.jpg"} />
                                <Link href={"https://www.artic.edu/iiif/2/" + abc.image_id + "/full/843,/0/default.jpg"}><Button variant="primary" className='m-1'>Ampliar</Button></Link>
                            </Card.Body>
                        </Card> ): ""}
                        <Link href={'/obraArte'}><Button variant="success" className='m-2'>Voltar</Button></Link>
                    </Col>
                    <Col md={7}>
                        <Card>
                            <Card.Header className='bg-danger text-light'><strong>{abc.title}</strong></Card.Header>
                            <Card.Body>
                                <Card.Text><strong>Artista: </strong>{abc.artist_title}</Card.Text>
                                <Card.Text><strong>Departamento: </strong>{abc.department_title}</Card.Text>
                                <Card.Text><strong>Origem: </strong>{abc.place_of_origin}</Card.Text>
                                <Card.Text><strong>Dimensões: </strong>{abc.dimensions}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </Pagina>
    )
}

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiArte.get('/artworks/' + id)
    const abc = resultado.data.data

    return {
        props: { abc }, // will be passed to the page component as props
    }
}

export default Detalhes