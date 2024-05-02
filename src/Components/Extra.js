// //store
// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from './todoSlice';

// export default configureStore({
//   reducer: {
//     todos: todoReducer,
//   },
// });

// //Todo Slice

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   todoList: [],
// };

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todoList.push(action.payload);
//     },
//     deleteTodo: (state, action) => {
//       state.todoList = state.todoList.filter(todo => todo.id !== action.payload);
//     },
//     toggleTodo: (state, action) => {
//       const todo = state.todoList.find(todo => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     editTodo: (state, action) => {
//       const { id, task, time } = action.payload;
//       const todo = state.todoList.find(todo => todo.id === id);
//       if (todo) {
//         todo.task = task;
//         todo.time = time;
//       }
//     },
//   },
// });

// export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
// export default todoSlice.reducer;

// //Navbar

// import React from 'react';
// import { useSelector } from 'react-redux';
// import moment from 'moment';

// const Navbar = () => {
//   const currentDateAndTime = useSelector(state => state.todos.currentDateAndTime);

//   return (
//     <div className='flex justify-between items-center font-medium'>
//       <div>{moment(currentDateAndTime).format('h:mm')}</div>
//       <div className='flex gap-1'>
//         {/* Your icons */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// //TodoItem

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteTodo, toggleTodo } from './todoSlice';
// import moment from 'moment';

// const TodoItem = ({ todo }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteTodo(todo.id));
//   };

//   const handleToggle = () => {
//     dispatch(toggleTodo(todo.id));
//   };

//   return (
//     <div>
//       <div className='flex justify-between py-4 border-b w-[100%]'>
//         <div className='flex items-center gap-2 w-[80%]'>
//           <input
//             type='checkbox'
//             checked={todo.completed}
//             onChange={handleToggle}
//             className='cursor-pointer'
//           />

//           <div className="text-base break-words w-[70%] pl-2">
//             <p className="text-lg font-semibold ">{todo.task}</p>
//             <p className="flex items-center text-gray-400 text-xs">
//               {/* Your icons */}
//               {moment(todo.time).format("YYYY-MM-DD HH:mm")}
//             </p>
//           </div>
//         </div>

//         <div className='flex justify-center items-center gap-2 w-[21%]'>
//           {/* Your icons */}
//           <button className='cursor-pointer' onClick={handleDelete}>
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodoItem;

// // Todos.js

// import React from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from './Navbar';
// import TodoItem from './TodoItem';

// const Todos = () => {
//   const todoList = useSelector(state => state.todos.todoList);

//   return (
//     <div className="w-full mx-auto relative pb-10 px-3 border-2 shadow-md sm:w-3/5 md:w-2/4 lg:w-2/5 2xl:w-2/6 mt-12 2xl:mt-15">
//       <Navbar />
//       <div className="flex justify-between items-center mt-2 mb-6">
//         <h1 className="text-3xl font-bold">Today</h1>
//       </div>
//       {todoList.length === 0 && <h1>Add Todo</h1>}
//       {todoList.map((todo) => (
//         <TodoItem key={todo.id} todo={todo} />
//       ))}
//     </div>
//   );
// };

// export default Todos;


// //DeleteTodoModal
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteTodo } from './todoSlice';

// const DeleteTodoModal = ({ showOrHideDeleteModal, id }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => {
//     dispatch(deleteTodo(id));
//   };

//   return (
//     <div>
//       {showOrHideDeleteModal && (
//         <div className="absolute text-center mx-auto w-[80%] top-[30%] left-[10%] bg-white border-2 px-2 py-4 rounded ">
//           <p className="text-2xl text-left w-[80%] mx-auto mb-6">Delete</p>
//           <p className="text-base text-left w-[80%] mx-auto mb-6">
//             Are you sure you want to delete this item?
//           </p>
//           <div className="flex justify-between w-[80%] mx-auto text-lg">
//             <button className="px-4 py-1 border rounded" onClick={handleDelete}>
//               Delete
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DeleteTodoModal;

// //addTodoModal

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTodo } from './todoSlice';

// const AddTodoModal = ({ showOrHideTodoModal }) => {
//   const [todoInputText, setTodoInputText] = useState('');
//   const dispatch = useDispatch();

//   const handleAddTodo = () => {
//     if (todoInputText.trim() !== '') {
//       dispatch(addTodo({
//         id: Date.now(),
//         task: todoInputText.trim(),
//         completed: false,
//         time: new Date().toISOString(),
//       }));
//       setTodoInputText('');
//     }
//   };

//   return (
//     <div>
//       {showOrHideTodoModal && (
//         <div className="absolute mx-auto w-11/12 top-[15%] left-[4%] bg-white border-2 p-2 rounded ">
//           <textarea
//             value={todoInputText}
//             onChange={(e) => setTodoInputText(e.target.value)}
//             className="w-full h-32 resize-none p-2 rounded border-2 outline-none"
//           ></textarea>
//           <div className="w-full flex justify-between text-lg font-semibold text-blue-500 mt-3 px-4">
//             <button onClick={handleAddTodo}>Add</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddTodoModal;
