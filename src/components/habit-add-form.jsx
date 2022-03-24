import React, { memo } from 'react';


const HabitAddForm = memo(props => {
    const inputRef = React.createRef();
    const formRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        //this.inputRef.current.value = '';
        formRef.current.reset();
    };    

    console.log('HabitAddForm');
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input"  placeholder="Habit"/>
            <button>Add</button>
        </form>
    );
            
});


// class HabitAddForm extends PureComponent {

//     inputRef = React.createRef();
//     formRef = React.createRef();

//     onSubmit = event => {
//         event.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         //this.inputRef.current.value = '';
//         this.formRef.current.reset();
//     };    
//     render() {
//         console.log('HabitAddForm');
//         //const input = document.

//         return (
//             <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//                 <input ref={this.inputRef} type="text" className="add-input"  placeholder="Habit"/>
//                 <button>Add</button>
//             </form>
//         );
//     }
// }

export default HabitAddForm;