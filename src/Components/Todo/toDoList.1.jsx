import "./toDoList.css";
import React, {useState, useCallback} from 'react';
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from '../../Redux/actions/index';
import ToDoListItem from './toDoListItem';


const TodoList = ({authUser, data, addTodo}) => {
    const [newItem, setNewItem] = useState(null)
    
    const handleInputChange = event => {
        setNewItem(event.target.value)
    }
    
    const handleFormSubmit = event => {
        addTodo({title: newItem})
        event.preventDefault()
    }
    return (
        <div>
            {authUser && data ? "something"   : "nothing"}
            {data && Object.keys(data).map(todo=><p>{data[todo].title}</p>)}
            <NewTodoInput onSubmit={handleFormSubmit} onChange={useCallback(handleInputChange)}/>
        </div>
    )


}

const NewTodoInput = ({onSubmit, onChange}) => {
    return (
    <form onSubmit={onSubmit}>
        <input 
            onChange={onChange}
            type="text"
            placeholder="enter a new todo"
        />
        <button type="submit">Add</button>
    </form>

    ) 
}

const mapStateToProps = state => {
    return ({
        authUser: state.authUser,
        data: state.data
    })
}



export default connect(mapStateToProps, actions)(TodoList)


// class ToDoList extends React.Component {
//     state = {
//         addFormVisible: false,
//         addFormValue: ''
//     };

//     handleInputChange = event => {
//         this.setState({ addFormValue: event.target.value });
//     };

//     handleFormSubmit = event => {
//         const { addFormValue } = this.state;
//         event.preventDefault();
//         this.props.addTodo({title: addFormValue});
//         this.setState({addFormValue: ""});
//     };

//     renderAddForm = () => {
//         const {addFormVisible, addFormValue} = this.state;
//         if (addFormVisible) {
//             return (
//                 <div id="todo-add-form" className="col s10 offset-s1">
//                     <form onSubmit={this.handleFormSubmit}>
//                         <div className="input-field">
//                             <i className="material-icons prefix">note_add</i>
//                             <input 
//                                 value={addFormValue}
//                                 onChange={this.handleInputChange}
//                                 id="toDoNext"
//                                 type="text"
//                             />
//                             <label htmlFor="toDoNext">What To Do Next</label>
//                         </div>
//                     </form>
//                 </div>
//             )
//         }
//     }

//     renderToDos() {
//         const { data } = this.props;
//         const toDos = _.map(data, (value, key) => {
//             return <ToDoListItem key={key} todoId={key} todo={value} />
//         });

//         if (!_.isEmpty(toDos)) {
//             return toDos;
//         }

//         return (
//             <div className="col s10 offset-s1 center-align">
//                 <img src="/img/nothing.png" alt="Nothing was found" id="nothing-was-found"/>
//                 <h4>You have completed all the tasks</h4>
//                 <p>Start by clicking add button in the bottom of the screen</p>
//             </div>
//         ) 
//     }

//     componentWillMount() {
//         this.props.fetchToDos();
//     }

//     render() {
//         const { addFormVisible } = this.state;
//         return (
//             <div className="to-do-list-container">

//                 <div className="row">
//                     {this.renderAddForm()}
//                     {this.renderToDos()}
//                     {/* {this.props.authUser 
//                         ? this.renderToDos() : 
//                         <p>Sign In To See your to dos</p>
//                     } */}
//                 </div>
//                 <div className="fixed-action-btn">
//                     <button
//                         onClick={()=>this.setState({addFormVisible: !addFormVisible})}    
//                         className="btn-floating btn-large teal darken-4"
//                     >
//                     {addFormVisible ? (
//                         <i className="large material-icons">close</i>
//                     ) : (
//                         <i className="large material-icons">add</i>
//                     )}
//                     </button>
//                 </div>
//             </div>
//         )
//     }

// }

// const mapStateToProps = (state) => {
//     return {
//         data: state.data,
//         authUser: state.authUser
//     }
// }

// export default connect(mapStateToProps, actions)(ToDoList)