export const mockMembers = [
  { id: "m1", name: "Mario" },
  { id: "m2", name: "João" },
  { id: "m3", name: "Ana" },
]

export const mockBoards = [
  {
    id: "b1",
    name: "Finance Project",
    memberIds: ["m1", "m2", "m3"],
    columns: ["Backlog", "A Fazer", "Fazendo", "Revisão", "Feito"],

    tasks: [
      {
        id: "t1",
        title: "Criar tela Home (Dashboard)",
        description: "Mostrar saldo, receitas, despesas e gráficos iniciais.",
        status: "Backlog",
        priority: "Alta",
        assignedTo: "m1",
        createdAt: "2026-02-08",
      },
      {
        id: "t2",
        title: "Criar componente de Sidebar",
        description: "Sidebar com navegação e modo colapsável.",
        status: "A Fazer",
        priority: "Média",
        assignedTo: "m2",
        createdAt: "2026-02-08",
      },
      {
        id: "t3",
        title: "Implementar gráficos com Recharts",
        description: "Adicionar gráfico de pizza e gráfico de evolução.",
        status: "Fazendo",
        priority: "Alta",
        assignedTo: "m3",
        createdAt: "2026-02-08",
      },
      {
        id: "t4",
        title: "Ajustar responsividade no mobile",
        description: "Garantir que a UI fique boa em telas pequenas.",
        status: "Revisão",
        priority: "Média",
        assignedTo: "m1",
        createdAt: "2026-02-08",
      },
      {
        id: "t5",
        title: "Criar README do projeto",
        description: "Explicar o objetivo e como rodar localmente.",
        status: "Feito",
        priority: "Baixa",
        assignedTo: "m2",
        createdAt: "2026-02-08",
      },
    ],
  },

  {
    id: "b2",
    name: "Estudos",
    memberIds: ["m1", "m2"],
    columns: ["Backlog", "A Fazer", "Fazendo", "Feito"],

    tasks: [
      {
        id: "t6",
        title: "Estudar React Hooks",
        description: "useState, useEffect, useMemo, useCallback.",
        status: "A Fazer",
        priority: "Alta",
        assignedTo: "m1",
        createdAt: "2026-02-08",
      },
      {
        id: "t7",
        title: "Treinar CSS Grid",
        description: "Montar layout Kanban com colunas responsivas.",
        status: "Fazendo",
        priority: "Média",
        assignedTo: "m2",
        createdAt: "2026-02-08",
      },
      {
        id: "t8",
        title: "Aprender Git Flow",
        description: "branch, merge, pull request e conflitos.",
        status: "Backlog",
        priority: "Média",
        assignedTo: "m1",
        createdAt: "2026-02-08",
      },
    ],
  },

  {
    id: "b3",
    name: "Kanban do Grupo",
    memberIds: ["m1", "m2", "m3"],
    columns: ["Backlog", "A Fazer", "Fazendo", "Revisão", "Feito"],

    tasks: [
      {
        id: "t9",
        title: "Definir layout inicial",
        description: "Sidebar + Topbar + colunas do board.",
        status: "Feito",
        priority: "Alta",
        assignedTo: "m1",
        createdAt: "2026-02-08",
      },
      {
        id: "t10",
        title: "Criar sistema de membros fake",
        description: "Selector de usuário atual e filtro 'Minhas tarefas'.",
        status: "A Fazer",
        priority: "Alta",
        assignedTo: "m2",
        createdAt: "2026-02-08",
      },
      {
        id: "t11",
        title: "Adicionar histórico de ações",
        description: "Ex: Mario moveu card X para Fazendo.",
        status: "Backlog",
        priority: "Média",
        assignedTo: "m3",
        createdAt: "2026-02-08",
      },
    ],
  },
]
