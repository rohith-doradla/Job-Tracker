import React from 'react';

import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

function BoardsPage() {
  const jobBoard = useRef('');

  let isEdit = false;
  let boardId = '';

  const [boards, setBoards] = useState(() => {
    return JSON.parse(localStorage.getItem('boards')) || [];
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newBoard = jobBoard.current.value;

    if (newBoard.trim() === '') return;

    let updatedBoards = [];

    if (isEdit) {
      updatedBoards = [...boards];
      updatedBoards = updatedBoards.map((b) => {
        if (b.id === boardId) {
          b.title = newBoard;
        }
        return b;
      });
    } else {
      updatedBoards = [...boards, { id: uuidv4(), title: newBoard }];
    }

    setBoards(updatedBoards);
    localStorage.setItem('boards', JSON.stringify(updatedBoards));

    jobBoard.current.value = '';

    isEdit = false;
    boardId = '';
  }

  function handleEdit(id) {
    const editBoard = boards.filter((b) => b.id === id);

    jobBoard.current.value = editBoard[0].title;

    isEdit = true;
    boardId = id;
  }

  function handleDelete(id) {
    const updatedBoards = boards.filter((b) => b.id !== id);

    setBoards(updatedBoards);
    localStorage.setItem('boards', JSON.stringify(updatedBoards));
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2>My Boards</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form action="" onSubmit={handleSubmit} className="space-y-6">
          <label
            htmlFor="boards"
            className="block text-sm/6 font-medium text-black-100 text-left"
          >
            Enter Board
            <input
              type="text"
              placeholder="Board Name"
              ref={jobBoard}
              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
            />
          </label>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              +New Board
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {boards.map((board) => {
          return (
            <div
              key={board.id}
              className="relative max-w-sm p-6 bg-white border border-gray-100 rounded-xl shadow-sm mt-2"
            >
              <div>
                <i
                  className="fa-solid fa-pen "
                  onClick={() => {
                    handleEdit(board.id);
                  }}
                ></i>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => handleDelete(board.id)}
                ></i>
              </div>

              <Link to={`/boards/${board.id}`}>
                <div>
                  <h3 className="text-xl font-bold text-indigo-950">
                    {board.title}
                  </h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BoardsPage;
