import Pagina from '@/components/Pagina'
import apiArte from '@/services/apiArte'
import React from 'react'

function tiposArte({ tpa }) {
    return (
        <Pagina titulo="Tipos de Arte">
            <ul>
                {tpa.map(item => (
                    <li>{item.title}{item.updated_at}</li>
                ))}
            </ul>

        </Pagina>
    )
}

export async function getServerSideProps(context) {

    const resultado = await apiArte.get('/artworks')
    const tpa = resultado.data.data

    return {
        props: { tpa }, // will be passed to the page component as props
    }
}

export default tiposArte