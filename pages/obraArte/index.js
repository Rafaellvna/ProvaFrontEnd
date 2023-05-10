import Pagina from '@/components/Pagina'
import apiArte from '@/services/apiArte'
import Link from 'next/link'
import React from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'

function index({ listagem }) {
  return (
    <Pagina titulo='Obras de Arte'>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Detalhes</th>
                <th>Título</th>
                <th>Artista</th>
                <th>Departamento</th>
              </tr>
            </thead>
            <tbody>
              {listagem.map(item => (
                <tr>
                  <td>
                    <Link href={'/obraArte/' + item.id}>
                      <Button variant="primary">Detalhes</Button>
                    </Link>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.artist_title}</td>
                  <td>{item.department_title}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

    </Pagina >
  )
}

export async function getServerSideProps(context) {

  const resultado = await apiArte.get('/artworks')
  const listagem = resultado.data.data

  return {
    props: { listagem }, // will be passed to the page component as props
  }
}

export default index