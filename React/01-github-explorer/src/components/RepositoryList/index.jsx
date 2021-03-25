import { RepositoryItem } from "../RepositoryItem";

const repository = {
  name: 'OPA',
  description: 'deescritiopsn',
  link: 'linkskinf'
}

export default function RepositoryList() {
  return (
    <section className="repository-lis">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem
          repository={repository}
          description="Descrição do repositorio"
          link="link"
        />
        <RepositoryItem
          repository="keks"
          description="Descrição do repositorio"
          link="link"
        />
      </ul>
    </section>
  )
}
