
import React,{ useEffect, useMemo, useState } from 'react';
import { useTable, useGlobalFilter, useFilters, usePagination } from 'react-table';
import { ColumnFilter } from '../../../components/table/FilteringTable/ColumnFilter';
import { GlobalFilter } from '../../../components/table/FilteringTable/GlobalFilter'; 
import { Button, Modal } from 'react-bootstrap';
import AddBanner from './AddBanner';
import { DeleteBanner } from '../../../../services/CommonService';

const BannerTable =({propdata}) =>{
    const [postModal, setPostModal] = useState(false);
    const[bannerData,setBannerData] =useState(null);
    const COLUMNS = [
        {
            Header : 'Bannertype',
            Footer : 'Bannertype',
            accessor: 'bannertype',
            Filter: ColumnFilter
            
            //disableFilters: true,
        },
        {
            Header : 'Position',
            Footer : 'Position',
            accessor: 'position',
            Filter: ColumnFilter,
            
            //disableFilters: true,
        },
        {
            Header : 'Status',
            Footer : 'Status',
            accessor: 'status',
            Filter: ColumnFilter,
        },
        {
            Header : 'Base64',
            Footer : 'Base64',
            accessor: 'base64',
            Filter: ColumnFilter,
        },
        {
            Header : 'Tenantid',
            Footer : 'Tenantid',
            accessor: 'tenantid',
            Filter: ColumnFilter,
        },
        {
            Header: "Actions",
            Cell: ({ row }) => (
                <>
              <button 
                onClick={() => handleRowClick(row)}
              >
                View /Edit
              </button>
             
              <button 
                onClick={() => deleteData(row)}
              >
                Delete
              </button>
              </>
              
            )
          }
        
    ]

    const columns = useMemo( () => COLUMNS, [] )
	console.log(propdata);
	const data = useMemo( () => propdata, [] )
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
       // setUserData(row.values);
        setBannerData(row.values);
        setPostModal(true);
        }
        const deleteData=async(row)=>{
              
              
              
        }

    const openModal =async(data) =>{
        setPostModal(true); 
    }
    const closemodal = async()=>{
        setPostModal(false);
    }

    return(
    <>
    <div className="card">
				
				<div className="card-body">
                <Button onClick={() => openModal({})}
                            className="me-2" variant="primary btn-square"
                            title="Add Banners"
                        >
                            <span className="btn-icon-start text-danger">
                                <i className="fa fa-plus color-danger" />
                            </span>
                            ADD Banners
                        </Button>
					<div className="table-responsive">
						<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
						
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

            <Modal className="modal fade" size="lg" show={postModal} onHide={setPostModal} >
                <div className="" role="document">
                    <div className="">
                        <form >
                            <div className="modal-header">

                                <button type="button" className="btn-close" onClick={closemodal} data-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                            <AddBanner dataprops ={bannerData}/>

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
export default BannerTable