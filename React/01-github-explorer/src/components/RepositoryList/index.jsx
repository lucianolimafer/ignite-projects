import { useState, useEffect } from 'react';
import { RepositoryItem } from "../RepositoryItem";

import './styles.scss';

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/lucianolimafer/repos').then(res => res.json()).then(data => setRepositories(data))
  }, []);

  console.log(repositories)

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => (
          <RepositoryItem
            key={repository.id}
            repository={repository}
          />
        ))}
      </ul>
    </section>
  )
}
