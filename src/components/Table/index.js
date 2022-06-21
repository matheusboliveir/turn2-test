export default function Table({ characterList }) {
  console.log(characterList);
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>species</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {characterList.map((character) => (
          <tr>
            <td>{character.id}</td>
            <td>{character.name}</td>
            <td>{character.species}</td>
            <td>{character.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
