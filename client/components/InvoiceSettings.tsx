export const InvoiceSettings = () => {
  const colors = ["#b91c1c", "#1d4ed8", "#15803d", "#7e22ce"];

  return (
    <div className="col-span-1 rounded bg-gray-300 px-4 py-5">
      <h2 className="text-base font-bold">Invoice Settings</h2>

      <div className="mt-6">
        <h4 className="border-b border-b-gray-400 text-xs font-bold uppercase text-gray-500">
          Color
        </h4>

        <div className="mt-3 flex items-center justify-between">
          {colors?.map((color, index) => (
            <button
              style={{ backgroundColor: color }}
              className="h-8 w-8 rounded-full shadow-lg"
              key={index}
            ></button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h4 className="border-b border-b-gray-400 text-xs font-bold uppercase text-gray-500">
          Currency
        </h4>
      </div>

      <div className="mt-10">
        <h4 className="border-b border-b-gray-400 text-xs font-bold uppercase text-gray-500">
          Notes
        </h4>

        <textarea
          name="note"
          id=""
          rows={5}
          defaultValue="Thank you for your business!!"
          className="mt-3 w-full rounded bg-gray-200 p-2 font-figtree text-xs font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-main-black"
        ></textarea>
      </div>
    </div>
  );
};
