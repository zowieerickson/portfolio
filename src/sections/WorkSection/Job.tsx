interface Job {
  position: string;
  company: string;
  location: string;
  description: string[];
  dates: string;
}

export default function Job({
  position,
  company,
  location,
  description,
  dates,
}: Job) {
  return (
    <div className=" p-5 w-full border rounded-lg">
      <header className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="font-semibold text-2xl capitalize">{position}</h1>
          <p className="font-normal">{company}</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="font-normal">{dates}</p>
          <p className="font-normal">{location}</p>
        </div>
      </header>

      <ul className="mt-4 font-normal text-gray-700 list-disc list-outside dark:text-white/75">
        {description.map((item) => (
          <li className="ms-3.5" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
