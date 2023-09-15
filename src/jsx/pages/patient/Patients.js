import React,{ useEffect, useMemo, useState } from 'react';
import { useTable, useGlobalFilter, useFilters, usePagination } from 'react-table';
import MOCK_DATA from '../../components/table/FilteringTable/MOCK_DATA_2.json';
//import { COLUMNS } from './Columns';

//import './table.css';
import '../../components/table/FilteringTable/filtering.css';



import { Modal } from 'react-bootstrap';
import { ColumnFilter } from '../../components/table/FilteringTable/ColumnFilter';
import PageTitle from '../../layouts/PageTitle';
import { GlobalFilter } from '../../components/table/FilteringTable/GlobalFilter';
import PatientActions from './PatientActions';


export const Patients = () => {
    const [postModal, setPostModal] = useState(false);
    const[userdata,setUserData] =useState();
    const[plancategories ,setPlanCategories] =useState([]);
     const COLUMNS = [
        {
            Header : 'Patient Id',
            Footer : 'Patient Id',
            accessor: 'id',
            Filter: ColumnFilter,
            
            //disableFilters: true,
        },
        {
            Header : 'Patient Name',
            Footer : 'Patient Name',
            accessor: 'category_name',
            Filter: ColumnFilter,
            
            //disableFilters: true,
        },
        {
            Header : 'Mobile Number',
            Footer : 'Mobile Number',
            accessor: 'mobuleno',
            Filter: ColumnFilter,
        },
		{
            Header : 'Email',
            Footer : 'Email',
            accessor: 'email',
            Filter: ColumnFilter,
        },
       
        {
            Header: "Actions",
            Cell: ({ row }) => (
              <button className="me-2" variant="warning btn-square"
                onClick={() => handleRowClick(row)}
              >
                View
              </button>
            )
          }
        
    ]

	const columns = useMemo( () => COLUMNS, [] )
	//console.log(propdata);
	const data = useMemo( () => MOCK_DATA, [] )
	const tableInstance = useTable({
		columns,
		data,	
		initialState : {pageIndex : 0}
	}, useFilters, useGlobalFilter, usePagination)

	
	
	const { 
		getTableProps, 
		getTableBodyProps, 
		headerGroups, 
		prepareRow,
		state,
		page,
		gotoPage,
		pageCount,
		pageOptions,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		setGlobalFilter,
	} = tableInstance
	
	
	const {globalFilter, pageIndex} = state

    const handleRowClick =async(row) =>{
    console.log(row);
    setUserData(row.values);
    setPostModal(true);
    }
	
	
	return(
		<>
			<div className="card">
				
				<div className="card-body">
					<div className="table-responsive">
						<table {...getTableProps()} className="table dataTable display">
							<thead>
							   {headerGroups.map(headerGroup => (
									<tr {...headerGroup.getHeaderGroupProps()}>
										{headerGroup.headers.map(column => (
											<th {...column.getHeaderProps()}>
												{column.render('Header')}
												{column.canFilter ? column.render('Filter') : null}
											</th>
										))}
									</tr>
							   ))}
							</thead> 
							<tbody {...getTableBodyProps()} className="" >
							
								{page.map((row) => {
									prepareRow(row)
									return(
										<tr {...row.getRowProps()}>
											{row.cells.map((cell) => {
												return <td {...cell.getCellProps()}> 
												{cell.render('Cell')} </td>
											})}
										</tr>
									)
								})}
							</tbody>
						</table>
						<div className="d-flex justify-content-between">
							<span>
								Page{' '}
								<strong>
									{pageIndex + 1} of {pageOptions.length}
								</strong>{''}
							</span>
							<span className="table-index">
								Go to page : {' '}
								<input type="number" 
									className="ml-2"
									defaultValue={pageIndex + 1} 
									onChange = {e => { 
										const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0 
										gotoPage(pageNumber)
									} } 
								/>
							</span>
						</div>
						<div className="text-center mb-3">	
							<div className="filter-pagination  mt-3">
								<button className=" previous-button" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
								
								<button className="previous-button" onClick={() => previousPage()} disabled={!canPreviousPage}>
									Previous
								</button>
								<button className="next-button" onClick={() => nextPage()} disabled={!canNextPage}>
									Next
								</button>
								<button className=" next-button" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
							</div>
						</div>
					</div>
				</div>
			</div>
            <Modal className="modal fade" size="m" show={postModal} onHide={setPostModal} >
                    <div className="" role="document">
                        <div className="">
                            <form >
                                <div className="modal-header">
								<p className="mb-2 fs-16 font-w600">Paitent Name : Demo User (PAD1)</p>
    
                                    <button type="button" className="btn-close" onClick={() => setPostModal(false)} data-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                   
                                    <PatientActions/>
                                   
                                </div>
                                {/*<div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" >Add</button>  
                                    <button type="button" onClick={()=> setPostModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>      
 </div>*/}
                            </form>

                        </div>
                    </div>
                </Modal>
		</>
	)
	
}
export default Patients;