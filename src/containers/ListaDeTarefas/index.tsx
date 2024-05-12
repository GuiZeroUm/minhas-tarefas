import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    Titulo: 'Estudar React',
    prioridade: 'Média',
    status: enums.Status.PENDENTE,
    descricao: 'Estudar React para poder desenvolver aplicações'
  },
  {
    Titulo: 'Estudar TypeScript',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE,
    descricao: 'Estudar TypeScript para poder desenvolver aplicações'
  },
  {
    Titulo: 'Estudar Angular',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA,
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
              prioridade={enums.Prioridade.IMPORTANTE}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
