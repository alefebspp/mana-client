import { randomUUID } from 'crypto'
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/categories', () => {
    return HttpResponse.json([
      {
        id: randomUUID(),
        code: '1',
        description: 'Receitas',
        nature: 'contribution',
        belongs_to: null,
        hidden: false
      },
      {
        id: randomUUID(),
        code: '2',
        description: 'Despesas',
        nature: 'expense',
        belongs_to: null,
        hidden: false
      }
    ])
  })
]
