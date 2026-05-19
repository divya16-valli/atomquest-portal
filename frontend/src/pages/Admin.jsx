export default function Admin() {

  return (
    <div className="p-10">

      <h1 className="text-5xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5 mt-10">

        <div className="border p-10">
          Employees
        </div>

        <div className="border p-10">
          Goals
        </div>

        <div className="border p-10">
          Reports
        </div>

      </div>

    </div>
  );
}