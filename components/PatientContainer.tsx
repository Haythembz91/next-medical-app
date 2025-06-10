import AddPatientForm from "@/components/AddPatientForm";


const PatientContainer = ()=>{
    return (
        <div className={'border-2 border-secondary rounded-2 bg-body-tertiary shadow-sm p-3 m-md-5'}>
            <div className={'d-flex justify-content-between mb-3'}>
                <h4>Patients</h4>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Patient
                </button>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Patient</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <AddPatientForm></AddPatientForm>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary">Add Patient</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                Ania
            </div>
        </div>
    )
}

export default PatientContainer