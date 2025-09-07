

// Example data
import { users } from "../../utils/contant";

export default function Table() {
  return (
    <div className="overflow-x-auto py-8 px-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Users Table</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-3 px-6 font-medium text-gray-700">
              ID
            </th>
            <th className="text-left py-3 px-6 font-medium text-gray-700">
              Name
            </th>
            <th className="text-left py-3 px-6 font-medium text-gray-700">
              Email
            </th>
            <th className="text-left py-3 px-6 font-medium text-gray-700">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="py-3 px-6">{user.id}</td>
              <td className="py-3 px-6">{user.name}</td>
              <td className="py-3 px-6">{user.email}</td>
              <td className="py-3 px-6">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
