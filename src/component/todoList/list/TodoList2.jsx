import { useEffect, useState } from "react";
import Header from "../../header/Header";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useSelector } from "react-redux";
import { MdCancelPresentation, MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function TodoList2() {
  const [task, setTask] = useState("");
  const [listItem, setListItem] = useState([]);
  const [updateList, setUpdateList] = useState("");
  const [edit, setEdit] = useState(false);
  const [editID, setEditId] = useState(null);

  const db = getDatabase();
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      if (user.emailVerified !== true) {
        navigate("/");
        toast.error("Please Verify Your Email");
      }
    }

    // data read for log in user
    const starCountRef = ref(db, "todo2/" + user.uid);
    onValue(starCountRef, (snapshot) => {
      const arrey = [];
      snapshot.forEach((element) => {
        arrey.push({ ...element.val(), id: element.key });
      });
      setListItem(arrey);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      alert("Enter Your Task!");
      return;
    }

    // data submit
    set(push(ref(db, "todo2/" + user.uid)), {
      taskList: task,
    });

    setTask("");
  };

  // data delet function

  const handleDelet = (id) => {
    remove(ref(db, "todo2/" + user.uid + "/" + id));
  };

  // data update function

  const handleUpdate = (id) => {
    setEditId(id);
    setEdit(!edit);
  };

  const handleUpdateList = (e) => {
    e.preventDefault();

    update(ref(db, "todo2/" + user.uid + "/" + editID), {
      taskList: updateList,
    }).then(() => {
      setUpdateList("");
      setEdit(false);
    });
  };

  return (
    <>
      <Header />

      <section className="w-full h-full pt-10 relative">
        <div className="max-w-md mx-auto bg-white shadow-ListItem rounded-lg overflow-hidden mt-16">
          <div className="px-4 py-2">
            <h1 className="text-gray-800 font-bold text-2xl uppercase">
              To-Do List
            </h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm mx-auto px-4 py-2"
          >
            <div className="flex items-center border-b-2 border-teal-500 py-2">
              <input
                onChange={(e) => setTask(e.target.value)}
                value={task}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Add a task"
              />
              <button
                className="shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>

          {listItem.length > 0 && (
            <div className="mt-8">
              <ul className="bg-gray-300 p-6">
                {listItem.map((item, index) => (
                  <li key={item.id} className="mb-3">
                    <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-md hover:bg-teal-600 duration-300">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">
                          {index + 1}.
                        </span>

                        <span className="text-lg font-semibold capitalize ">
                          {item.taskList}
                        </span>
                      </div>
                      <div className="flex items-center gap-6">
                        <button onClick={() => handleUpdate(item.id)}>
                          <FaRegEdit className="text-black hover:text-white duration-300 cursor-pointer text-lg" />
                        </button>
                        <button onClick={() => handleDelet(item.id)}>
                          <MdDelete className="text-black hover:text-red-600 duration-300 cursor-pointer text-lg" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {edit && (
          <div className="w-full h-screen mx-auto  absolute top-0 left-0 text-center bg-gray-300/90 pt-10">
            <div className="max-w-md mx-auto py-6 bg-white shadow-ListItem rounded-lg overflow-hidden relative">
              <div className="px-4 py-2">
                <h1 className="text-gray-800 font-bold text-2xl uppercase">
                  Update To-Do List
                </h1>
              </div>
              <form
                onSubmit={handleUpdateList}
                className="w-full max-w-sm mx-auto px-4 py-2"
              >
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                  <input
                    onChange={(e) => setUpdateList(e.target.value)}
                    value={updateList}
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Add a task"
                  />
                  <button
                    className="shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded capitalize"
                    type="submit"
                  >
                    update
                  </button>
                </div>
              </form>

              <button
                onClick={() => setEdit(false)}
                className="absolute top-0 right-0.5 cursor-pointer"
              >
                <MdCancelPresentation className="text-2xl hover:text-red-500 duration-300 " />
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default TodoList2;
