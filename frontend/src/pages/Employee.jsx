import axios from "axios";
import { useState } from "react";

export default function Employee() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState("");
  const [weightage, setWeightage] = useState("");

  const createGoal = async () => {

    await axios.post(
      "http://localhost:5000/api/goals",
      {
        title,
        description,
        target,
        weightage
      }
    );

    alert("Goal Created");
  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold">
        Employee Dashboard
      </h1>

      <input
        className="border p-2 block mt-5"
        placeholder="Goal Title"
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        className="border p-2 block mt-5"
        placeholder="Description"
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <input
        className="border p-2 block mt-5"
        placeholder="Target"
        onChange={(e) =>
          setTarget(e.target.value)
        }
      />

      <input
        className="border p-2 block mt-5"
        placeholder="Weightage"
        onChange={(e) =>
          setWeightage(e.target.value)
        }
      />

      <button
        onClick={createGoal}
        className="bg-green-500 text-white px-5 py-2 mt-5"
      >
        Create Goal
      </button>

    </div>
  );
}