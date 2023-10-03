import Signing from "../../../form/layout";
const signin = () => {

    return (
        <>
            <button type="button" className="btn btn-primary"  data-bs-target="#exampleModal1">
                SignIn
            </button>

            <div className="modal fade" id="exampleModal1">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <Signing/>
                        
                  
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default signin;