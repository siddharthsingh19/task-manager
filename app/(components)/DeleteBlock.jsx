"use client";

import React, { useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const deletePassword = process.env.DELETE_IT;

  const handleDelete = async () => {
    if (password === deletePassword) {
      await deleteTicket();
      setShowModal(false);
    } else {
      alert("Incorrect password. Deletion canceled.");
    }
  };
  const deleteTicket = async () => {
    const res = await fetch(`https://untask.vercel.app/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // return (
  //   <FontAwesomeIcon
  //     icon={faX}
  //     className=" text-red-400 hover:cursor-pointer hover:text-red-200"
  //     onClick={handleDelete}
  //   />
  // );

  return (
    <>
      <FontAwesomeIcon
        icon={faX}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
        onClick={openModal}
      />
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg text-gray-800 font-bold mb-4">
              Enter Password to Confirm Deletion
            </h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
              placeholder="Password"
            />
            <div className="flex justify-end">
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
              >
                Confirm Delete
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBlock;
