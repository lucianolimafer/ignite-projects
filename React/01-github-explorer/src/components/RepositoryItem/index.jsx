export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'Unamed'}</strong>
      <p>{props.repository?.description ?? 'No descripts'}</p>

      <a href={props.repository?.html_url ?? ''} >
        Acessar repositório
      </a>
    </li>
  )
}
