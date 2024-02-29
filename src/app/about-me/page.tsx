export default function AboutMe() {
  const calculateAge = () => {
    const dateOfBirth = new Date("2022-09-01");
    const today: Date = new Date();
    const birthDate: Date = new Date(dateOfBirth);
    let years: number = today.getFullYear() - birthDate.getFullYear();
    let months: number = today.getMonth() - birthDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const ageString: string =
      years !== 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
    const monthString: string =
      months !== 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

    if (years === 0 && months === 0) {
      return "Less than a month old";
    }

    if (years !== 0 && months !== 0) {
      return `${ageString} and ${monthString}`;
    }

    return `${ageString}${monthString}`;
  };

  return (
    <main>
      <div className="p-6 max-w-[800px] m-auto space-y-4">
        <h1 className="text-center text-lg font-bold">Who I am</h1>
        <p>
          I am a passionate and dedicated software developer with a proven track
          record of creating high-quality, innovative solutions. With{" "}
          {calculateAge()} of experience in the industry, I have honed my skills
          in environments NodeJs and Dotnet. My expertise extends across web
          development and mobile applications.
        </p>
        <h1 className="text-center text-lg font-bold">How I started</h1>
        <p>
          My first contact with programming was when I was 14 years old while
          playing on my father&apos;s computer. I noticed that if I changed some
          values in a certain file, some changes occurred within the game.
          <br />
          <br />
          At the age of 17, I entered the State University of Amazonas, where I
          learned to program in Python and had a brief introduction to
          artificial intelligence.
          <br />
          <br />
          In 2021 I started studying at Trybe, where I learned about web
          development, covering frontend, backend and database, while improving
          my theoretical knowledge at the Federal Technological University of
          Paraná
        </p>
        {/* <h1 className="text-center text-lg font-bold">My career</h1> */}
      </div>
    </main>
  );
}
