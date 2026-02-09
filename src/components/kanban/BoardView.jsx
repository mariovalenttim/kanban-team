export default function BoardView({ columns, tasks, members }) {
  return (
    <main className="board-area">
      <div className="columns">
        {columns.map((col) => {
          const tasksInColumn = tasks.filter((t) => t.status === col)

          return (
            <section className="column" key={col}>
              <div className="column-header">
                <h3>{col}</h3>
                <span className="column-count">{tasksInColumn.length}</span>
              </div>

              <div className="cards">
                {tasksInColumn.map((task) => {
                  const member = members.find((m) => m.id === task.assignedTo)

                  return (
                    <article className="card" key={task.id}>
                      <div className="card-title">{task.title}</div>

                      {task.description && (
                        <div className="card-description">
                          {task.description}
                        </div>
                      )}

                      <div className="card-footer">
                        <span className={`badge priority-${task.priority}`}>
                          {task.priority}
                        </span>

                        <span className="assigned">
                          {member ? member.name : "Sem responsável"}
                        </span>
                      </div>
                    </article>
                  )
                })}

                {tasksInColumn.length === 0 && (
                  <div className="empty-column">
                    Nenhuma tarefa aqui
                  </div>
                )}
              </div>
            </section>
          )
        })}
      </div>
    </main>
  )
}
