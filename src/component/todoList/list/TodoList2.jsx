import { useEffect, useState } from "react";
import Header from "../../header/Header";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
} from "firebase/database";
import { auth } from "../../../Firebase.config";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
function TodoList2() {
  const user = auth;
  const [task, setTask] = useState("");
  const [listItem, setListItem] = useState([]);
  const db = getDatabase();

  const loginUser = useSelector((state) => state.user.value);

  useEffect(() => {
    const starCountRef = ref(db, "todo2/");
    onValue(starCountRef, (snapshot) => {
      console.log(snapshot.val());
      const arrey = [];

      // if(loginUser.uid === snapshot.val().uid)

      snapshot.forEach((element) => {
        arrey.push({ ...element.val(), id: element.key });
      });

      // if(loginUser.uid === arrey)
      // console.log(arrey);

      setListItem(arrey);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(task);
    if (!task) {
      alert("Enter Your Task!");
    }
    set(push(ref(db, "todo2/")), {
      taskList: task,
      user: loginUser.uid,
    });

    setTask("");
  };

  const handleDelet = (id) => {
    remove(ref(db, "todo2/" + id));
  };

  return (
    <>
      <Header />

      <section className="w-full h-full bg-teal-400 pt-10">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
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
                type="button"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </form>



{

listItem && 

          <div className="mt-8">
            <ul className="bg-gray-300 p-6">
              {listItem.map((item) => (
                <li className="mb-3">
                  <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-md hover:bg-teal-600 duration-300">
                    <span className="text-lg font-semibold capitalize ">
                      {item.taskList}
                    </span>
                    <div className="flex items-center gap-6">
                      <button>
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
  }


        </div>
      </section>
    </>
  );
}

export default TodoList2;
