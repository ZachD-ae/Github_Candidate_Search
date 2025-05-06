import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [saved, setSaved] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('savedCandidates');
    if (savedData) {
      setSaved(JSON.parse(savedData));
    }
  }, []);

  const removeCandidate = (id: number) => {
    const updated = saved.filter((c) => c.id !== id);
    setSaved(updated);
    localStorage.setItem('savedCandidates', JSON.stringify(updated));
  };

  return (
    <main>
      <h1>Potential Candidates</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {saved.map((c) => (
            <tr key={c.id}>
              <td><img src={c.avatar_url} alt={c.login} className="avatar" /></td>
              <td><strong>{c.name}</strong> <em>({c.login})</em></td>
              <td>{c.location || 'N/A'}</td>
              <td><a href={`mailto:${c.email}`}>{c.email || 'N/A'}</a></td>
              <td>{c.company || 'N/A'}</td>
              <td>{c.bio || 'N/A'}</td>
              <td>
                <button className="reject-button" onClick={() => removeCandidate(c.id)}>−</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default SavedCandidates;
