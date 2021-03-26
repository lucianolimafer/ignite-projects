interface RepositoryProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem({ repository }: RepositoryProps) {
  return (
    <li>
      <strong>{repository.name ?? 'Unamed'}</strong>
      <p>{repository.description ?? 'No descripts'}</p>

      <a href={repository.html_url ?? ''} >
        Acessar repositório
      </a>
    </li>
  )
}
