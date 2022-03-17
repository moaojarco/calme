export const SongCard = ({ song, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="p-2  m-4 rounded shadow-xl transition-transform hover:translate-x-4"
      style={{ background: `url(${song.cover})` }}
    >
      <h1>{song.name}</h1>
      <img src={song.cover} alt={song.name} className="w-40" />
    </div>
  );
};
