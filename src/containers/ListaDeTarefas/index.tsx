import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    Titulo: 'Estudar React',
    prioridade: 'Média',
    status: 'Pendente',
    descricao: 'Estudar React para poder desenvolver aplicações'
  },
  {
    Titulo: 'Estudar TypeScript',
    prioridade: 'Alta',
    status: 'Pendente',
    descricao: 'Estudar TypeScript para poder desenvolver aplicações'
  },
  {
    Titulo: 'Estudar Angular',
    prioridade: 'Alta',
    status: 'Concluído',
    descricao: 'Estudar Angular para poder desenvolver aplicações'
  }
]

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.Titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.Titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
