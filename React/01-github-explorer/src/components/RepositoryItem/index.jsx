export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'No name'}</strong>
      <p>{props.description ?? 'No descripts'}</p>

      <a href="">
        {props.link ?? ''}
          </a>
    </li>
  )
}
