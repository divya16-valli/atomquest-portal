import axios from "axios";
import { useEffect, useState } from "react";

export default function Manager() {

  const [goals, setGoals] = useState([]);

  const fetchGoals = async () => {

    const res = await axios.get(
      "http://localhost:5000/api/goals"
    );

    setGoals(res.data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const approveGoal = async (id) => {

    await axios.patch(
      `http://localhost:5000/api/goals/${id}/approve`
    );

    fetchGoals();
  };

  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold">
        Manager Dashboard
      </h1>

      {
        goals.map((goal) => (

          <div
            key={goal._id}
            className="border p-5 mt-5"
          >

            <h2 className="font-bold">
              {goal.title}
            </h2>

            <p>{goal.description}</p>

            <p>
              Status: {goal.status}
            </p>

            <button
              onClick={() =>
                approveGoal(goal._id)
              }
              className="bg-blue-500 text-white px-4 py-2 mt-3"
            >
              Approve
            </button>

          </div>
        ))
      }

    </div>
  );
}