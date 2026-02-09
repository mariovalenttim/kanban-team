export default function Topbar({ boardName, membersCount }) {
  return (
    <header className="topbar">
      <div>
        <div className="board-title">{boardName}</div>
        <div className="board-subtitle">Equipe: {membersCount} membros</div>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <button style={btnStyle}>Filtro</button>
        <button style={btnStyle}>+ Card</button>
      </div>
    </header>
  )
}

const btnStyle = {
  border: '1px solid #cfd4da',
  background: '#fff',
  padding: '10px 12px',
  borderRadius: '10px',
  cursor: 'pointer',
}
