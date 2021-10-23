import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Tables = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Striped rows</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                        Use <code>striped</code> property to add zebra-striping to any table row within the{' '}
                        <code>&lt;CTableBody&gt;</code>.
                        </p>
                        <CTable striped>
                            <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                            </CTableRow>
                            </CTableHead>
                            <CTableBody>
                            <CTableRow>
                                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                <CTableDataCell>Mark</CTableDataCell>
                                <CTableDataCell>Otto</CTableDataCell>
                                <CTableDataCell>@mdo</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                <CTableDataCell>Jacob</CTableDataCell>
                                <CTableDataCell>Thornton</CTableDataCell>
                                <CTableDataCell>@fat</CTableDataCell>
                            </CTableRow>
                            <CTableRow>
                                <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
                                <CTableDataCell>@twitter</CTableDataCell>
                            </CTableRow>
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Tables
