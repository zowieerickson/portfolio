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
      <h1 className="font-semibold text-2xl capitalize">{position}</h1>
      <p className="font-normal mt-2">{location}</p>
      <p className="font-normal mt-1">{company}</p>
      <ul className="mt-4 font-normal text-gray-700 dark:text-white/75">
        {description.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p className="font-normal mt-5">{dates}</p>
    </div>
  );
}
