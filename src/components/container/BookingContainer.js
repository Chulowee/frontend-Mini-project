import {connect} from 'react-redux'
import MiniProjectResources from "../../api/MiniProjectResources";
const mapDispatchToProps = dispatch => ({
    createNewBooking: newBook => {
        const newBooking = {
            datePickUp: newBook
        };
        MiniProjectResources.createBoking(newBooking)
            .then(res => res.json())
            .then(({id, status, content}) => {
                dispatch({
                    type: 'ADD_BOOKING',
                    payload: {id, content}
                })
            })
    }
});
export default connect(
    mapDispatchToProps
)()
