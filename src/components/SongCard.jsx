export const SongCard = ({ song, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="overflow-hidden relative z-20 m-4 rounded shadow-xl transition-transform hover:translate-x-4 flex cursor-pointer min-h-fit"
    >
      <div className="">
        <img
          src={song.cover}
          alt="JJ"
          className="w-full absolute -z-10"
          style={{
            background: `url(${song.cover})`,
            filter: "brightness(40%)",
          }}
        />
      </div>
      <img src={song.cover} alt={song.name} className="w-40" />
      <h1 className="p-4 text-lg font-bold my-auto mx-4 text-slate-200 rounded">
        {song.name}
      </h1>
    </div>
  );
};
