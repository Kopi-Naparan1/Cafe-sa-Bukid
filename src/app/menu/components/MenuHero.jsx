export default function MenuHero() {
  return (
    <div className="w-full  mb-[6vh] text-center  justify-center flex flex-col items-center  gap-4  ">
      <h1
        className=" font-heading font-extrabold tracking-tight
          text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.08]"
      >
        MENU
      </h1>
      <p
        className=" max-w-md  leading-relaxed
          text-[clamp(.95rem,2vw,1.2rem)] text-dark/65
        "
      >
        Simple, fresh, made to be worth the trip.
      </p>
    </div>
  );
}
