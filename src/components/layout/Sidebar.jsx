export default function Sidebar({ boards, selectedBoardId, onSelectBoard, collapsed, onToggle }) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Botão de colapso */}
      <div className={`sidebar-toggle ${collapsed ? "collapsed-toggle" : ""}`} onClick={onToggle}>
        ☰
      </div>

      {/* Mostrar conteúdo apenas quando aberto */}
      {!collapsed && (
        <>
          <h2 style={{ marginBottom: 14 }}>Kanban Team</h2>
          <p className="board-subtitle" style={{ marginBottom: 8 }}>Boards</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {boards.map((board) => (
              <button
                key={board.id}
                onClick={() => onSelectBoard(board.id)}
                style={{
                  border: '1px solid #cfd4da',
                  background: board.id === selectedBoardId ? '#dce7ff' : '#fff',
                  borderColor: board.id === selectedBoardId ? '#8db3ff' : '#cfd4da',
                  fontWeight: board.id === selectedBoardId ? 'bold' : 'normal',
                  padding: '10px 12px',
                  textAlign: 'left',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                {board.name}
              </button>
            ))}
          </div>

          <button style={{
            border: '1px solid #cfd4da',
            background: '#fff',
            padding: '10px 12px',
            borderRadius: '10px',
            marginTop: 14,
            cursor: 'pointer',
          }}>
            + Novo Board
          </button>
        </>
      )}
    </aside>
  )
}
