import { useMemo, useState } from "react"
import Sidebar from "./components/layout/Sidebar.jsx"
import Topbar from "./components/layout/Topbar.jsx"
import BoardView from "./components/kanban/BoardView.jsx"
import { mockBoards, mockMembers } from "./data/mockData.js"
import "./styles/App.css"

export default function App() {
  const [boards] = useState(mockBoards)
  const [selectedBoardId, setSelectedBoardId] = useState(mockBoards[0].id)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false) // ← novo estado

  const selectedBoard = useMemo(() => {
    return boards.find((b) => b.id === selectedBoardId)
  }, [boards, selectedBoardId])

  // Função para alternar colapso
  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev)
  }

  return (
    <div className="app">
      <Sidebar
        boards={boards}
        selectedBoardId={selectedBoardId}
        onSelectBoard={setSelectedBoardId}
        collapsed={isSidebarCollapsed}  // ← passar estado para o sidebar
        onToggle={toggleSidebar}        // ← função de toggle
      />

      <div className="main">
        <Topbar
          boardName={selectedBoard?.name || "Sem board"}
          membersCount={selectedBoard?.memberIds?.length || 0}
        />

        <BoardView
          columns={selectedBoard?.columns || []}
          tasks={selectedBoard?.tasks || []}
          members={mockMembers}
        />
      </div>
    </div>
  )
}
