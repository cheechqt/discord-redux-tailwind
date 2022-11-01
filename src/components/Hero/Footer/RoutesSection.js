/* eslint-disable */
function RoutesSection({ data }) {
  return (
    <div className="col-span-2 mb-10 text-white text-xl">
      <h5 className="text-purple pt-2">{data.title}</h5>
      <ul>
        {data.items.map((item) => {
          return (
            <li key={item} className="mt-2 hover:underline cursor-pointer">
              <a>{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RoutesSection;
