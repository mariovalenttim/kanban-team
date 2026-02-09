export default function Sidebar({ boards, selectedBoardId, onSelectBoard }) {
  return (
    <aside className="sidebar">
      <h2 style={{ marginBottom: 14 }}>Kanban Team</h2>

      <p className="board-subtitle" style={{ marginBottom: 8 }}>
        Boards
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {boards.map((board) => (
          <button
            key={board.id}
            onClick={() => onSelectBoard(board.id)}
            style={{
              ...btnStyle,
              background: board.id === selectedBoardId ? '#dce7ff' : '#fff',
              borderColor: board.id === selectedBoardId ? '#8db3ff' : '#cfd4da',
              fontWeight: board.id === selectedBoardId ? 'bold' : 'normal',
            }}
          >
            {board.name}
          </button>
        ))}
      </div>

      <button style={{ ...btnStyle, marginTop: 14 }}>
        + Novo Board
      </button>
    </aside>
  )
}

const btnStyle = {
  border: '1px solid #cfd4da',
  background: '#fff',
  padding: '10px 12px',
  borderRadius: '10px',
  cursor: 'pointer',
  textAlign: 'left',
}
