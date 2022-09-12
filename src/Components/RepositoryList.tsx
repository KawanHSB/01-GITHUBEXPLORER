import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export default function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
      fetch("https://api.github.com/orgs/rocketseat/repos")
      .then(Response => Response.json())
      .then(data => setRepositories(data))
    })
  
    return (
      <section>
        <h1>Lista de repositorios</h1>
  
        <ul>
          {repositories.map(repository => {
            return <RepositoryItem key={repository.name} repository={repository}/>
          })}
        </ul>
  
      </section>
    )
  }