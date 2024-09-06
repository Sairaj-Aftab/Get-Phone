import Link from "next/link";

export default function Home() {
  return (
    <div className="py-5">
      <div className="mb-3">
        <p className="flex gap-1">
          <span className="text-base font-medium text-secondary">
            Total IMEI :
          </span>
          <span className="text-base font-medium text-secondary">591</span>
        </p>
      </div>
      <div>
        <Link href="/" className="bg-gray-100 p-3 block rounded-md">
          <p className="text-primary text-lg font-medium">
            Imei number here uitu kjfk95u4 kjf
          </p>
          <table>
            <tbody>
              <tr>
                <td className="flex justify-between gap-1 text-secondary text-base font-medium">
                  <span>Owener name</span>
                  <span>:</span>
                </td>
                <td className="text-base font-medium text-gray-700">
                  Jhon Doe
                </td>
              </tr>
              <tr>
                <td className="flex justify-between gap-1 text-secondary text-base font-medium">
                  <span>Contact number</span>
                  <span>:</span>
                </td>
                <td className="text-base font-medium text-gray-700 underline">
                  123456789
                </td>
              </tr>
            </tbody>
          </table>
        </Link>
      </div>
    </div>
  );
}
