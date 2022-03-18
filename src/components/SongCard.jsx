export const SongCard = ({ song, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="overflow-hidden relative z-20 xs:m-1 md:m-4 rounded md:shadow-xl transition-transform hover:translate-x-4 flex cursor-pointer min-h-fit"
    >
      <div className="">
        <img
          src={song.cover}
          alt="Song Cover"
          className="xs:hidden sm:block md:block md:w-full absolute -z-10"
          style={{
            background: `url(${song.cover})`,
            filter: "brightness(40%)",
          }}
        />
      </div>
      <img src={song.cover} alt={song.name} className="xs:w-20 md:w-40" />
      <h1 className="xs:hidden sm:block xs:p-1 md:block md:text-lg md:p-4 font-bold my-auto mx-4 text-slate-200 rounded">
        {song.name}
      </h1>
    </div>
  );
};
