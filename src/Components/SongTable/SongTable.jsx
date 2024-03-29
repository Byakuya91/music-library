const SongTable = ({ parentSongEntires, searchTerm }) => {
  console.log(
    "ParentSongEntires type is is:",
    Array.isArray(parentSongEntires)
  );

  console.log("ParentSongEntires  is is:", Object.values(parentSongEntires));

  let songEntiresArr = Object.values(parentSongEntires);

  return (
    // create our display table
    <table className="table table-dark ">
      <thead className="table-font">
        <tr>
          <th>title</th>
          <th>album</th>
          <th>artist</th>
          <th>genre</th>
          <th>releaseDate</th>
        </tr>
      </thead>
      <tbody className="table-font">
        {songEntiresArr
          .filter(
            (song) =>
              song.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              song.album?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              song.artist?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              song.genre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              song.releaseDate?.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((song, index) => {
            return (
              <tr key={index}>
                <td>{song.title}</td>
                <td>{song.album}</td>
                <td>{song.artist}</td>
                <td>{song.genre}</td>
                <td>{song.releaseDate}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default SongTable;
