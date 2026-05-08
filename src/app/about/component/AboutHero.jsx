export default function AboutHero() {
  return (
    <div className="w-full min-h-[20vh] text-center  justify-center flex flex-col items-center  gap-2  ">
      <h1
        className=" font-heading font-extrabold tracking-tight
            text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.08]"
      >
        ABOUT
      </h1>
      {/* <p
        className=" max-w-md  leading-relaxed
            text-[clamp(.95rem,2vw,1.2rem)] text-dark/65
          "
      >
        More than coffee, it’s a place to slow down.
      </p> */}
    </div>
  );
}
