import TODO_API_URL from './TODO_API_URL'

export default async function toggleTodo(data) {
  const response = await fetch(`${TODO_API_URL}/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ completed: !data.completed })
  })
  if (!response) {
    throw new Error('Network response was not ok')
  }
  return {
    status: response.status,
    data: await response.json()
  }
}
